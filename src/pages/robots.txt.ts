import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { IS_PRODUCTION } from '../lib/artwork';

export const GET: APIRoute = () => {
  const body = IS_PRODUCTION
    ? `User-agent: *\nAllow: /\nDisallow: /thank-you/\n\nSitemap: ${new URL('/sitemap-index.xml', site.url)}\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
