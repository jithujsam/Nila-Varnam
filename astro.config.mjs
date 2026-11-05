import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import { isProduction } from './scripts/mode.mjs';

// "Production" = a Vercel production deployment or BUILD_TARGET=production, unless launch.config.json has stagingMode: true.
const site = process.env.PUBLIC_SITE_URL || 'http://localhost:4321';

export default defineConfig({
  site,
  output: 'static',
  adapter: vercel(),
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !/\/(thank-you|404)\/?$/.test(page) })],
  build: { format: 'directory' },
  vite: {
    define: {
      // Compile-time constant: lets production builds drop every placeholder import.
      __BUILD_TARGET__: JSON.stringify(isProduction ? 'production' : 'preview'),
    },
  },
});
