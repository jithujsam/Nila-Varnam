// Generates TEMPORARY placeholder images: abstract, painterly, procedurally generated. They are NOT artwork by the studio
// and never depict a real project. Each is tagged "Placeholder" on the page and can never reach production.
import sharp from 'sharp';
import { mkdirSync, rmSync, readdirSync } from 'node:fs';

const out = 'src/assets/placeholders';
mkdirSync(out, { recursive: true });
for (const f of readdirSync(out)) rmSync(`${out}/${f}`);

// seeded RNG so output is stable
const rng = (seed) => () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);

const sets = [
  { n: '01', w: 1500, h: 1875, seed: 11, base: '#0b2b2d', cols: ['#0d6b6e', '#c39a6b', '#e9dfc9', '#08494b'], horizon: 0.58 },
  { n: '02', w: 1500, h: 1875, seed: 23, base: '#d9cdb5', cols: ['#b3562f', '#5b4636', '#e9dfc9', '#8a6234'], horizon: 0.5 },
  { n: '03', w: 2000, h: 1400, seed: 37, base: '#16324a', cols: ['#3f6f8f', '#c39a6b', '#e6d8bd', '#0b1c2c'], horizon: 0.62 },
  { n: '04', w: 1500, h: 2000, seed: 41, base: '#7a3d2a', cols: ['#c39a6b', '#2a2118', '#e9d8b4', '#9c2019'], horizon: 0.44 },
  { n: '05', w: 1500, h: 1800, seed: 53, base: '#3d4a3a', cols: ['#8a9a6a', '#d9cdb5', '#5b4636', '#1d2a22'], horizon: 0.55 },
  { n: '06', w: 1600, h: 1600, seed: 67, base: '#e3dccb', cols: ['#0d6b6e', '#8a6234', '#2a2118', '#c39a6b'], horizon: 0.5 },
  { n: '07', w: 1500, h: 1950, seed: 79, base: '#13232b', cols: ['#4f7a8a', '#c39a6b', '#e9dfc9', '#7a3a2a'], horizon: 0.6 },
  { n: '08', w: 2000, h: 1300, seed: 97, base: '#caa77a', cols: ['#5b4636', '#e9dfc9', '#0d6b6e', '#8a3a1e'], horizon: 0.52 },
];

for (const s of sets) {
  const { n, w, h, base, cols } = s; const r = rng(s.seed);
  const shapes = [];
  // broad colour fields
  for (let i = 0; i < 9; i++) {
    const c = cols[Math.floor(r() * cols.length)];
    const cx = r() * w, cy = h * (0.15 + r() * 0.8), rx = w * (0.25 + r() * 0.5), ry = h * (0.06 + r() * 0.2);
    shapes.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${c}" fill-opacity="${0.35 + r() * 0.4}" transform="rotate(${(r() - 0.5) * 14} ${cx} ${cy})"/>`);
  }
  // horizon band
  shapes.push(`<rect x="0" y="${h * s.horizon}" width="${w}" height="${h * (1 - s.horizon)}" fill="${cols[3]}" fill-opacity=".55"/>`);
  // brush strokes
  for (let i = 0; i < 38; i++) {
    const c = cols[Math.floor(r() * cols.length)];
    const x = r() * w, y = r() * h, len = w * (0.12 + r() * 0.4), th = 6 + r() * 38, a = (r() - 0.5) * 30;
    shapes.push(`<path d="M${x} ${y} q ${len / 2} ${(r() - 0.5) * 80} ${len} ${(r() - 0.5) * 40}" stroke="${c}" stroke-opacity="${0.25 + r() * 0.5}" stroke-width="${th * 1.6}" stroke-linecap="round" fill="none" transform="rotate(${a} ${x} ${y})"/>`);
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <filter id="paint" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="3" seed="${s.seed}" result="n"/>
      <feDisplacementMap in="SourceGraphic" in2="n" scale="38" xChannelSelector="R" yChannelSelector="G" result="d"/>
      <feGaussianBlur in="d" stdDeviation="9"/>
    </filter>
    <filter id="canvas"><feTurbulence type="fractalNoise" baseFrequency="0.9 0.7" numOctaves="2" seed="${s.seed + 3}"/><feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .13 0"/></filter>
    <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" seed="${s.seed + 9}"/><feColorMatrix type="matrix" values="0 0 0 0 .1  0 0 0 0 .08  0 0 0 0 .05  0 0 0 .22 0"/></filter>
  </defs>
  <rect width="${w}" height="${h}" fill="${base}"/>
  <g filter="url(#paint)">${shapes.join('')}</g>
  <rect width="${w}" height="${h}" filter="url(#grain)"/>
  <rect width="${w}" height="${h}" filter="url(#canvas)"/>
</svg>`;
  await sharp(Buffer.from(svg)).jpeg({ quality: 82, mozjpeg: true }).toFile(`${out}/placeholder-${n}.jpg`);
}
console.log(`Wrote ${sets.length} placeholder images to ${out}`);
