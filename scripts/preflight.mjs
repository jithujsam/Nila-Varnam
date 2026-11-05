// Runs before every build. In a PRODUCTION build (VERCEL_ENV=production or BUILD_TARGET=production) it refuses to
// continue unless the site is genuinely ready: real approved artwork, no placeholders, enquiry backend configured.
import { readFileSync } from 'node:fs';

const isProd = process.env.VERCEL_ENV === 'production' || process.env.BUILD_TARGET === 'production';
const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), 'utf8');
const problems = [];

if (isProd) {
  for (const v of ['PUBLIC_SITE_URL', 'RESEND_API_KEY', 'ENQUIRY_TO_EMAIL', 'ENQUIRY_FROM_EMAIL']) {
    if (!process.env[v]) problems.push(`Missing environment variable ${v} (see docs/DEPLOYMENT.md).`);
  }
  const { artworks } = await import('../src/data/artworks.ts');
  const { placements } = await import('../src/data/placements.ts');
  const live = artworks.filter((a) => a.enabled !== false && a.status === 'approved');
  if (live.length === 0) problems.push('No approved artworks in src/data/artworks.ts. Placeholders cannot be published.');
  const ids = new Set(live.map((a) => a.id));
  const used = Object.values(placements).flat();
  for (const id of used) if (!ids.has(id)) problems.push(`src/data/placements.ts uses "${id}", which is not an approved, enabled artwork.`);
  for (const a of artworks.filter((a) => a.status === 'approved' && a.enabled !== false)) {
    if (/placeholder/i.test(a.file) || /placeholder/i.test(a.alt)) problems.push(`Artwork "${a.id}" is marked approved but looks like a placeholder.`);
  }
  if (/^https?:\/\/localhost/.test(process.env.PUBLIC_SITE_URL || '')) problems.push('PUBLIC_SITE_URL must be the real public URL.');
}

if (problems.length) {
  console.error('\nPRODUCTION PREFLIGHT FAILED\n' + problems.map((p) => ` - ${p}`).join('\n') + '\n');
  process.exit(1);
}
console.log(isProd ? 'Production preflight passed.' : 'Preview/development build: placeholders allowed, pages will be noindex.');
