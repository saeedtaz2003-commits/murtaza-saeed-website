// Format running text without changing headings, attributes or existing emphasis.
export function italicizeBrandHtml(value, running = true) {
  let emphasis = 0, headings = 0, paragraphs = 0;
  return value.split(/(<[^>]*>)/g).map(part => {
    if (part.startsWith('<')) {
      const tag = part.match(/^<\s*(\/?)\s*([\w-]+)/);
      if (tag) {
        const step = tag[1] ? -1 : 1, name = tag[2].toLowerCase();
        if (name === 'em' || name === 'i') emphasis += step;
        if (/^h[1-6]$/.test(name)) headings += step;
        if (name === 'p' || name === 'li') paragraphs += step;
      }
      return part;
    }
    return !emphasis && !headings && (running || paragraphs > 0)
      ? part.replaceAll('Murtaza Insights', '<em>Murtaza Insights</em>') : part;
  }).join('');
}
