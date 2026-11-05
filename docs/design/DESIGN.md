# NILA VARNAM — DESIGN.md (design authority)

> Status legend used in every document: **[CONFIRMED]** = stated by the owner or evidenced by the supplied files. **[PROVISIONAL]** = recommended here, safe to build, owner may change. **[OWNER INPUT]** = cannot be decided without the owner; see `docs/content/CONTENT_INPUTS_REQUIRED.md`.

Related documents: [PROJECT_BLUEPRINT](../PROJECT_BLUEPRINT.md) · [MASTER_PROMPT](../prompts/MASTER_PROMPT.md) · [CONTENT_AND_SEO](../content/CONTENT_AND_SEO.md) · [ANIMATION_SPEC](ANIMATION_SPEC.md) · [REFERENCE_LIBRARY](REFERENCE_LIBRARY.md) · [ARTWORK_INVENTORY](../assets/ARTWORK_INVENTORY.md) · [CONTENT_INPUTS_REQUIRED](../content/CONTENT_INPUTS_REQUIRED.md)

**Creative direction (owner, v2 full redesign; supersedes earlier layout, nav and page-hierarchy decisions):** the site is an art exhibition that functions as a business. Composition, page sequence and component vocabulary are defined in [EXHIBITION_CONCEPT](EXHIBITION_CONCEPT.md); where it differs from §9 (hero split), §13 (gallery grid) or §14 (rows/steps on every page), the exhibition concept wins. Colours, type, red rules, accessibility and placeholder rules in this document stand, with two extensions from the concept: a **night** ground `#071B1D` for dark rooms (text ivory, the primary button ivory-filled, never red), and catalogue-style small tracked labels (13px uppercase, indices only). Navigation is now Gallery · Hospitality · Gifting · Private commissions · Process · Artist.

If any document disagrees with this one on a visual decision, this one wins.

---

## 1. Brand essence and positioning

**NILA VARNAM** is an independent, artist-led studio in Kerala that paints commissioned original work for buyers across India. The artist is self-taught with approximately 30 years of practice, learned by observation, experimentation and continuous work **[CONFIRMED]**. The operator handles sales, proposals and project management **[CONFIRMED]**.

The site exists to produce qualified proposal requests from hospitality buyers, interior designers/architects, corporate gifting buyers and private commissioners. It is not a shop and has no cart or checkout.

### The feeling, in concrete terms

| Quality | What the visitor should perceive | How the site produces it |
|---|---|---|
| Crafted | Hands made this, slowly | Real photographs of real paintings shown large and whole; paper/kraft material tones; no stock imagery |
| Calm | Nothing is competing or shouting | One idea per screen, generous space, one filled button per viewport, almost no motion |
| Contemporary | Current, not folk-art nostalgia | Editorial serif + clean sans, strict grid, flat grounds, no ornament |
| Rooted | A person and a place stand behind it | Deep teal and kraft from the material references, a restrained Kerala undertone in tone of voice and palette, never in motifs |
| Tactile | Paper, canvas, pigment | Warm ivory ground, kraft and stone panels, fine 1px lines, true-colour painting photography; texture comes from the paintings themselves |
| Credible | They can scope a serious commission | Plain proposal process, honest capacity, specific page structure, no inflated claims |

The visitor should leave believing: *this is a real artist with decades of practice, and this studio can quote, schedule and deliver a serious commission.*

---

## 2. Audience expectations

| Audience | What they check in the first 20 seconds | Design response |
|---|---|---|
| Boutique hotels, resorts, restaurants, hospitality groups | Is the work good enough for a lobby? Is the studio organised? | Whole-painting presentation; clear Hospitality page; "Request a proposal" path; honest note on capacity |
| Interior designers, architects | Can I specify, brief and schedule this? | Sizes/mediums/format language, process steps, brief-led form |
| Corporate gifting agencies and companies | Is it presentable, personal, deliverable at volume? | Gifting page that is candid about volumes (5–10 paintings a month) and what is discussed |
| Private clients | Will this capture a person I love? | Portrait and devotional work shown with care; warm but not sentimental copy |

---

## 3. Design principles and anti-principles

