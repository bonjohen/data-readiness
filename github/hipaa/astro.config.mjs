import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hipaa.johnboen.com',
  base: '/',
  integrations: [sitemap()],
  server: { port: 4345 },
});
