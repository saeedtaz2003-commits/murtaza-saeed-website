// Track actions only: never send message text, form values or contact details.
const production = ['murtazainsights.com', 'www.murtazainsights.com'].includes(location.hostname);
function contextFor(link: HTMLAnchorElement) {
  const panel = link.closest<HTMLElement>('[data-commentary-panel]');
  const image = link.closest<HTMLElement>('[data-item-id]');
  const title = panel?.querySelector('h2')?.textContent?.trim()
    || document.querySelector('main h1')?.textContent?.trim() || document.title;
  return { item: panel?.dataset.commentaryId || image?.dataset.itemId || location.pathname,
    title, path: location.pathname };
}
function prepareWhatsApp(link: HTMLAnchorElement) {
  const url = new URL(link.href);
  // Sharing links have no recipient; preserve them unchanged.
  if (url.hostname !== 'wa.me' || url.pathname !== '/254726829626') return;
  const context = contextFor(link);
  const original = link.dataset.miOriginalMessage ?? url.searchParams.get('text') ?? '';
  link.dataset.miOriginalMessage = original;
  const panel = link.closest('[data-commentary-panel]');
  const source = panel?.querySelector<HTMLElement>('[data-content-share]')?.dataset.shareUrl
    ?? new URL(context.path, location.origin).toString();
  url.searchParams.set('text', `${original}\nI came from: ${context.title}\n${source}`);
  link.href = url.toString();
}
document.querySelectorAll<HTMLAnchorElement>('a[href*="wa.me/254726829626"]').forEach(prepareWhatsApp);
document.addEventListener('click', (event) => {
  const link = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href]') : null;
  if (!link) return;
  prepareWhatsApp(link);
  const url = new URL(link.href);
  const context = contextFor(link);
  let name = '';
  if (url.hostname === 'wa.me' && url.pathname === '/254726829626') name = 'whatsapp_updates_click';
  else if (link.classList.contains('engagement-comment') || link.href.includes('7bd6s91ezQGqkLHf9')) name = 'comment_click';
  else if (link.href.includes('AWvix79y4bZUg7rQ6')) name = 'advisory_enquiry_click';
  else if (link.classList.contains('engagement-article') || link.hasAttribute('data-destination-link')) name = 'biz_buzz_article_click';
  else if (link.closest('.engagement-share-menu')) name = 'share_click';
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (production && name && gtag) gtag('event', name, {
    content_id: context.item, source_path: context.path,
    destination_path: url.origin === location.origin ? url.pathname : url.hostname,
    transport_type: 'beacon'
  });
}, true);
