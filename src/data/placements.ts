/**
 * WHERE each artwork appears. Values are artwork ids from artworks.ts (a string, or a list in display order).
 * Swap ids here to change what hangs where without touching any component.
 * Keep this file free of imports so scripts/preflight.mjs can read it.
 */
export const placements = {
  homeEntrance: 'portrait-white-beard-teal-ground',
  homeBands: ['marine-ship-at-harbour', 'botanical-magnolia-pods', 'portrait-watercolour-man-blue-shirt'], // hospitality (wide), gifting (small), private
  homeSalon: ['botanical-banana-plant', 'devotional-ganesha-miniature', 'devotional-christ-framed', 'botanical-white-lotus', 'botanical-pink-red-bloom'],
  homePractice: 'sketch-pencil-portrait',
  hospitalityEntrance: 'marine-ship-at-harbour',
  hospitalityNote: 'botanical-banana-plant',
  giftingEntrance: ['botanical-magnolia-pods', 'botanical-pink-red-bloom'], // pair at gift scale
  giftingNote: 'portrait-watercolour-man-blue-shirt',
  commissionsEntrance: 'portrait-nun-framed',
  commissionsNote: 'sketch-pencil-portrait',
  artistEntrance: 'studio-artist-at-work',
  social: 'portrait-white-beard-teal-ground', // image used for link previews
} as const;