### Principles
1. **The painting is the hero.** Art is shown whole, undistorted, with true colour, never as a backdrop. Interface colour stays quiet so that paintings supply the colour.
2. **One idea per screen.** Each section is one or two screens tall with its heading first (Taste Skill house rule).
3. **Paper first.** Ivory is the default surface; teal marks brand moments; kraft and stone carry supporting structure.
4. **Say it plainly.** Headings name a thing. No slogans, no poetry (Taste Skill `copy.md`).
5. **Red is a signal.** One per viewport, at most (section 5).
6. **Earn every effect.** If motion or ornament does not help someone look at art or find the next step, delete it.
7. **Honest by construction.** Nothing on the page claims a client, award, price or guarantee the owner has not supplied.

### Anti-principles (do not do)
- Black-and-gold "luxury", purple/violet gradients, glassmorphism, neon, dashboards.
- Rounded-card grids, shadow stacks, gradient buttons, icon-in-a-circle feature rows.
- Kerala tourism imagery (backwaters, kasavu patterns, kathakali masks, ornamental borders) used as decoration.
- Faux-vintage "crafty" treatments: torn-paper edges everywhere, handwriting fonts, burnt edges.
- Placing every painting in the same mock frame or mock room.
- Generated imagery of any artwork, room or person.
- Heavy texture overlays on top of paintings.

---

## 4. Moodboard analysis → design translation

Full observations and file paths: [REFERENCE_LIBRARY](REFERENCE_LIBRARY.md). Summary of what is borrowed:

| Observation in the moodboards | Translation on the web |
|---|---|
| Teal is the strongest, most mature colour; used on a clipboard, card and swatch as a deep, slightly velvety field | `--teal` and `--teal-deep` are the only saturated interface colours; used for wordmark, deep bands, links, focus |
| Most of the sheet is warm ivory/parchment paper | Ivory is the page ground (≈70% of any screen) |
| Kraft envelopes, tags, tube, string | `--kraft` panels, a single kraft band per page, kraft hairline details |
| Stone and mocha used for quiet structure and strong text | `--stone` dividers/panels; `--mocha` secondary text and one dark band option |
| Organic wave-cut paper collage panels (second moodboard) | At most one organic crop or wave-edge per page (e.g., a section edge or an image mask), never a repeating pattern |
| Brush-stroke swatch samples | One brush-stroke SVG underline motif allowed in the artist page and footer; never in nav or buttons |
| Orderly flat-lay composition | Strict 12-column grid, aligned edges, large whitespace |
| The moodboard sheet includes a placeholder brand and crown mark | **Ignored.** NILA VARNAM does not use it. No crown, no placeholder name |

**Taste Skill adaptation.** The Taste Skill (v2.5.0, installed at `.agents/skills/design-taste-frontend/`) deals palettes, hero, nav, footer and rhythm by random draw. Here the palette is fixed by the owner's moodboards; layout parts were dealt, then judged against the brief. Full adopted/adapted/rejected table in section 20.

---

## 5. Colour system

### 5.1 Tokens **[CONFIRMED hierarchy · PROVISIONAL exact hex]**

