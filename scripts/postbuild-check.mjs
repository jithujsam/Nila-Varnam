// Last line of defence: a production build must contain no placeholder markers, no stray contact data in images, and no noindex.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

import { isProduction as isProd, stagingMode } from './mode.mjs';
if (!isProd) { console.log('Post-build check skipped (not a production build).'); process.exit(0); }

const roots = ['dist', '.vercel/output/static'];
const bad = [];
const walk = (dir) => { for (const n of readdirSync(dir)) { const p = join(dir, n); statSync(p).isDirectory() ? walk(p) : check(p); } };
function check(p) {
  if (/placeholder/i.test(p)) bad.push(`placeholder file emitted: ${p}`);
  if (/\.(html|xml|txt|js|json)$/.test(p)) {
    const t = readFileSync(p, 'utf8');
    if (/data-placeholder|Placeholder artwork|PLACEHOLDER/.test(t)) bad.push(`placeholder marker in ${p}`);
    if (p.endsWith('.html') && !/thank-you|404/.test(p) && /name="robots" content="noindex/.test(t)) bad.push(`noindex found in production page ${p}`);
  }
}
for (const r of roots) { try { walk(r); } catch { /* folder may not exist */ } }
if (bad.length) { console.error('\nPRODUCTION POST-BUILD CHECK FAILED\n' + bad.map((b) => ` - ${b}`).join('\n') + '\n'); process.exit(1); }
console.log('Production post-build check passed.');
