import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pci-dss.johnboen.com',
  base: '/',
  integrations: [sitemap()],
  server: { port: 4346 },
});
