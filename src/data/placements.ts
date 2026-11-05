/**
 * WHERE each artwork appears. Values are artwork ids from artworks.ts.
 * Swap an id here to change a hero or a home-page work without touching any component.
 * Keep this file free of imports so scripts/preflight.mjs can read it.
 */
export const placements = {
  homeHero: 'ph-01',
  homeWorks: ['ph-02', 'ph-03', 'ph-04'],
  hospitalityHero: 'ph-03',
  giftingHero: 'ph-04',
  commissionsHero: 'ph-02',
  artistImage: 'ph-06',
  social: 'ph-01', // image used for link previews
} as const;
