import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://data-readiness.johnboen.com',
  integrations: [mdx(), sitemap()],
  server: { port: 4339 },
});
