import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { parse, walkSync } from 'ultrahtml';
const hasClass = (node, name) => (node.attributes?.class ?? '').split(' ').includes(name);
const find = (root, predicate) => { const nodes = []; walkSync(root, node => { if (predicate(node)) nodes.push(node); }); return nodes; };
const text = node => {
 if (['script','style'].includes(node.name) || hasClass(node,'article-actions') || hasClass(node,'content-engagement')) return '';
 return node.type === 2 ? node.value : (node.children ?? []).map(text).join(' ');
};
const decode = value => value.replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n))).replace(/&#x([a-f\d]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16))).replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'").replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&nbsp;', ' ');
const plain = html => decode(html.replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const entries = [];
async function walk(dir) {
 for (const file of await readdir(dir, { withFileTypes:true })) {
  const full = path.join(dir,file.name);
  if (file.isDirectory()) await walk(full);
  else if (file.name === 'index.html') {
   const url = '/' + path.relative('dist', dir).split(path.sep).filter(Boolean).join('/') + '/';
   if (url === '//') continue;
   if (['/search/', '/articles/', '/technology/', '/business-finance/', '/editorials/', '/advertorials/'].includes(url)) continue;
   const html = await readFile(full, 'utf8');
   if (/http-equiv="refresh"/.test(html)) continue;
   const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '';
   const title = plain(main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? html.match(/<title>(.*?)<\/title>/i)?.[1] ?? '');
   const root = parse(main);
   const prose = find(root, node => hasClass(node,'prose'))[0];
   const landing = find(root, node => hasClass(node,'funny-share-landing'))[0];
   const header = find(root, node => hasClass(node,'article-header'))[0];
   if (prose && header) {
    entries.push({url,title,text:decode(`${header ? text(header) : ''} ${text(prose)}`).replace(/\s+/g,' ').trim()});
   } else if (landing) {
    const paragraphs = (landing.children ?? []).filter(node => node.name === 'p').slice(0,2);
    entries.push({url,title,text:decode(paragraphs.map(text).join(' ')).replace(/\s+/g,' ').trim()});
   }
  }
 }
}
await walk('dist');
await writeFile('dist/search-index.json',JSON.stringify(entries));
console.log(`Indexed ${entries.length} pages for text search.`);
