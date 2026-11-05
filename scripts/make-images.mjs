// Create a web derivative of an original painting. NEVER modifies the original.
// Usage: npm run images -- <original-file> <output-name> [cropBottomPx]
// Example: npm run images -- assets/artwork/original/artwork-02-portrait-white-beard-canvas.jpg portrait-white-beard
// Output: src/assets/artworks/<output-name>.webp (native width, never upscaled, sRGB, EXIF stripped)
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const [src, name, crop = '0'] = process.argv.slice(2);
if (!src || !name) { console.error('Usage: npm run images -- <original> <output-name> [cropBottomPx]'); process.exit(1); }
if (/assets\/artwork\/original/.test(name)) { console.error('Refusing to write into the originals folder.'); process.exit(1); }
mkdirSync('src/assets/artworks', { recursive: true });
const meta = await sharp(src).metadata();
const cropPx = Number(crop);
const out = `src/assets/artworks/${name}.webp`;
await sharp(src).extract({ left: 0, top: 0, width: meta.width, height: meta.height - cropPx }).toColourspace('srgb').webp({ quality: 84 }).toFile(out);
const m = await sharp(out).metadata();
console.log(`Wrote ${out} (${m.width}x${m.height}). Add it to src/data/artworks.ts with width ${m.width} and height ${m.height}.`);
