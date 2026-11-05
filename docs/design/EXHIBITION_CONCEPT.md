# NILA VARNAM — EXHIBITION_CONCEPT.md (v2, full redesign)

**Direction (owner):** the website is a carefully curated art exhibition that functions as a professional commissioned-art business. There is no physical exhibition and the site never claims one. The website itself delivers the experience. This version replaces the first exhibition pass, which kept a template skeleton under a new layer of CSS.

Related: [DESIGN](DESIGN.md) · [ANIMATION_SPEC](ANIMATION_SPEC.md) · [REFERENCE_LIBRARY](REFERENCE_LIBRARY.md) · [PROJECT_BLUEPRINT](../PROJECT_BLUEPRINT.md) · [CONTENT_AND_SEO](../content/CONTENT_AND_SEO.md) · [MASTER_PROMPT](../prompts/MASTER_PROMPT.md) · [ARTWORK_GUIDE](../ARTWORK_GUIDE.md)

## 1. Business positioning (what the site must make obvious)
An independent, artist-led commissioned-art studio in Kerala, serving India. Three markets: **Hospitality** (hotels, resorts, restaurants, villas, interior-design projects), **Corporate gifting** (companies, premium clients, gifting agencies), **Private commissions** (portraits, devotional, personal). Hospitality and gifting are primary; private is secondary. Not ecommerce, not a marketplace, not a personal portfolio. The artist is self-taught with about 30 years of practice (watercolour, oil, acrylic, portraits, sketches, devotional). The owner handles clients, requirements, proposals and coordination.

## 2. Inputs studied and what each contributed
| Input | Status | Used for |
|---|---|---|
| Owner screenshot of a gallery template (monochrome "Galleria") | viewed | Scale contrast in type; full-bleed photographic rooms alternating light/dark; small tabular metadata; "selected works" strip. **Not copied**: its monochrome palette, all-caps display type, fan-of-photos hero, fake exhibition/artist content |
| Owner-supplied Stitch export (`stitch_nila_varnam_website_repositioning.zip`) and `DESIGN_1.md` | read | `DESIGN_1.md` restates the existing Nila Varnam tokens (kept). The export's *layout language* (catalogue indexing such as "No. 01", small tracked labels, numbered chapters, a facts row, a hung-work spread) informed the catalogue voice. **Rejected, deliberately**: all of its invented content (named clients and estates, installation dates and venues, dimensions, ISO/pigment claims, "no acrylics", "established" year, collection cities, intake rules, engagement durations). None of it is supported by the owner and none appears on the site |
| Five artist websites (saravananc.com, sujathagirish.com, sudhaarts.com, kaustavmukherjeefineart.com, vibhutimehta.com) | **not reachable** from the build environment (DNS blocked, 2026-11-05) | Nothing. No observations are claimed. If access is granted they should be reviewed for: how series are organised, how commissions are explained, how credibility is built without invented facts |
| Existing project documentation, four real paintings, installed Taste Skill | read | Truth rules, palette, accessibility, artwork data system, production guards |

## 3. The identity: a gallery floor, indexed like a catalogue
1. **Rooms.** The site is a sequence of *rooms*: light rooms (plaster ivory) and dark rooms (deep teal-black, "night") where paintings are lit. Changes of ground are the transitions.
2. **Hung work, not thumbnails.** Each painting is a single hung piece with its own scale and wall space. Work is never wrapped in a card with title, description and button.
3. **Catalogue indexing.** Small tracked labels and index numbers ("No. 03 / 08", "01 — Hospitality") give the editorial, catalogued feel. They are indices only: no invented titles, dates, dimensions, provenance, venues or "on view" language.
4. **Type contrast.** Very large serif display (Instrument Serif, regular and italic) against small, quiet sans metadata. Headlines in plain language; italic marks one phrase per headline.
5. **Light as the only effect.** Dark rooms carry one soft spotlight behind the painting (a single radial light, not a gradient decoration). Nothing else glows, blurs or floats.
6. **Cinematic but finite motion** (owner: Framer-like; see ANIMATION_SPEC section 0). Headlines rise out of masks, paintings are unveiled and drift gently on scroll, a cursor label invites a closer look. Nothing loops and nothing is pinned; all of it stops under reduced motion.

Palette: kept and extended: ivory wall `#F4EFE3`, paper `#FBF9F2`, stone `#D5D0C4`, teal `#0D6B6E` (brand, links, focus), **night `#071B1D`** (dark rooms), teal-900 `#08494B`, kraft `#C39A6B` (hairlines and quiet marks only), ink `#2A2118`, red `#B3261E` (the one conversion signal per viewport; never on dark or teal grounds, where the CTA is ivory-filled). Typography: Instrument Serif + Instrument Sans (unchanged, per owner design file).

## 4. Information architecture
Navigation: **Gallery · Hospitality · Gifting · Private commissions · Process · Artist** + outlined "Request a proposal". The three markets are always visible and labelled in the owner's terms.

| Page | Purpose | Composition |
|---|---|---|
| **Home** | Enter the exhibition; understand the business in three moves | 1 Entrance (dark room, one large lit painting, h1 "Original paintings, made to commission"). 2 *Three commissions* as three differently composed bands (not cards), each with its own hung work. 3 *Selected works*: a salon hang on a stone wall. 4 *Practice* (dark room): factual statement and a facts row. 5 *How a commission unfolds*: five numbered stages. 6 *Start a brief*: type-led close |
| **Gallery** | The exhibition itself | Each work is a full "wall": large, centred, generous space, index at the edge; rooms change ground; one viewer walks every work |
| **Hospitality** | Speak to owners, GMs and designers | Dark entrance with a wide work; spaces list; honest portfolio note; what to send (brief checklist); what happens after you submit; questions |
| **Gifting** | Speak to corporate and agency buyers | Entrance with two works at gift scale; occasions; formats; quantity honesty; what to send; what happens next; questions |
| **Private commissions** | Portraits, devotional, personal | Entrance with one tall work; what is painted; mediums; what to send; questions |
| **Process** | One authoritative explanation of commissioning | Sticky stage index beside long-form stages; what to send per market; what happens after submitting; what is agreed in the proposal |
| **Artist** | The practice, subordinate to the work | A hung work first; statement; mediums; how the studio works (artist paints; operator manages) |
| **Contact** | Start a brief | Form beside "what to include" (changes with enquiry type) and "what happens next" |

## 5. Avoided
Repeated service cards; predictable landing-page sections; standard grids as the default; ornamental motifs of any kind (no Kerala patterns, no regional iconography, no geographic references as identity); fabricated clients, testimonials, installations, credentials, capabilities, provenance, prices, timelines or achievements; a biography more prominent than the work; placeholders presented as real projects.

## 6. Placeholders
Temporary, procedurally generated abstract paintings (`npm run placeholders`), clearly tagged "Placeholder" on the page, named `placeholder-*.jpg`, never described as the studio's work, absent from production by four independent guards (see DEPLOYMENT). Real artwork replaces them through `src/data/artworks.ts` and `placements.ts` only.

## 7. Component vocabulary (code)
`Header` (wordmark, 6 links, CTA, full-screen sheet) · `Plate` (one hung work) · `Lightbox` (viewer) · `Entrance` (home) · `Band` (a commissioning market band) · `Salon` (selected works hang) · `Wall` (gallery wall) · `Facts` · `Stages` (numbered process) · `Checklist` ("what to send") · `Next` ("what happens next") · `Faq` · `Close`.
