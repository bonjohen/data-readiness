import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sec-cyber.johnboen.com',
  base: '/',
  integrations: [sitemap()],
  server: { port: 4349 },
});
