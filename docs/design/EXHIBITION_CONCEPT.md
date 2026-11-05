# NILA VARNAM — EXHIBITION_CONCEPT.md

**Central creative direction (owner instruction, supersedes any conflicting layout in other documents):** the website is an art exhibition that functions as a business. There is no physical exhibition and the site never pretends there is one. The *website itself* delivers the exhibition experience.

Two layers, neither compromised: (1) a curated, immersive, editorial presentation of the artist's work; (2) a professional commissioned-art business for hospitality artwork and corporate gifting, with private commissions secondary.

Related: [DESIGN](DESIGN.md) · [ANIMATION_SPEC](ANIMATION_SPEC.md) · [PROJECT_BLUEPRINT](../PROJECT_BLUEPRINT.md) · [CONTENT_AND_SEO](../content/CONTENT_AND_SEO.md) · [MASTER_PROMPT](../prompts/MASTER_PROMPT.md) · [ARTWORK_GUIDE](../ARTWORK_GUIDE.md)

## 1. What changes
| Before | After |
|---|---|
| Template of repeating sections: hero + rows + steps + FAQ + band, identical on every page | A walk-through: an entrance, rooms, a quiet interlude, a threshold to commissioning |
| Artworks in uniform grids (3 or 4 equal columns) | Each artwork is a *plate*: its own scale, position and breathing room, hung on a 12-column wall |
| Home sells first, shows later | Home shows first; commissioning is introduced after the work has been seen |
| Hospitality/Gifting/Commissions as the same page three times | Same identity, three different compositions and a different relationship between text and painting |
| Biography section, FAQ and process on Home | Biography reduced to one line and a link; FAQ and process live on the service pages |

## 2. Principles (implemented)
1. Every artwork is an individual piece: one image, no card, no title/description/button under it. Details open on demand in the viewer.
2. Generous negative space; deliberate sequence: large, small, wide, quiet, large.
3. Vary scale, placement and composition: plates come in four scales (xl, l, m, s) and hang left, right or offset; landscape works hang wide.
4. Large-format imagery and editorial type: h1 up to 88px, large serif statements, serif lines instead of cards.
5. Intentional transitions between rooms: a change of ground (ivory → deep teal room) and a wall statement, never a divider graphic.
6. The artwork dominates: no frames, shadows or panels around paintings; interface is hairlines and text.
7. Restrained motion: plates fade in once (opacity only), the hero painting settles, hover zoom 1.02. Nothing else (ANIMATION_SPEC).
8. Commercial integration without catalogue: no prices, no "add to cart", no product cards. Services are introduced as ways to *commission an original painting*, in text-led lines, on their own pages, after the work has been shown.

## 3. Information architecture
Navigation is unchanged (Hospitality · Gifting · Commissions · Gallery · Artist + outlined "Request a proposal"). The enquiry stays one click away at all times without a sales pitch in every section.

### Home — the exhibition (sequence)
| # | Part | Composition | Commercial layer |
|---|---|---|---|
| 1 | **Entrance** | One painting, extra-large, whole, off-centre right; h1 and one-sentence lead set bottom-left; plenty of ivory | Two small buttons: Request a proposal (the single red), Enter the gallery |
| 2 | **Portraits** (first room) | Large solo plate hung left; room title and one short line hung right, low; then a wide work with a small work offset beneath/beside it | none |
| 3 | **Wall text** | One large serif statement across the page: the studio's plain facts (painted by hand; one self-taught artist; about 30 years of practice) + a text link "The artist" | quiet |
| 4 | **Commissioning room** (deep teal) | Large serif lines, text-led, no cards: *Hospitality — original paintings for hotels, resorts and restaurants*; *Gifting — hand-painted gifts for companies*; *Private commissions — portraits and paintings*; each line is a link | the introduction to the business; ivory-filled "Request a proposal" |
| 5 | **Devotional paintings** (second room) | A different rhythm: one tall work right, one wide work left, with a short room line | none |
| 6 | **Close** | One sentence and one button, then the footer | Request a proposal |
Removed from Home: process steps, FAQ, biography block, "who we paint for" rows (replaced by room 4).

### Gallery (`/gallery/`) — the full walk-through
Rooms (Portraits, Devotional) built from the same plates; every work in sequence with alternating hang positions and scales; a viewer (lightbox) opens any work large, with prev/next across the whole exhibition and a quiet "Commission something like this" link. A catalogue list at the foot appears only when the owner has supplied titles/mediums/sizes. No "exhibition labels" are invented.

### Service pages — same identity, three compositions
| Page | Entrance composition | Why |
|---|---|---|
| Hospitality | Wide landscape work spanning the wall under a large h1 (scale of a lobby wall) | Buyers imagine the work at architectural scale |
| Gifting | Two small works hung together at different sizes beside the h1 (scale of a gift) | Intimacy, personal gifts |
| Commissions | One tall portrait hung left, text right, lower | Portrait presence |
After the entrance each service page keeps its required content (what we can paint, the honest "what the portfolio shows today" note, process, schedule, FAQ) but set as editorial text blocks, not repeated card/row templates: large serif lines, generous space and a single interlude plate.

### Artist (`/artist/`)
Work first: the entrance is a painting; the biography is short, set as a wall statement; it is never larger than the artwork.

## 4. What is explicitly avoided
Generic landing-page layouts; repeated service cards; uniform three-column portfolio grids; Kerala/Indian decorative motifs; fake exhibition labels, titles, dates, catalogue numbers, "on view" language, invented installations or client projects; a biography more prominent than artwork; any artwork as a card with title, description and button.

## 5. Truth rules that still apply
Placeholder artwork is labelled and is staging-only (see DEPLOYMENT). The exhibition language is a *design metaphor*: the site never says an exhibition is being held, never gives dates or venues, and never uses room numbers or labels that imply a real show. Room headings are plain category names (Portraits, Devotional paintings).

## 6. Component vocabulary (code)
`Plate` (one artwork, sizes xl/l/m/s, grid placement, opens the viewer) · `Lightbox` (viewer for the whole exhibition) · `Threshold` (page entrance: variants right, wide, pair, left) · `Hang` (12-column wall that holds plates) · `Wall` (large serif statement) · `Lines` (large serif commissioning lines) · `Close`. Artwork content still comes only from `src/data/artworks.ts` and `src/data/placements.ts`.
