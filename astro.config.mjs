import { defineConfig } from 'astro/config';
import { site } from './src/data/site.js';

export default defineConfig({
  site: site.url || process.env.SITE_URL || undefined,
  base: site.base,
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  server: { host: true, port: 4173, allowedHosts: ['terminal.local'] },
});
