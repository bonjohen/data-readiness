import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://datareadiness.johnboen.com',
  integrations: [sitemap()],
  server: { port: 4339 },
});
