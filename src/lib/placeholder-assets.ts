import type { ImageMetadata } from 'astro';
// Imported ONLY from non-production builds (see artwork.ts). Never import this elsewhere.
const modules = import.meta.glob<{ default: ImageMetadata }>('/src/assets/placeholders/*.{svg,jpg}', { eager: true });
export default modules;
