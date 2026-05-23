import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eu-dora.johnboen.com',
  base: '/',
  integrations: [sitemap()],
  server: { port: 4351 },
});
