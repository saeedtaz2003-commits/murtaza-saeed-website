import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import responsiveTables from './src/integrations/responsive-tables.mjs';

export default defineConfig({
  site: 'https://murtazainsights.com',
  integrations: [responsiveTables(), sitemap({
    filter: (page) => !new Set([
      '/404', '/search', '/articles', '/business-finance', '/technology',
      '/editorials', '/advertorials', '/the-lighter-side/domain-name-mistake'
    ]).has(new URL(page).pathname.replace(/\/$/, ''))
  })],
  output: 'static'
});