Moodboard 1 prints labelled hex values (teal #0D6B6E, ivory #F4F3EB, kraft #C39A6B, stone #D9D6CC, mocha #5B4636). Sampled pixels of those same swatches in the image file measured slightly different values (teal ≈ #085E5F, ivory ≈ #F4EDDF, kraft ≈ #C19766, stone ≈ #D5D0C4, mocha ≈ #5D4937). The tokens below take the printed values where contrast demands them and the sampled warmth where it improves the paper feel.

```css
:root {
  /* Teal — brand anchor */
  --teal-950: #052F31;   /* deepest band, footer ground */
  --teal-900: #08494B;   /* deep brand band */
  --teal-700: #0D6B6E;   /* brand teal: wordmark, links, focus, outline buttons */
  --teal-100: #E3EEEC;   /* faint teal tint panel (rare) */

  /* Paper — dominant surfaces */
  --ivory:    #F4EFE3;   /* page ground */
  --paper:    #FBF9F2;   /* raised surface, form fields, lightbox panel */
  --stone:    #D5D0C4;   /* panels, 1px lines at 60% opacity, disabled */

  /* Kraft / earth — supporting warmth */
  --kraft:    #C39A6B;   /* decorative only; never text on ivory */
  --kraft-deep: #8A6234; /* text-safe kraft (5.18:1 on paper) for small labels */
  --mocha:    #5B4636;   /* secondary text, dark band alternative */
  --taupe:    #6B6054;   /* captions/meta text (5.51:1 on ivory) */
  --ink:      #2A2118;   /* body text, warm near-black; never #000 */

  /* Signal — rare */
  --red:      #B3261E;   /* conversion accent */
  --red-press:#9C2019;   /* hover/pressed */
}
```

### 5.2 Ratio of use per screen (target)
Paper neutrals (ivory, paper, stone) ≈ 70% · teal family ≈ 20% · kraft/mocha ≈ 9% · red ≤ 1%. (The moodboard's own recommended ratio is 60/25/10/5 with no red; red is the owner's additional signal and is deducted from the mocha accent share.)

### 5.3 Contrast (computed WCAG 2.x ratios) **[CONFIRMED by calculation]**
| Foreground | Background | Ratio | Use |
|---|---|---|---|
| `--ink` #2A2118 | `--ivory` | 14.2 | body text |
| `--mocha` #5B4636 | `--ivory` | 7.95 | secondary text |
| `--taupe` #6B6054 | `--ivory` | 5.51 | meta text (≥14px only) |
| `--teal-700` #0D6B6E | `--ivory` | 5.64 | links, labels |
| `--teal-700` | `--paper` | 6.01 | links on raised surfaces |
| `--ivory` | `--teal-700` | 5.64 | text on teal buttons |
| `--ivory` | `--teal-900` | 9.14 | text on deep band |
| `--ivory` | `--teal-950` | 12.95 | footer |
| `--kraft` #C39A6B | `--teal-950` | 5.60 | kraft accents on darkest teal only |
| `--paper` | `--red` | 6.25 | text on red button |
| `--red` | `--ivory` | 5.87 | red marker/text on ivory |
| `--red` | `--teal-*` | 1.04 | **forbidden pairing** |
| `--kraft` | `--ivory` | 2.31 | decorative fills only, never text |
| `--taupe` | `--stone` | 4.21 | **fails for small text**; use `--ink` on stone |

Rules: body and reading text ≥ 7:1 (ink or mocha on ivory/paper). Meta/labels ≥ 4.5:1. Large text (≥24px) ≥ 3:1. UI component boundaries (input borders, focus rings) ≥ 3:1 against adjacent colour.

### 5.4 Red — where it may and may not appear **[CONFIRMED intent · PROVISIONAL implementation]**

Red is a signal, not a second brand colour. The Taste Skill allows one accent colour whose only filled use is the main-action button; this document narrows that further.

**Permitted (exhaustive list).** "Filled red element" below means the primary button; the 2px nav bar, the chip dot and form error marks are small markers and are the only other red allowed.
1. The single filled primary button visible in a viewport (`.btn--primary`): "Request a proposal" and its segment variants (Section 9).
2. A 2px underline/bar marking the **current page** in the nav (`aria-current`).
3. The selected-state dot in the contact form's enquiry-type selector.
4. The required-field asterisk and error text/border in the form (error states use red text on ivory/paper ≥ 5.87:1).

**Prohibited**
- Any red on a teal, mocha or kraft ground (red on teal = 1.04:1).
- Nav bar background, hero background, section backgrounds, footers.
- Secondary buttons, text links, icons, bullets, dividers, badges, tags, headings.
- More than one filled red button in a viewport; the nav's "Request a proposal" button is therefore **outlined teal, never filled** (see 9.1).
- Large red areas of any kind. Red inside paintings (e.g., the robe in `artwork-01`) is the artist's colour and is unrestricted.
- Tinting of red into pink/orange variants.

**Test:** screenshot any page at 1440×900 and 390×844 at several scroll offsets; there must be ≤ 1 filled red button in frame and red must cover < 1% of pixels excluding photographed artwork.

On teal bands the primary action is **ivory-filled with ink text** (no red) so the "one signal" rule still holds there.

---

## 6. Typography **[PROVISIONAL]**

Chosen from the Taste Skill's service pairings (`library/type.json`): **Instrument Serif** (display, 400 only, regular + italic) with **Instrument Sans** (text, wght 400–600, wdth 75–100). Rationale: refined editorial serif for headings that suits art and an even, calm sans for reading; the Skill lists it as "refined, calm, classic". Fallbacks if the owner dislikes it: Fraunces + Figtree (warmer) or Newsreader + Hanken Grotesk (more bookish). Never Inter/Roboto/Open Sans/Montserrat/Poppins.

Load from Google Fonts with `display=swap`:
`https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Instrument+Sans:wdth,wght@75..100,400..600&display=swap`
(self-hosting via Fontsource is acceptable and preferred for Vercel performance; at most four font files.)

| Level | Desktop (≥1024) | Phone (390) | Face / weight | Line height | Tracking |
|---|---|---|---|---|---|
| h1 | 72px | 40px | Instrument Serif 400 | 1.02 | −1.6% |
| h2 | 48px | 30px | Instrument Serif 400 | 1.1 | −1% |
| h3 / pull quote | 28px | 24px | Instrument Serif 400 | 1.2 | 0 |
| Lead | 20px | 18px | Instrument Sans 400 | 1.5 | 0 |
| Body | 16px (18px on long copy pages) | 16px | Instrument Sans 400 | 1.65 | 0 |
| Small / meta | 14px | 14px | Instrument Sans 400 | 1.5 | 0 |
| Label / button | 13–16px | 13–16px | Instrument Sans 500 | 1.3 | 0 |

Rules: sentence case everywhere; no all-caps labels; no letter-spaced capitals; italic serif permitted for one word in a heading **once per page** and for quotes/attributions only; lines ≤ 62 characters; numbers never separated from units; nothing below 13px; text never baked into images; curly quotes. Malayalam script is **not** used on the site unless the owner supplies and approves wording (OWNER INPUT).

---

## 7. Layout, grid, spacing, breakpoints

- **Container (`.wrap`)**: `width: min(100% − 2×gutter, 1280px)`; gutter 80px ≥1280, 48px at 640–1023, 24px under 640. Lines at x 80 and 1360 at 1440 wide.
- **Grid**: 12 columns, 24px gap (12px under 640). Splits: text left, image right (never alternating, never mirrored); split line at column 6/7.
- **Spacing scale (px)**: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Section top padding 120 (96 on phone), bottom 72 (48). Heading to content 48 (32 phone).
- **Section heights**: every section is exactly one or two screens tall (`calc(var(--h) * 100svh)`), top-aligned, heading first (Taste Skill `layout-v4.md`). Never centre content vertically.
- **Breakpoints**: 390 (design phone) · 640 (tablet start) · 768 · 820 · 1024 · 1280 · 1440 (design desktop). Verified widths: 1440, 1024, 820, 768, 390.
- **Equal edges**: every block starts on the left line or a column start and ends on a column end/right line. Nothing bleeds off one side.
- **Max reading width** 62ch; max image height outside the hero 708px at 1440×900.

---

## 8. Surfaces, texture, material

- **Grounds** (three): `--ivory` (main), `--stone` or `--paper` (alt/surface), `--teal-900` (deep band; one per page, from mid-page on). Optional `--kraft` band: maximum one per page, and not on the same page as the deep teal band unless they are not adjacent.
- **Radius**: `sharp` token set — 2px controls and buttons, 4px frames. Artwork frames are **square-cornered** (paintings are rectangles). No pill buttons.
- **Shadows**: none. A linked card may gain a faint hover shadow (blur 24px, ≤10% ink) only on hover.
- **Borders**: 1px `--ink` at 12–15% or `--stone`. Lines only inside lists and between form rows, never between sections (sections are separated by ground change or space).
- **Texture**: the page has no overlay grain. Material comes from (a) photographs of paintings, (b) at most **one** quiet paper-grain image used as a section ground on the Artist page, JPG/WebP ≤ 120 KB, opacity so ink contrast stays ≥ 7:1 **[PROVISIONAL; requires owner-supplied or self-shot paper photograph, not generated]**. No animated grain, no CSS noise filters, no texture on top of artwork.
- **Organic shape**: one wave-edge or organic crop per page at most (e.g., a section's top edge, or an image mask on the Artist page), derived from the second moodboard's collage panels. Pure CSS/SVG, flat colour.
- **Brush-stroke motif**: one hand-drawn SVG stroke (teal or kraft) as a short underline under an h2, Artist page and footer only.

---

## 9. Navigation and CTA hierarchy

### 9.1 Navigation **[PROVISIONAL]** (Taste Skill `nav-mega` dealt; panel simplified)
- Fixed, opaque `--ivory` bar, 72px (56 phone), 1px hairline under it from first paint; identical at every scroll depth (no blur, shrink, hide or colour flip).
- Left: wordmark (section 10). Centre/right: five one-word items — **Hospitality · Gifting · Commissions · Gallery · Artist**. Far right: **outlined teal** button "Request a proposal" (teal 1px border, teal text, 48px high). Never filled in the nav, so the page's one red button stays unique.
- Desktop hover panels are optional; if built, "Gallery" may open a panel with two text links (Portraits, Devotional) and one artwork image; otherwise all five are plain links.
- Current page: `aria-current="page"` plus 2px red bar under the word (red permitted use #2).
- 640–1023: bar keeps the outlined button beside a 44×44 menu button. Under 640: the bar shows the wordmark and a 44×44 menu button; the full-screen menu sheet (56px rows, closes on any tap) ends with the outlined "Request a proposal" button. There is **no fixed bottom action bar** (it would put a second filled red button in the phone viewport next to the hero's).
- Skip link is the first focusable element.

### 9.2 CTA hierarchy
| Rank | Label | Style | Where |
|---|---|---|---|
| Primary (global) | **Request a proposal** | filled red (ivory text) on light ground; ivory-filled on teal ground | Home hero, home closing, contact |
| Primary (segment) | **Discuss a hospitality project** · **Request a gifting proposal** · **Commission an artwork** | same filled style | Hero + closing of the matching page only |
| Secondary | "See the gallery", "Read how a commission works" | outlined teal 1px, teal text | Next to primary, max 1 |
| Tertiary | text link with drawn underline | `.link` | Body copy |
| WhatsApp | **Message on WhatsApp** | outlined teal, shown only if `PUBLIC_WHATSAPP_NUMBER` is configured | Contact page and footer |

Rules: exactly one filled button per viewport; at most two buttons in a hero; the nav button is never filled; each segment's primary routes to `/contact/?type=hospitality|gifting|commission|general` with the form preselected. Buttons are verb + object, 1–5 words, never "Learn more/Discover/Explore".

---

## 10. Wordmark direction (no final logo exists) **[PROVISIONAL; logo is OWNER INPUT]**

Until a logo is supplied, set the name as a typographic wordmark: **NILA VARNAM** in Instrument Serif 400, 22px in the nav, sentence-case-agnostic small tracking of +4% (the only place capital letters are used besides acronyms), colour `--teal-700` on ivory, `--ivory` on teal. No icon, no crown, no invented symbol. Clear space = height of the letter N on all sides. Minimum 18px height equivalent. A one-line descriptor "Artist-led art studio, Kerala" in 14px Instrument Sans `--taupe` may sit beside it in the footer only. The moodboard's placeholder brand and crown mark are never used. **Meaning note:** the name is Malayalam-derived and plausibly "blue/teal colour"; the owner must confirm any meaning or translation before the site states one (OWNER INPUT).

---

## 11. Image art direction **[PROVISIONAL]**

- Paintings are shown **whole, uncropped, true-colour**, on `--ivory`, `--paper` or `--stone` ground with at least 24px margin; no mock frames, no drop shadows, no filters, no overlays.
- Canonical ratios per row (one ratio per row): 4:5 portrait (default painting frame), 3:2 landscape, 1:1 for details. Real aspect ratios of the supplied paintings: 5:6, 3:4, 5:4, 11:16. They are shown **contained** (`object-fit: contain`) inside the ratio frame with `--paper` letterbox, or the frame adopts the painting's own ratio. Never crop a face off-centre to fit.
- **Hero**: Taste Skill `split` hero: text span 5 left, one painting whole span 6 right (4:5 or its natural ratio), top-aligned with the h1. A full-bleed hero (`photo`) was dealt first and **rejected**: the supplied files are < 1920px wide and the paintings must remain whole.
- **Detail crops** are allowed only as *additional* images (e.g., eye and brushwork), derived from high-resolution originals, never replacing the whole view.
- **Minimum resolution** to display: image pixel width ≥ 2× displayed CSS width for the lightbox; ≥ 1.5× elsewhere. Current files do not meet the 2× rule for full-width use (see `ARTWORK_INVENTORY`); until reshoots, display them at ≤ 628px (span 6) and ≤ 540px in the lightbox.
- **Colour fidelity**: do not apply CSS filters; export derivatives in sRGB; no sharpening beyond resize.
- **Watermarks/overlays**: any burned-in text, contact line or stray marks must be absent from published derivatives. Currently `artwork-03` carries a burned-in name/phone overlay; it must be replaced or cropped before use (see inventory). Dark rectangular artefacts at the bottom of `artwork-01` and `artwork-04` must be cropped out.
- **Alt text and metadata** rules: CONTENT_AND_SEO §Image SEO.
- **No captions beneath images** (Taste Skill house rule 1). Artwork details (title, medium, size) sit in the gallery's plain *index list* and in the lightbox's text panel, which are catalogue data, not captions. See section 14.

---

## 12. Forms **[PROVISIONAL]**

- One form, on `/contact/`, six fields maximum: **Enquiry type** (4 radio chips: Hospitality project / Gifting / Commission / Something else), **Name**, **Email**, **Phone or WhatsApp (optional)**, **Organisation or city (optional)**, **Project brief** (textarea, 5 rows). A hidden honeypot field and a timing field.
- Fields 48px tall, 13px labels above, 16px text (also on phone), 1px `--ink` 40% border (≥ 3:1), focus ring 2px `--teal-700` offset 2px. Error text in `--red` with an icon-free message under the field and `aria-describedby`.
- Selected enquiry chip: `--teal-700` border + 6px `--red` dot (permitted use #3), not a red fill.
- Submit = the page's single filled red primary ("Request a proposal"). A line below states when the reply comes: wording **[OWNER INPUT: committed reply time]**; until confirmed, use "We reply to every enquiry personally." (no time promise).
- Success: replace the form with a plain confirmation panel on the same page (and `/thank-you/` noindex for analytics). Never a fake success; if the backend is not configured, the production build must fail (MASTER_PROMPT §Form).
- Consent line linking `/privacy/`; no marketing opt-in checkbox pre-ticked.

---

## 13. Gallery design **[PROVISIONAL]**

- `/gallery/`: heading, then category groups **Portraits** and **Devotional** (only categories evidenced by the files). Each group is a `.wall`-style grid, 2px gap, one ratio per row, paintings contained on `--paper` tiles.
- Each tile is an `<a>` opening the lightbox; hover: image scale 1.02 inside its frame, nothing else; focus: 2px teal ring.
- **Index list** below or beside the grid (desktop): a plain list "Title · Medium · Size" per work (**only fields the owner has confirmed**; unconfirmed fields are omitted, never "TBC").
- **Lightbox**: full-viewport `--ivory` panel (not dark), painting contained, close button top-right 44×44, previous/next 44×44, a text panel with title/medium/size and "Commission something like this" link (secondary style). Keyboard: Esc, ←, →, focus trap, focus returns to the tile. Details in ANIMATION_SPEC.
- Until the owner supplies more work, the gallery shows only publishable works (three until a clean file for `artwork-03` exists, then four), with a plain line "More work is added as it is photographed." No fake empty tiles.

---

## 14. Component visual rules (summary table)

| Component | Rules |
|---|---|
| Header | See 9.1 |
| Hero (split) | h1 72/40, one hard fact, ≤2 buttons, painting whole right; ends before the fold at 1440×900 and at 820/768/390 |
| Section | one or two screens, heading first, top-aligned |
| Service list (`rows`) | 1px rules close each row; label left, one-line description right; no cards, no icons |
| Process steps | 4 numbered rows (digits in serif 28px, `--teal-700`), no connectors, no circles |
| Artwork frame | square corners, `--paper` letterbox, no shadow |
| Pull quote | only an artist statement supplied by the owner; otherwise omitted (no invented testimonials) |
| FAQ | all answers open, serif h3 questions, no accordion |
| Deep band | one per page: `--teal-900`, ivory text 9.14:1, primary button ivory-filled |
| Footer | `--teal-950` ground, ivory text, wordmark large; columns Pages / Studio / Contact; legal row; no red |
| Cards | avoided; where unavoidable, open tiles with 1px rule, never box-in-box |
| Icons | none decorative; only functional (menu, close, arrows) as 1.5px stroke SVG in current text colour |

---

## 15. Responsive behaviour

- Verify at 1440, 1024, 820, 768, 390. One column under 640; splits stack text first then image; buttons full width under 640; full-screen menu under 640.
- Heroes end whole above the fold at every width (no half-cut painting).
- Gallery: up to 4 columns ≥1280, 3 at 1024, 2 at 640–1023 and under 640 (a short list simply fills fewer columns); lightbox panel stacks image over text under 768.
- Touch targets ≥ 44×44. No hover-only affordance. No horizontal scroll at any width.
- Images use `srcset`/`sizes`; the LCP image is the hero painting (priority, not lazy).

---

## 16. Accessibility (WCAG 2.2 AA target)

- Contrast per 5.3. Visible focus on every interactive element (2px teal ring, offset 2px).
- Semantic landmarks; one h1 per page; heading order never skips; skip link; `lang="en-IN"`.
- Lightbox: `role="dialog"`, `aria-modal`, labelled, focus trapped and restored, Esc closes.
- Forms: visible labels, programmatic errors, no placeholder-as-label, autocomplete attributes (`name`, `email`, `tel`, `organization`).
- Reduced motion: all transitions collapse to colour/opacity-only instant changes (ANIMATION_SPEC).
- Alt text on every painting; decorative images `alt=""`.
- Target size ≥ 24×24 CSS px minimum (WCAG 2.2) and ≥ 44 as design standard.
- No content conveyed by colour alone (selected chip also has a thicker border and a dot).

---

## 17. Correct versus incorrect decisions (examples)

| Situation | Incorrect | Correct |
|---|---|---|
| Hero image | A 1080px portrait stretched full-bleed behind text with a dark gradient | Painting shown whole in a 4:5 frame on the right, text on ivory |
| Buttons | Red "Request a proposal" in the nav **and** red in the hero | Nav outlined teal; hero filled red; one red per viewport |
| Teal band | Red button on the teal band | Ivory-filled button with ink text on the teal band |
| Gallery tile | Title and medium captioned under each image on the grid | Title/medium in the index list and lightbox panel; grid holds images only |
| Hospitality page | "Trusted by leading hotels" | "Original commissioned paintings for hotels, resorts and restaurants" + a note that the portfolio so far is portrait and devotional work shown on the gallery page |
| Kerala feeling | Kathakali mask icon in the header | Teal-and-kraft palette, restrained typography, honest copy about being based in Kerala |
| Texture | Paper-grain PNG laid over painting photos | Paper-toned ground; paintings untouched |
| Radius | 24px rounded cards with shadows | Square frames, 1px rules |

---

## 18. Photography needs (summary; see inventory for detail)
Hospitality buyers need to imagine the work in a room. Priority reshoots/additions: (1) every existing painting re-photographed square-on, even light, ≥ 3000px on the long side, no glare, no screenshot compression; (2) the artist at work (hands, palette, easel) — real, supplied by the owner; (3) paintings in situ on a real wall (the owner's home or a client space with permission) to show scale; (4) paper/canvas close-ups for texture. Landscapes, interiors and decorative pieces appear only if the artist actually paints them (OWNER INPUT).

---

## 19. Reference links
Moodboards and the status of external references (not reachable from the build environment) are in [REFERENCE_LIBRARY](REFERENCE_LIBRARY.md). Motion language: [ANIMATION_SPEC](ANIMATION_SPEC.md). Copy: [CONTENT_AND_SEO](../content/CONTENT_AND_SEO.md).

---

## 20. Taste Skill: adopted, adapted, rejected

Skill: `design-taste-frontend` v2.5.0, installed with `npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"` into `.agents/skills/design-taste-frontend/`. Prerequisites: Node v22.23.4 present; Chromium (`/opt/pw-browsers/chromium-1243`, Chrome for Testing 153) present. The skill's browser checkers (`consistency.mjs`, `check.mjs`, `shoot.mjs`, `perf.mjs`) were **not run** in this phase because no page exists yet; they are mandatory in the build phase.

| Skill guidance | Decision | Reason |
|---|---|---|
| Classify the business first | **Adopted**: kind = **service** (people commission work; nothing happens at a door; no shop, no address) | Matches "people are hired" row |
| Copy rules: plain, noun headings, verb buttons, no metaphors, no invented proof | **Adopted** | Fits a credibility-led commission site and the no-fabrication rule |
| One section per screen, heading first, equal edges | **Adopted** | Calm, orderly flat-lay mood |
| No caption under images | **Adapted**: no captions under hero/feature/grid images; catalogue data (title, medium, size) lives in an index list and lightbox panel | An art gallery needs catalogue data; the rule's intent (no captions that describe or apologise) is kept |
| Random palette deal | **Rejected** (dealt `putty-black-teal`, `card-pastels`, `teal-on-paper`) | Owner's moodboards fix the palette; `teal-on-paper` was nearest but its ink-teal text differs |
| Pairing deal | **Adopted** from the dealt list: Instrument Serif / Instrument Sans | Editorial, calm |
| Hero deal | First deal `photo` **rejected** (needs ≥ 1920px, calm area for text; artwork is smaller and must be whole). Re-dealt: **`split`** **adopted** | Documented per skill's "deal again when the recipe does not fit" |
| Nav / footer / close / rhythm / buttons deal | Dealt: `nav-mega` (adapted: simple links, optional small panel), `footer-columns`, `close-type`, rhythm `space`, buttons `solid`. **Adopted**; `solid` restyled to the red/teal rules above | Fit the brief |
| Square radius for place; sharp for service | **Adopted**: sharp token set | Paintings are rectangles; owner dislikes excessive rounding |
| Interface 90–95% neutral, one accent | **Adapted**: neutrals ≈ 70% + teal ≈ 20% by owner direction; red is the only filled accent colour | Owner's teal anchor is stronger than the skill's default |
| No scroll reveals, no entrance motion on non-tech pages | **Adapted**: see ANIMATION_SPEC (single image fade on load, opacity-only; no scroll-driven reveals on grids/cards/text) | Owner asked for a quiet reveal language; kept minimal and opacity-only |
| Effects, shaders, moments, scenes, loops, counts | **Rejected** | Art studio, not a tech page |
| Hover layer (card 2px lift, photo 1.02–1.03, button step/press, underline draw) | **Adopted** | Quiet and tactile |
| Photographs lead; 12–20 photos on a place | **Adapted**: only 4 real paintings exist; page lengths must not pad with stock; owner to supply more | Truth rule overrides |
| Stock/draft photo library | **Rejected** | Genuine artwork only |
| Contacts on `.example`, no real-format phone | **Adapted**: the real owner contacts are supplied via environment variables; never hard-coded; nothing renders if absent | Real business; skill's rule targets invented briefs |
| Word budgets (≈34 words/screen on service) | **Adapted**: headline/lead copy stays short; long-form pages (hospitality, commissions) may run longer in two-screen sections | Proposal buyers need process detail |
| Real full-colour logos/icons only | **Adopted**: no logos or decorative icons used |  |
| Checker scripts as gate | **Adopted for build phase**: every FAIL must be fixed or justified |  |
