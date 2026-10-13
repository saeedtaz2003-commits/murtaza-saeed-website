// Mobile-only presentations of the four approved charts. The original desktop
// artwork and full-size destinations remain untouched. Values and notes are
// transcribed from those exact approved images, not from article estimates.
const escape = s => String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const bars = (rows, max, color, signed = false) => '<div class="mobile-chart-bars">' + rows.map(([label,value,display]) => `<div class="mobile-chart-row"><div class="mobile-chart-label">${escape(label)}</div><div class="mobile-chart-track${signed ? ' signed' : ''}"><span class="mobile-chart-bar" style="--bar-width:${Math.abs(value)/(signed ? max+3 : max)*100}%;--bar-start:${signed ? (value < 0 ? 0 : 3/(max+3)*100) : 0}%;--bar-color:${value < 0 ? '#c17b32' : color}">${signed ? '' : `<strong>${display}</strong>`}</span>${signed ? `<strong class="mobile-chart-value">${display}</strong>` : ''}</div></div>`).join('') + '</div>';
const lineChart = () => {
  const x = margin => 35+(margin-20)*4.25;
  const y = value => 250-value*6;
  const series = [[3,'#7447d7',false],[5,'#101d38',true]];
  let svg = '<svg viewBox="0 0 240 285" role="img" aria-label="Additional sales volume required for 3% and 5% price cuts at original contribution margins of 20%, 30%, 40% and 60%"><g font-family="Arial,sans-serif" font-size="13" fill="#101d38">';
  for (const tick of [0,10,20,30]) svg += `<line x1="28" x2="220" y1="${y(tick)}" y2="${y(tick)}" stroke="#e8e5ef"/><text x="24" y="${y(tick)+4}" text-anchor="end">${tick}</text>`;
  svg += '<path d="M28 25V250H220" fill="none" stroke="#101d38"/>';
  for (const margin of [20,30,40,60]) svg += `<text x="${x(margin)}" y="274" text-anchor="middle">${margin}%</text>`;
  for (const [cut,color,dashed] of series) {
    const points = Array.from({length:81},(_,i)=>{const margin=20+i*.5;return `${x(margin)},${y(cut/(margin-cut)*100)}`;}).join(' ');
    svg += `<polyline points="${points}" fill="none" stroke="${color}" stroke-width="3"${dashed ? ' stroke-dasharray="8 5"' : ''}/>`;
    for (const margin of [20,30,40,60]) { const value=cut/(margin-cut)*100; svg += `<circle cx="${x(margin)}" cy="${y(value)}" r="3.5" fill="${color}"/><text x="${x(margin)}" y="${y(value)+(dashed ? -12 : 22)}" text-anchor="middle" font-size="16" font-weight="700" fill="${color}">${value.toFixed(1)}%</text>`; }
  }
  return svg+'</g></svg>';
};
export const mobileCharts = {
  '/images/simbisa-kenya-fy2026-performance-chart.png': {
    title:'Simbisa Kenya FY2026: Lower Spend, Stronger Performance',
    body:bars([['Average spend (US$)',-3,'−3%'],['Revenue',11,'+11%'],['Customer volumes',14,'+14%'],['Operating profit',16,'+16%'],['Delivery orders',59,'+59%']],60,'#7447d7',true)+'<div class="mobile-chart-axis">Year-on-year change</div>',
    note:'Source: Simbisa Brands FY2026 audited abridged results. Average customer spending is measured in US dollar terms.'
  },
  '/images/price-cut-volume-chart-complete.png': {
    title:'How much extra volume does a price cut need?',
    body:'<div class="mobile-chart-subtitle">Illustrative — not Simbisa’s margins</div><div class="mobile-chart-legend"><span><i></i>3% price cut</span><span><i class="dashed"></i>5% price cut</span></div><div class="mobile-chart-axis">Additional sales volume required (%)</div>'+lineChart()+'<div class="mobile-chart-axis">Original contribution margin (%)</div>',
    note:'Preserves total contribution; assumes unchanged variable cost per unit and fixed costs.'
  },
  '/images/quickmart-v26-figure-1.png': {
    body:bars([['Quickmart dividend',6.3,'6.3%'],['364-day T-bill',7.7,'7.7%'],['IFB · 9.3 years',12.2,'12.2%'],['IFB · 12.7 years',12.7,'12.7%'],['IFB · 16.2 years',13.1,'13.1%']],13.1,'#6946a2')
  },
  '/images/quickmart-v26-figure-2.png': {
    body:bars([['FY2026',95,'95%'],['FY2027',90,'90%'],['FY2028 onward*',80,'≥80%']],95,'#6946a2')
  }
};
export function enhanceMobileCharts(html) {
  return html.replace(/<figure class="article-chart">([\s\S]*?)<\/figure>/g,(original,body)=>{
    const src=body.match(/<img[^>]*src="([^"]+)"/)?.[1];
    const chart=mobileCharts[src];
    if (!chart) return original;
    return `<figure class="article-chart has-mobile-chart"><div class="desktop-chart">${body}</div><div class="mobile-chart">${chart.title ? `<div class="mobile-chart-title">${escape(chart.title)}</div>` : ''}${chart.body}${chart.note ? `<div class="mobile-chart-note">${escape(chart.note)}</div>` : ''}<a class="mobile-chart-full" href="${src}" target="_blank" rel="noopener noreferrer">View full-size chart</a></div></figure>`;
  });
}
