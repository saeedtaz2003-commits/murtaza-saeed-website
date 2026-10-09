import { readdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { parse, renderSync, walkSync } from 'ultrahtml';

// Build-time enhancement uses the rendered original table cells, including
// inline markup and links. CSS exposes only one presentation at a time.
export function enhanceArticleTables(html) {
  const tree = parse(html);
  const tables = [];
  walkSync(tree, node => {
    if (node.name !== 'table') return;
    let ancestor = node.parent;
    while (ancestor && ancestor.name !== 'article') ancestor = ancestor.parent;
    if (ancestor) tables.push(node);
  });
  let changed = false;
  for (const table of tables) {
    const rows = [];
    walkSync(table, node => { if (node.name === 'tr') rows.push(node); });
    const cells = row => row.children.filter(node => ['th', 'td'].includes(node.name));
    const headings = rows[0] && cells(rows[0]);
    if (!headings || headings.length < 3 || headings.some(cell => cell.name !== 'th') || rows.some(row => cells(row).length !== headings.length || cells(row).some(cell => cell.attributes.colspan || cell.attributes.rowspan))) continue;
    const content = cell => cell.children.map(renderSync).join('');
    const cards = rows.slice(1).map(row => '<dl class="comparison-card">' + cells(row).map((cell, index) => '<div class="comparison-field"><dt>' + content(headings[index]) + '</dt><dd>' + content(cell) + '</dd></div>').join('') + '</dl>').join('');
    const wrapper = parse('<div class="responsive-article-table"><div class="responsive-table-desktop">' + renderSync(table) + '</div><div class="responsive-table-cards" role="region" aria-label="Table comparison">' + cards + '</div></div>').children[0];
    const parent = table.parent;
    wrapper.parent = parent;
    parent.children.splice(parent.children.indexOf(table), 1, wrapper);
    changed = true;
  }
  return changed ? renderSync(tree) : html;
}

export default function responsiveTables() {
  return { name: 'responsive-article-tables', hooks: {
    'astro:build:done': async ({ dir }) => {
      async function visit(directory) {
        for (const entry of await readdir(directory, { withFileTypes: true })) {
          const file = path.join(directory, entry.name);
          if (entry.isDirectory()) await visit(file);
          else if (entry.name.endsWith('.html')) {
            const html = await readFile(file, 'utf8');
            const enhanced = enhanceArticleTables(html);
            if (enhanced !== html) await writeFile(file, enhanced);
          }
        }
      }
      await visit(fileURLToPath(dir));
    }
  } };
}
