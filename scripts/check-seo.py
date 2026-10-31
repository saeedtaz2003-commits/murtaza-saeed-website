"""Check built metadata, linked assets and sitemap eligibility. Run after npm run build."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, unquote
import json
import xml.etree.ElementTree as ET

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(); self.meta={}; self.canonical=[]; self.images=[]; self.json=[]; self.in_json=False; self.buffer=''; self.feed(text)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='meta': self.meta[a.get('name',a.get('property'))]=a.get('content')
        if tag=='link' and a.get('rel')=='canonical': self.canonical.append(a['href'])
        if tag=='img': self.images.append(a)
        if tag=='script' and a.get('type')=='application/ld+json': self.in_json=True; self.buffer=''
    def handle_data(self, data):
        if self.in_json: self.buffer+=data
    def handle_endtag(self, tag):
        if tag=='script' and self.in_json: self.json.append(json.loads(self.buffer)); self.in_json=False

pages=list(Path('dist').rglob('*.html')); checks=0
for path in pages:
    p=Page(path.read_text())
    assert len(p.canonical)==1, path
    assert p.canonical[0].startswith('https://murtazainsights.com/'), path
    assert p.meta.get('description') and p.meta.get('og:title') and p.meta.get('twitter:title'), path
    assert p.meta['description']==p.meta['og:description']==p.meta['twitter:description'], path
    checks+=4
    for im in p.images:
        assert 'alt' in im, path
        if im.get('src','').startswith('/'): assert Path('dist'+unquote(im['src'])).is_file(), (path,im['src'])
        checks+=1
    for schema in p.json:
        if schema['@type']=='Article':
            assert schema['articleSection'] in ['Business Performance Reviews','Business Analysis & Strategy','Information Systems & Process Improvement']
            assert schema['datePublished']<=schema['dateModified']
            assert schema['author']['@id']=='https://murtazainsights.com/about/#person'
            checks+=3
        if schema['@type']=='CreativeWork':
            assert schema['url']==p.canonical[0] and schema['image'].startswith('https://murtazainsights.com/images/')
            # Canonical pages stay put; only fragment-marked sharing URLs enter the slider.
            # Preview crawlers never receive URL fragments, so they parse this page's metadata.
            html=path.read_text()
            assert "window.location.hash === '#view=slider'" in html and 'window.location.replace(viewerUrl)' in html, path
            assert f'/the-lighter-side/?meme={path.parent.name}#funny-slider' in html, path
            assert f'/the-lighter-side/{path.parent.name}/#view=slider' in html, path
            checks+=2
for path in ['dist/search/index.html','dist/404.html','dist/the-lighter-side/domain-name-mistake/index.html']:
    assert Page(Path(path).read_text()).meta['robots']=='noindex, follow'; checks+=1
ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
urls=[n.text for n in ET.parse('dist/sitemap-0.xml').findall('.//s:loc',ns)]
for forbidden in ['/search/','/404/','/articles/','/business-finance/','/technology/','/editorials/','/advertorials/','/the-lighter-side/domain-name-mistake/']:
    assert 'https://murtazainsights.com'+forbidden not in urls; checks+=1
assert 'https://murtazainsights.com/the-lighter-side/lexus-motomorphosis/' in urls; checks+=1
print(f'{checks} built SEO/asset assertions passed across {len(pages)} HTML pages; {len(urls)} sitemap URLs.')
