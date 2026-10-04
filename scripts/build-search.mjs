import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
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
   if (['/search/', '/articles/', '/technology/', '/business-finance/'].includes(url)) continue;
   const html = await readFile(full, 'utf8');
   if (/http-equiv="refresh"/.test(html)) continue;
   const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '';
   const title = plain(main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? html.match(/<title>(.*?)<\/title>/i)?.[1] ?? '');
   entries.push({url,title,text:plain(main)});
  }
 }
}
await walk('dist');
await writeFile('dist/search-index.json',JSON.stringify(entries));
console.log(`Indexed ${entries.length} pages for text search.`);
