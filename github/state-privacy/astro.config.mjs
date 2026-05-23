import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://state-privacy.johnboen.com',
  base: '/',
  integrations: [sitemap()],
  server: { port: 4348 },
});
