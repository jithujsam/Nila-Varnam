// Generates clearly labelled TEMPORARY placeholder images (flat tonal fields, no figurative content).
// These are NOT artwork. They exist only so the site is visually complete during development.
import { writeFileSync, mkdirSync } from 'node:fs';

const out = 'src/assets/placeholders';
mkdirSync(out, { recursive: true });

const sets = [
  { n: '01', w: 1600, h: 2000, bg: '#08494B', a: '#0D6B6E', b: '#C39A6B' },
  { n: '02', w: 1600, h: 2000, bg: '#D5D0C4', a: '#C39A6B', b: '#5B4636' },
  { n: '03', w: 2000, h: 1600, bg: '#0D6B6E', a: '#F4EFE3', b: '#052F31' },
  { n: '04', w: 1500, h: 2000, bg: '#C39A6B', a: '#8A6234', b: '#F4EFE3' },
  { n: '05', w: 1500, h: 1800, bg: '#5B4636', a: '#C39A6B', b: '#D5D0C4' },
  { n: '06', w: 1600, h: 2000, bg: '#E3EEEC', a: '#0D6B6E', b: '#D5D0C4' },
];

for (const s of sets) {
  const { n, w, h, bg, a, b } = s;
  const fs = Math.round(w * 0.045);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="Temporary placeholder ${n}">
  <rect width="${w}" height="${h}" fill="${bg}"/>
  <path d="M0 ${h * 0.62} C ${w * 0.3} ${h * 0.5}, ${w * 0.55} ${h * 0.78}, ${w} ${h * 0.58} L ${w} ${h} L 0 ${h} Z" fill="${a}"/>
  <path d="M0 ${h * 0.82} C ${w * 0.35} ${h * 0.7}, ${w * 0.7} ${h * 0.95}, ${w} ${h * 0.8} L ${w} ${h} L 0 ${h} Z" fill="${b}"/>
  <rect x="${w * 0.08}" y="${h * 0.08}" width="${w * 0.84}" height="${h * 0.84}" fill="none" stroke="#F4EFE3" stroke-opacity=".55" stroke-width="4" stroke-dasharray="28 20"/>
  <text x="50%" y="${h * 0.42}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${fs * 1.5}" font-weight="700" fill="#F4EFE3" fill-opacity=".92">PLACEHOLDER</text>
  <text x="50%" y="${h * 0.42 + fs * 1.6}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${fs}" fill="#F4EFE3" fill-opacity=".92">Temporary image ${n}</text>
  <text x="50%" y="${h * 0.42 + fs * 2.8}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="${fs * 0.7}" fill="#F4EFE3" fill-opacity=".85">Not artwork. Replace in src/data/artworks.ts</text>
</svg>
`;
  writeFileSync(`${out}/placeholder-${n}.svg`, svg);
}
console.log(`Wrote ${sets.length} placeholders to ${out}`);
