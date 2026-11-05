# NILA VARNAM — ARTWORK_GUIDE.md

How to replace the temporary placeholders with real paintings **without touching any component**.

Related: [DEPLOYMENT](DEPLOYMENT.md) · [ARTWORK_INVENTORY](assets/ARTWORK_INVENTORY.md) · [DESIGN](design/DESIGN.md) · [CONTENT_INPUTS_REQUIRED](content/CONTENT_INPUTS_REQUIRED.md)

## The two files you edit
| File | Controls |
|---|---|
| `src/data/artworks.ts` | every image's file, size, category, order, title, description, medium, dimensions, alt text and status; the category list (labels, order, intro) |
| `src/data/placements.ts` | which artwork appears in each hero and on the Home page (by artwork `id`) |

Pages, the gallery grid, the lightbox, the index list and the structured data all read from these files.

## Placeholders (current)
Eight procedurally generated abstract images live in `src/assets/placeholders/` (`placeholder-01.jpg` … `08`), made by `npm run placeholders`. They are not artwork and never depict a studio project; each shows a "Placeholder" tag. Placement keys in `placements.ts`: `homeEntrance`, `homeBands` (hospitality, gifting, private), `homeSalon`, `homePractice`, `hospitalityEntrance`, `hospitalityNote`, `giftingEntrance` (pair), `giftingNote`, `commissionsEntrance`, `commissionsNote`, `artistEntrance`, `social`.

## Statuses
| status | Where it shows |
|---|---|
| `placeholder` | local/preview only, with a visible "Placeholder" tag; **can never ship to production** |
| `approved` | everywhere, including production |
| `draft` | nowhere |

Set `enabled: false` to hide any entry temporarily. Display order within a category follows `order` (lowest first). Fields left out (title, description, medium, size) simply do not appear.

## Replace a placeholder with a real painting
1. Create a web derivative (never edits the original; cap at native width; crops a bottom artefact if given):
   ```bash
   npm run images -- assets/artwork/original/<file>.jpg portrait-white-beard 20
   ```
   It writes `src/assets/artworks/portrait-white-beard.webp` and prints the width/height.
2. In `src/data/artworks.ts`, add an entry (a commented template is at the bottom of the file):
   ```ts
   { id: 'portrait-white-beard', status: 'approved', category: 'portrait', order: 1,
     file: 'artworks/portrait-white-beard.webp', width: 1080, height: 1430,
     alt: 'Portrait painting of an elderly man with a full white beard against a teal-blue background',
     title: '', medium: '', size: '' }  // only fill medium/size when the owner has confirmed them
   ```
3. In `src/data/placements.ts`, point the placement keys at your ids (e.g. `homeHero: 'portrait-white-beard'`).
4. Delete the placeholder entries you no longer need. Run `npm run build`.

## Rules (from ARTWORK_INVENTORY and the owner brief)
- Never publish an image that contains a name, phone number or other personal contact data. `artwork-03` currently has such an overlay and must **not** be approved until a clean file exists.
- Never overwrite files in `assets/artwork/original/`.
- Do not name sitters. Confirm likeness permission first (CONTENT_INPUTS_REQUIRED #9).
- Do not state a medium or size unless the owner confirmed it.
- Prefer files ≥ 2× the displayed width; the pipeline never upscales.
- Placements for hero slots should be portrait or 4:5-ish works; any ratio works, the frame adopts the painting's own ratio.

## Adding categories
Add an entry to `categories` in `artworks.ts` (and the id to the `CategoryId` type). The gallery shows each category with at least one visible work, in `order`.
