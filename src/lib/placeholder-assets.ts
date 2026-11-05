import type { ImageMetadata } from 'astro';
// Imported ONLY from non-production builds (see artwork.ts). Never import this elsewhere.
const modules = import.meta.glob<{ default: ImageMetadata }>('/src/assets/placeholders/*.svg', { eager: true });
export default modules;
