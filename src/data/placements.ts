/**
 * WHERE each artwork appears. Values are artwork ids from artworks.ts (a string, or a list in display order).
 * Swap ids here to change what hangs where without touching any component.
 * Keep this file free of imports so scripts/preflight.mjs can read it.
 */
export const placements = {
  homeEntrance: 'ph-01',
  homeBands: ['ph-08', 'ph-02', 'ph-04'], // hospitality (wide), gifting, private commissions (tall)
  homeSalon: ['ph-05', 'ph-03', 'ph-07', 'ph-06', 'ph-02'], // selected works, hung at varied scale
  homePractice: 'ph-07',
  hospitalityEntrance: 'ph-08',
  hospitalityNote: 'ph-05',
  giftingEntrance: ['ph-06', 'ph-02'], // pair at gift scale
  giftingNote: 'ph-01',
  commissionsEntrance: 'ph-04',
  commissionsNote: 'ph-02',
  artistEntrance: 'ph-07',
  social: 'ph-01', // image used for link previews
} as const;
