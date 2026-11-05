import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// A "production" build is a Vercel production deployment, or any build that sets BUILD_TARGET=production.
const isProduction = process.env.VERCEL_ENV === 'production' || process.env.BUILD_TARGET === 'production';
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
