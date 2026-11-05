import type { ImageMetadata } from 'astro';
import { artworks, categories, type Artwork, type Category, type CategoryId } from '../data/artworks';
import { placements } from '../data/placements';

export const IS_PRODUCTION = __BUILD_TARGET__ === 'production';

const realModules = import.meta.glob<{ default: ImageMetadata }>('/src/assets/artworks/*.{jpg,jpeg,png,webp,avif}', { eager: true });
// Placeholder images are only bundled outside production. The dead branch is removed from production builds.
const placeholderModules: Record<string, { default: ImageMetadata }> = IS_PRODUCTION
  ? {}
  : (await import('./placeholder-assets')).default;

export interface ResolvedArtwork extends Artwork {
  image: ImageMetadata;
  isPlaceholder: boolean;
}

function isShown(a: Artwork): boolean {
  if (a.enabled === false || a.status === 'draft') return false;
  if (IS_PRODUCTION) return a.status === 'approved';
  return a.status === 'approved' || a.status === 'placeholder';
}

function resolve(a: Artwork): ResolvedArtwork | null {
  const key = `/src/assets/${a.file}`;
  const mod = realModules[key] ?? placeholderModules[key];
  if (!mod) {
    if (IS_PRODUCTION) throw new Error(`Artwork "${a.id}": file not found at src/assets/${a.file}`);
    console.warn(`[artwork] "${a.id}" skipped: src/assets/${a.file} not found`);
    return null;
  }
  return { ...a, image: mod.default, isPlaceholder: a.status === 'placeholder' };
}

const all: ResolvedArtwork[] = artworks.filter(isShown).map(resolve).filter((x): x is ResolvedArtwork => x !== null);

export function getArtworks(category?: CategoryId): ResolvedArtwork[] {
  return all.filter((a) => !category || a.category === category).sort((a, b) => a.order - b.order);
}

export function getCategories(): (Category & { works: ResolvedArtwork[] })[] {
  return [...categories]
    .sort((a, b) => a.order - b.order)
    .map((c) => ({ ...c, works: getArtworks(c.id) }))
    .filter((c) => c.works.length > 0);
}

export function getById(id: string): ResolvedArtwork {
  const found = all.find((a) => a.id === id);
  if (found) return found;
  if (IS_PRODUCTION) throw new Error(`Placement refers to artwork "${id}", which is not an approved, enabled artwork.`);
  const fallback = all[0];
  if (!fallback) throw new Error('No artworks available. Add entries to src/data/artworks.ts.');
  return fallback;
}

export function getPlacement<K extends keyof typeof placements>(key: K): K extends `${string}Works` ? ResolvedArtwork[] : ResolvedArtwork {
  const v = placements[key] as unknown;
  return (Array.isArray(v) ? v.map((id: string) => getById(id)) : getById(v as string)) as never;
}

export const hasPlaceholders = all.some((a) => a.isPlaceholder);
