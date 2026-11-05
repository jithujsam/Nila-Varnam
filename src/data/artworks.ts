/**
 * CENTRAL ARTWORK DATA — the only file you need to edit to change the paintings shown on the site.
 * Components, pages and the lightbox read everything from here. See docs/ARTWORK_GUIDE.md.
 *
 * status:
 *   'placeholder'  temporary stand-in image. Shown in local/preview builds only, clearly labelled.
 *                  It can NEVER reach a production build (the production build fails if one is used).
 *   'approved'     a real, owner-approved painting. The only status that appears in production.
 *   'draft'        real work not yet approved. Never shown anywhere.
 *
 * `file` is relative to src/assets/ (e.g. 'artworks/portrait-white-beard.webp').
 * Display order within a category follows `order` (lowest first).
 * Optional fields (title, description, medium, size) are simply omitted from the page when empty.
 * Keep this file free of imports so scripts/preflight.mjs can read it.
 */

export type ArtworkStatus = 'placeholder' | 'approved' | 'draft';
export type CategoryId = 'portrait' | 'devotional';

export interface Artwork {
  id: string;
  status: ArtworkStatus;
  /** Set to false to hide an entry without deleting it. */
  enabled?: boolean;
  category: CategoryId;
  order: number;
  file: string;
  width: number;
  height: number;
  /** One sentence describing what is visible. Mention a medium only when the owner has confirmed it. */
  alt: string;
  title?: string;
  description?: string;
  /** Only when confirmed by the owner, e.g. "Watercolour on paper". */
  medium?: string;
  /** Only when confirmed by the owner, e.g. "40 x 30 cm". */
  size?: string;
}

export interface Category {
  id: CategoryId;
  label: string;
  order: number;
  intro?: string;
}

export const categories: Category[] = [
  { id: 'portrait', label: 'Portraits', order: 1, intro: 'Portrait paintings, photographed whole.' },
  { id: 'devotional', label: 'Devotional paintings', order: 2, intro: 'Religious and devotional subjects.' },
];

export const artworks: Artwork[] = [
  // ---- TEMPORARY PLACEHOLDERS (preview/dev only; replace with real, approved works) ----
  { id: 'ph-01', status: 'placeholder', category: 'portrait', order: 1, file: 'placeholders/placeholder-01.svg', width: 1600, height: 2000, alt: 'Temporary placeholder image 01', title: 'Placeholder artwork 01', description: 'Temporary stand-in for a portrait painting.' },
  { id: 'ph-02', status: 'placeholder', category: 'portrait', order: 2, file: 'placeholders/placeholder-02.svg', width: 1600, height: 2000, alt: 'Temporary placeholder image 02', title: 'Placeholder artwork 02', description: 'Temporary stand-in for a portrait painting.' },
  { id: 'ph-03', status: 'placeholder', category: 'portrait', order: 3, file: 'placeholders/placeholder-03.svg', width: 2000, height: 1600, alt: 'Temporary placeholder image 03', title: 'Placeholder artwork 03', description: 'Temporary stand-in for a landscape-format painting.' },
  { id: 'ph-04', status: 'placeholder', category: 'portrait', order: 4, file: 'placeholders/placeholder-04.svg', width: 1500, height: 2000, alt: 'Temporary placeholder image 04', title: 'Placeholder artwork 04', description: 'Temporary stand-in for a portrait painting.' },
  { id: 'ph-05', status: 'placeholder', category: 'devotional', order: 1, file: 'placeholders/placeholder-05.svg', width: 1500, height: 1800, alt: 'Temporary placeholder image 05', title: 'Placeholder artwork 05', description: 'Temporary stand-in for a devotional painting.' },
  { id: 'ph-06', status: 'placeholder', category: 'devotional', order: 2, file: 'placeholders/placeholder-06.svg', width: 1600, height: 2000, alt: 'Temporary placeholder image 06', title: 'Placeholder artwork 06', description: 'Temporary stand-in for a devotional painting.' },

  // ---- REAL WORKS: copy this block, set status 'approved' once the owner approves the file ----
  // {
  //   id: 'portrait-white-beard',
  //   status: 'approved',
  //   category: 'portrait',
  //   order: 1,
  //   file: 'artworks/portrait-white-beard.webp', // create with: npm run images -- <original> portrait-white-beard
  //   width: 1080, height: 1430,
  //   alt: 'Portrait painting of an elderly man with a full white beard against a teal-blue background',
  //   title: '', medium: '', size: '',
  // },
];
