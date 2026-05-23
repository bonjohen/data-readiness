import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ftc-safeguards.johnboen.com',
  base: '/',
  integrations: [sitemap()],
  server: { port: 4344 },
});
