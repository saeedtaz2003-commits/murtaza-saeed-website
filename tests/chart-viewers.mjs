import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {parse,walkSync} from 'ultrahtml';
import {mobileCharts,chartViewerHref} from '../src/integrations/mobile-charts.mjs';
const find=(r,p)=>{const a=[];walkSync(r,n=>{if(p(n))a.push(n)});return a};
const cls=(n,c)=>(n.attributes?.class||'').split(' ').includes(c);
const text=n=>(n.type===2?n.value:(n.children||[]).map(text).join('')).replaceAll('&amp;','&').replaceAll('&#39;',"'");
let checks=0;
for(const [src,chart] of Object.entries(mobileCharts)) {
 const root=parse(await readFile('dist'+chartViewerHref(src)+'index.html','utf8'));
 const h1=find(root,n=>n.name==='h1');assert.equal(h1.length,1);assert.equal(text(h1[0]),chart.viewerTitle??chart.title);checks+=2;
 const blocks=find(root,n=>cls(n,'responsive-chart'));assert.equal(blocks.length,1);checks++;
 assert(text(blocks[0]).includes(chart.viewerNote??chart.note));checks++;
 assert.equal(find(root,n=>n.name==='meta'&&n.attributes.name==='viewport')[0].attributes.content,'width=device-width');checks++;
 assert.equal(find(root,n=>n.name==='a'&&text(n)==='Return to article').length,1);checks++;
 if(src.includes('price-cut')){assert.equal(find(root,n=>n.name==='polyline').length,2);assert(text(blocks[0]).includes('3% price cut'));assert(text(blocks[0]).includes('5% price cut'));checks+=3;}
}
const home=parse(await readFile('dist/index.html','utf8'));
const nav=find(home,n=>n.name==='nav'&&n.attributes.id==='nav')[0];assert.deepEqual(find(nav,n=>n.name==='a').map(text),['Home','About','Insights','Biz Buzz','Contact','Work With Me','Search']);checks++;
const footer=find(home,n=>cls(n,'footer-menu'))[0];assert.deepEqual(find(footer,n=>n.name==='a').map(text),['Home','About','Insights','Biz Buzz','Contact','Work With Me','Comments & Feedback']);checks++;
console.log(JSON.stringify({checks,failed:0}));
