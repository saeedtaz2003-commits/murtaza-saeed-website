/** Shared heading alignment for desktop contents and the Profile contents menus. */
export function initSectionNavigation(selector: string, stickyContents?: string) {
  const header = document.querySelector<HTMLElement>('.site-header');
  const offset = () => {
    const contents = stickyContents ? document.querySelector<HTMLElement>(stickyContents) : null;
    const summary = contents && getComputedStyle(contents).display !== 'none'
      ? contents.querySelector('summary')?.getBoundingClientRect().height ?? 0 : 0;
    return (header?.getBoundingClientRect().height ?? 100) + summary + 12;
  };
  document.querySelectorAll<HTMLAnchorElement>(selector).forEach(link => {
    link.addEventListener('click', event => {
      const hash = link.hash;
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (!target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      link.closest('details')?.removeAttribute('open');
      history.pushState(null, '', hash);
      requestAnimationFrame(() => {
        window.scrollTo({ top: Math.max(0, scrollY + target.getBoundingClientRect().top - offset()), behavior: 'smooth' });
      });
    });
  });
}
