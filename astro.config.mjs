import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import responsiveTables from './src/integrations/responsive-tables.mjs';

export default defineConfig({
  site: 'https://murtazainsights.com',
  integrations: [responsiveTables(), sitemap({ filter: (page) => !/\/(editorials|advertorials)\/?$/.test(page) })],
  output: 'static'
});
