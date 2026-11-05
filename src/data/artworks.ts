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
export type CategoryId = 'botanical' | 'portrait' | 'devotional' | 'other' | 'studio';

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
  { id: 'botanical', label: 'Botanical paintings', order: 1, intro: 'Plants and flowers, painted from observation.' },
  { id: 'portrait', label: 'Portraits', order: 2, intro: 'Portrait paintings, photographed whole.' },
  { id: 'devotional', label: 'Devotional paintings', order: 3, intro: 'Religious and devotional subjects.' },
  { id: 'other', label: 'Landscapes and sketches', order: 4, intro: 'A harbour scene and a pencil sketch.' },
  // 'studio' is not a gallery room: it holds photographs of the artist and the studio, shown on the Artist page only.
];

export const artworks: Artwork[] = [
  // Owner-supplied images, processed with scripts (see docs/ARTWORK_GUIDE.md). No titles, mediums or sizes yet: the owner supplies them.
  { id: 'botanical-banana-plant', status: 'approved', category: 'botanical', order: 1, file: 'artworks/botanical-banana-plant.webp', width: 955, height: 1417, alt: "Botanical painting of a banana plant with large green leaves and a hanging red flower, on white paper" },
  { id: 'botanical-white-lotus', status: 'approved', category: 'botanical', order: 2, file: 'artworks/botanical-white-lotus.webp', width: 1046, height: 1216, alt: "Botanical painting of two white lotus flowers with round green leaves and roots on a pale blue ground" },
  { id: 'botanical-pink-red-bloom', status: 'approved', category: 'botanical', order: 3, file: 'artworks/botanical-pink-red-bloom.webp', width: 1017, height: 1367, alt: "Botanical painting of a large pink and red bloom rising from pale green leaves on white paper" },
  { id: 'botanical-magnolia-pods', status: 'approved', category: 'botanical', order: 4, file: 'artworks/botanical-magnolia-pods.webp', width: 890, height: 1216, alt: "Botanical painting of seed pods and dark green and maroon leaves on a branch" },
  { id: 'botanical-banana-bunch', status: 'approved', category: 'botanical', order: 5, file: 'artworks/botanical-banana-bunch.webp', width: 1032, height: 1600, alt: "Painting of a bunch of green and yellow bananas among large green leaves" },
  { id: 'botanical-red-flower-framed', status: 'approved', category: 'botanical', order: 6, file: 'artworks/botanical-red-flower-framed.webp', width: 1121, height: 1440, alt: "Botanical painting of a tall red-orange flower with a crown of green leaves, in a dark wooden frame" },
  { id: 'portrait-white-beard-teal-ground', status: 'approved', category: 'portrait', order: 1, file: 'artworks/portrait-white-beard-teal-ground.webp', width: 1080, height: 1430, alt: "Portrait painting of an elderly man with a full white beard against a teal-blue background" },
  { id: 'portrait-watercolour-man-blue-shirt', status: 'approved', category: 'portrait', order: 2, file: 'artworks/portrait-watercolour-man-blue-shirt.webp', width: 982, height: 625, alt: "Portrait of a man with a moustache glancing sideways, in a blue shirt, against pale washes of colour" },
  { id: 'portrait-nun-framed', status: 'approved', category: 'portrait', order: 3, file: 'artworks/portrait-nun-framed.webp', width: 1199, height: 1600, alt: "Framed portrait painting of a smiling woman in a black veil and white habit" },
  { id: 'portrait-elder-hand-to-mouth', status: 'approved', category: 'portrait', order: 4, file: 'artworks/portrait-elder-hand-to-mouth.webp', width: 1098, height: 1574, alt: "Portrait of an elderly bearded man with a hand raised to his mouth, in green and blue washes" },
  { id: 'devotional-christ-framed', status: 'approved', category: 'devotional', order: 1, file: 'artworks/devotional-christ-framed.webp', width: 1340, height: 1574, alt: "Framed painting of Christ with a raised hand in blessing, in a red robe and green sash" },
  { id: 'devotional-ganesha-miniature', status: 'approved', category: 'devotional', order: 2, file: 'artworks/devotional-ganesha-miniature.webp', width: 1440, height: 964, alt: "Miniature-style painting of Ganesha seated on a swing in a garden courtyard, with a red patterned border" },
  { id: 'marine-ship-at-harbour', status: 'approved', category: 'other', order: 1, file: 'artworks/marine-ship-at-harbour.webp', width: 1696, height: 1191, alt: "Painting of a blue ship moored at a harbour under a cloudy sky with flying birds" },
  { id: 'sketch-pencil-portrait', status: 'approved', category: 'other', order: 2, file: 'artworks/sketch-pencil-portrait.webp', width: 2000, height: 2686, alt: "Pencil portrait sketch of a man with a moustache" },
  // Owner-supplied photograph of the artist at work (not an artwork; never shown in the gallery or viewer).
  { id: 'studio-artist-at-work', status: 'approved', category: 'studio', order: 1, file: 'artworks/studio-artist-at-work.webp', width: 1390, height: 1125, alt: 'The artist sketching on a large sheet of paper at a desk beside a window' },

  // ---- Held back (not published): see docs/assets/ARTWORK_INVENTORY.md ----
  //  - couple portrait (IMG-20250123-WA0021): signature area carries a phone number and a third-party brand mark
  //  - moustache portrait, teal ground (IMG-20260824-WA0033): burned-in name and phone number
  //  - round devotional painting (IMG_20260423_191428184): photographed on a bedspread; needs a clean reshoot

  // ---- Template for adding a work ----
  // { id: 'my-work', status: 'approved', category: 'portrait', order: 9, file: 'artworks/my-work.webp', width: 1000, height: 1250,
  //   alt: 'One sentence describing what is visible', title: '', medium: '', size: '' },
];
