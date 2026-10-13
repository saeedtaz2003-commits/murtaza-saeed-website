import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {parse,walkSync} from 'ultrahtml';
import {enhanceMobileCharts} from '../src/integrations/mobile-charts.mjs';
const find=(r,p)=>{const a=[];walkSync(r,n=>{if(p(n))a.push(n)});return a;};
const cls=(n,c)=>(n.attributes?.class||'').split(' ').includes(c);
const text=n=>n.type===2?n.value:(n.children||[]).map(text).join('');
let checks=0;
for(const [slug,assets] of [
 ['quickmart-ipo-ksh7-50-is-it-worth-buying',[['quickmart-v26-figure-1.png',['6.3%','7.7%','12.2%','12.7%','13.1%']],['quickmart-v26-figure-2.png',['95%','90%','≥80%']]]],
 ['can-cutting-prices-improve-your-business-performance',[['simbisa-kenya-fy2026-performance-chart.png',['−3%','+11%','+14%','+16%','+59%']],['price-cut-volume-chart-complete.png',['17.6%','11.1%','8.1%','5.3%','33.3%','20.0%','14.3%','9.1%']]]]
]){
 const root=parse(await readFile(`dist/${slug}/index.html`,'utf8'));
 const figures=find(root,n=>cls(n,'has-mobile-chart'));assert.equal(figures.length,2);checks++;
 for(let i=0;i<2;i++){
  const original=find(figures[i],n=>cls(n,'desktop-chart'))[0],mobile=find(figures[i],n=>cls(n,'mobile-chart'))[0];
  const img=find(original,n=>n.name==='img')[0];assert.equal(img.attributes.src,'/images/'+assets[i][0]);assert(img.attributes.width&&img.attributes.height);checks+=2;
  for(const value of assets[i][1]){assert(text(mobile).includes(value),`${assets[i][0]} missing ${value}`);checks++;}
  const full=find(mobile,n=>cls(n,'mobile-chart-full'))[0];assert.equal(full.attributes.href,img.attributes.src);checks++;
 }
 assert.equal(find(root,n=>n.name==='a'&&text(n).trim()==='Discuss an Assignment').length,1);checks++;
}
const unknown='<figure class="article-chart"><a href="/other.png"><img src="/other.png" /></a></figure>';assert.equal(enhanceMobileCharts(unknown),unknown);checks++;
console.log(JSON.stringify({checks,failed:0}));
