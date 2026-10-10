import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { parse, walkSync, renderSync } from 'ultrahtml';
import { enhanceArticleTables } from '../src/integrations/responsive-tables.mjs';
const find=(root,p)=>{const found=[];walkSync(root,n=>{if(p(n))found.push(n)});return found};
const cls=(n,c)=>(n.attributes?.class??'').split(' ').includes(c);
const text=n=>n.type===2?n.value:(n.children??[]).map(text).join('');let checks=0;
for(const slug of ['quickmart-ipo-ksh7-50-is-it-worth-buying','from-paper-to-erp-ai-finance-function','mbappe-endorsement-to-ownership','can-cutting-prices-improve-your-business-performance','dont-invent-it-technify-it']){
const root=parse(await readFile('dist/'+slug+'/index.html','utf8'));
const wrappers=find(root,n=>cls(n,'responsive-article-table'));
for(const wrapper of wrappers){const rows=find(wrapper,n=>n.name==='tr').map(r=>r.children.filter(n=>['th','td'].includes(n.name)));const cards=find(wrapper,n=>cls(n,'comparison-card'));assert.equal(cards.length,rows.length-1);checks++;
for(let i=0;i<cards.length;i++){const labels=find(cards[i],n=>n.name==='dt'),values=find(cards[i],n=>n.name==='dd');assert.equal(labels.length,rows[0].length);checks++;
for(let j=0;j<labels.length;j++){assert.equal(text(labels[j]),text(rows[0][j]));assert.equal(text(values[j]),text(rows[i+1][j]));assert.equal(values[j].children.map(renderSync).join(''),rows[i+1][j].children.map(renderSync).join(''));checks+=3;}}}
if(slug.startsWith('quickmart')){assert.equal(wrappers.length,2);assert(text(root).includes('not verified current secondary-market quotations'));checks+=2;}
const sources=find(root,n=>cls(n,'article-sources'));for(const source of sources){assert(!('open' in source.attributes));assert(cls(source.parent,'prose'));const siblings=source.parent.children.filter(n=>n.type===1);assert(cls(siblings[siblings.indexOf(source)+1],'article-actions'));assert.equal(source.children.filter(n=>n.type===1)[0].name,'summary');assert(find(source,n=>n.name==='a').every(n=>new URL(n.attributes.href).protocol==='https:'));checks+=4;}
}
const irregular='<article><table><tr><th colspan="2">Header</th></tr><tr><td>a</td><td>b</td></tr></table></article>';assert.equal(enhanceArticleTables(irregular),irregular);checks++;
const outside='<table><tr><th>A</th><th>B</th><th>C</th></tr><tr><td>1</td><td>2</td><td>3</td></tr></table>';assert.equal(enhanceArticleTables(outside),outside);checks++;
const marked='<article><table><tr><th>A</th><th>B</th><th>C</th></tr><tr><td>1</td><td><strong>2</strong></td><td><a href="/evidence">3</a></td></tr></table></article>';assert(enhanceArticleTables(marked).includes('<dd><a href="/evidence">3</a></dd>'));checks++;
console.log(JSON.stringify({checks,failed:0}));
