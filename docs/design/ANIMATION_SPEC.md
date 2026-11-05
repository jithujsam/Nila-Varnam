# NILA VARNAM — ANIMATION_SPEC.md

Related: [DESIGN](DESIGN.md) · [MASTER_PROMPT](../prompts/MASTER_PROMPT.md) · [PROJECT_BLUEPRINT](../PROJECT_BLUEPRINT.md) · [CONTENT_AND_SEO](../content/CONTENT_AND_SEO.md) · [REFERENCE_LIBRARY](REFERENCE_LIBRARY.md) · [ARTWORK_INVENTORY](../assets/ARTWORK_INVENTORY.md) · [CONTENT_INPUTS_REQUIRED](../content/CONTENT_INPUTS_REQUIRED.md)

Status tags: **[CONFIRMED]**, **[PROVISIONAL]**, **[OWNER INPUT]** as in DESIGN.md. Everything here is **[PROVISIONAL]** unless marked; the owner's brief (quiet, tactile, gallery-like motion; no heavy scroll theatre) is **[CONFIRMED]**.

## 0. v2 (owner direction: "Framer-like"): supersedes the restrictions below where they conflict
The owner asked for richer, Framer-style motion. The site now uses **Motion** (`motion`, the vanilla sibling of Framer Motion, about 29 KB gzipped for the whole site script) from `src/scripts/motion.ts`. The principles that remain: content is readable without JS, nothing loops, only opacity/transform/clip-path move, everything is off under `prefers-reduced-motion`, and a 3.5 s failsafe removes the hidden states if the script never starts.

| Effect | Behaviour |
|---|---|
| Headline reveal | `h1`, `h2` and wall statements are split into words (client-side) that rise out of a mask, staggered 55 ms; entrance headlines on load, others when 40% in view |
| Entrance | Supporting text fades up in sequence; the spotlight fades in over 1.8 s; the hero painting settles from 1.26 to 1.1 scale (the image is visible from first paint, so LCP is not delayed) |
| Below-the-fold content | Fade and rise once, staggered by sibling (max 5), 0.95 s, spring-like ease `(.16, 1, .3, 1)` |
| Painting reveal | A mask lifts bottom to top (`clip-path`, 1.15 s) while the image settles from 1.24 to 1.1 scale; observed on the figure because an element clipped to nothing never intersects |
| Parallax | Each painting's image drifts +/-4% as it crosses the viewport (scroll-linked, linear) |
| Process rule | The top rule of the stage list fills as you scroll through it |
| Cursor label | Fine pointers only: a "View" label follows the cursor over paintings that open the viewer; the native cursor is hidden there. Decorative and `aria-hidden`; keyboard users are unaffected |
| Magnetic buttons | Buttons shift up to a few pixels toward the pointer (fine pointers only) |
| Page transitions | Cross-document view-transition crossfade (supported browsers) |
| Viewer and menu | Viewer image eases in; the mobile menu rows stagger in |
Measured on the local build: layout shift 0 on Home, Gallery, Artist and Process; Lighthouse mobile Performance 91 on Home (LCP 3.5 s), 95-99 elsewhere; Accessibility and Best Practices 100. Reduced-motion and no-JS tests pass (no running animations, nothing hidden).

## 1. Motion language (v1, partly superseded by section 0)

The site moves the way a visitor behaves in an unhurried gallery or turns a page of an art book: things are *already there*, they settle, and they respond when touched. Motion exists to (a) help someone look at a painting, (b) show where they are, (c) mark one next action. Nothing moves to impress.

### Principles
1. **Content is present on the first frame.** Text and the hero painting are in the DOM, visible and readable at first paint. Nothing is hidden behind an animation (also protects LCP and SEO).
2. **Opacity and 1–2px/1.02-scale only.** No sliding panels, no flying text, no rotation.
3. **Visitor-triggered beats automatic.** Hover, focus, tap and click cause motion; the page does not move by itself.
4. **One motion at a time.** Never two things animating in the same viewport window.
5. **Short and soft.** Everything finishes in ≤ 600 ms except the one hero settle (900 ms).
6. **Every animation has a static equivalent.** `prefers-reduced-motion`, no-JS and phones degrade to a finished state.

### Anti-principles (do not build)
Long pinned or scroll-scrubbed scenes; parallax; cursor-following or magnetic elements; custom cursors; animated grain; shader/WebGL/3D; perpetual or looping motion; marquees; carousels or auto-advancing sliders; scroll-snap; scroll-jacking or smooth-scroll libraries (Lenis, Locomotive); text scrambling/letter-by-letter reveals; counters; page-transition wipes; loaders or intro gates; blur/glow effects; bounce or overshoot easing; tilt/flip cards.

**Taste Skill alignment [PROVISIONAL, adapted]:** the skill forbids any entrance or scroll reveal on non-tech pages. This spec keeps the skill's hover layer and its "nothing on scroll" rule for cards, rows, grids, text and forms, and permits exactly two owner-requested softenings: the hero settle (§5) and an opacity-only fade for large below-the-fold painting images (§7). Both sit behind one switch (`src/config/motion.ts: REVEAL_ENABLED`) so they can be turned off in one line.

## 2. Timing scale (ms)

| Token | Value | Use |
|---|---|---|
| `--m-press` | 90 | Button press |
| `--m-in` | 140 | Hover in (links, buttons, tiles) |
| `--m-out` | 200 | Hover out; focus ring settle |
| `--m-panel` | 200 | Menu / small panel fade |
| `--m-slide` | 240 | Gallery lightbox prev/next image swap |
| `--m-fade` | 400 | Lightbox open/close |
| `--m-image` | 600 | Painting zoom 1.02 on hover; below-fold image fade |
| `--m-settle` | 900 | Hero painting settle, once |

## 3. Easing

| Token | Curve | Use |
|---|---|---|
| `--m-ease` | `cubic-bezier(.2, .8, .2, 1)` | All UI steps |
| `--m-ease-io` | `cubic-bezier(.65, 0, .35, 1)` | Lightbox image swap only |
| linear | — | None (no loops exist) |

No bounce, spring or overshoot anywhere.

## 4. Page load choreography

1. First paint: header, h1, lead, buttons, hero painting all visible (no `opacity:0` start). HTML is complete without JS.
2. After the hero painting has decoded (`img.decode()` resolves, or `load`), a one-time **settle** runs (§5).
3. Fonts: `font-display: swap` with a metrically-adjusted fallback so the h1 does not shift (CLS ≈ 0). No typographic animation.
4. No loader, curtain, intro animation or entrance stagger.

## 5. Hero image reveal ("settle") 

- Element: the hero painting frame's `<img>` only.
- Behaviour: starts at `transform: scale(1.015)`, ends at `scale(1)`, over `--m-settle` (900 ms), `--m-ease`. Opacity stays 1 throughout (the painting is never hidden).
- Runs once per page load, only on the Home page and the three segment pages (Hospitality, Gifting, Commissions), only if the viewport ≥ 640 and motion is allowed.
- Reduced motion, phones < 640, no JS: no transition; the image is simply at `scale(1)`.
- Must not affect LCP: the image is `fetchpriority="high"`, not lazy, with explicit `width`/`height`.

## 6. Typography entrance

None. Headings, leads and buttons are static. The only type-related motion is the link underline draw (§10).

## 7. Section reveals on scroll

Scroll-triggered motion is limited to **large painting images below the fold** (the `data-reveal` attribute), nothing else.

- Effect: opacity 0 → 1 over `--m-image` (600 ms), `--m-ease`. No translate.
- Trigger: a single `IntersectionObserver` (`threshold: 0.2`, `rootMargin: 0px 0px -10% 0px`), unobserve after first reveal; never reverses.
- Applies to: standalone large images in a section (e.g., the Artist page working-image, the Commissions page example), **not** to the gallery grid, cards, list rows, headings, text, forms, FAQ or footer.
- Safety: `data-reveal` images are only hidden after JS adds `html.reveal-ready`; without JS, with `prefers-reduced-motion`, or if the observer is unavailable, they are visible. A 2-second fallback timer reveals anything not yet shown. Images that start inside the first viewport are never hidden.
- Never animate the hero or any image that is the LCP candidate.
- Max one revealing image per screen.

## 8. Gallery hover and focus

- Grid tile hover (fine pointer only): the image scales to 1.02 inside its overflow-hidden frame over `--m-image`; the frame, grid and neighbours never move; no overlay, dimming, caption slide or icon.
- Focus-visible: 2px `--teal-700` ring, offset 2px (settles from 6px to 2px in `--m-out`); the image also takes the 1.02 scale.
- Touch: no hover state; tap opens the lightbox.
- Gallery index list rows: hover underlines the title (draw, §10).

## 9. Lightbox

| Phase | Behaviour | Time |
|---|---|---|
| Open | Panel (`--ivory`, full viewport) fades from opacity 0 to 1; the painting is at its final position (no flying/zoom-from-thumbnail) | 400 ms |
| Swap prev/next | Current painting fades out (opacity to 0, 120 ms), the next fades in (opacity 0→1, 240 ms, `--m-ease-io`); text panel updates without animation; preload the neighbour image | ≈ 360 ms total |
| Close | Panel opacity 1→0 | 200 ms |
| Focus | Focus moves to the close button on open, is trapped inside, returns to the originating tile on close | — |
| Keys | Esc closes; ← / → navigate; Home/End first/last | — |
| Scroll | `body` scroll locked while open (without layout shift: compensate scrollbar width) | — |
| Reduced motion | Instant show/hide; swap is immediate | 0 |

The lightbox must work without any animation library (native `<dialog>` or an accessible custom implementation).

## 10. Navigation, links, buttons

| Element | Behaviour | Time |
|---|---|---|
| Nav links | Rest bare; on hover/focus a 1px ink line draws left-to-right 4px under the word and erases to the right on leave | 140 / 200 ms |
| Current page | Static 2px bar (`--red`) under the word; no animation | — |
| Dropdown/mega panel (if built) | Opens after 150 ms of intent, fades in with a 6px drop, closes in 120 ms | 200 / 120 ms |
| Mobile menu | Full-screen sheet fades in; rows static | 200 ms |
| Text links | Rest on a faint 1px hairline; ink line draws left-to-right on hover | 140 / 200 ms |
| Primary button (red) | Hover: fill steps to `--red-press`, box lifts 1px; press: sinks 1px, scale .985 | 140 in / 200 out / 90 press |
| Secondary (outlined teal) | Hover: faint teal-100 fill and stronger border; same lift/press | same |
| Arrow glyph (if used) | Moves 3px right and returns | 140/200 ms |
| Focus ring | 2px teal, offset 6→2px | 200 ms |
| Form fields | Border to teal and 3px soft ring (teal 20%) | 140 ms |
| Enquiry chips | Border/dot change instant to ≤140 ms; no sliding indicator | 140 ms |

Never: shine sweeps, glows, ripples, rotation, chip gliding, scale > 1.03.

## 11. Mobile constraints
- No hover states; no hero settle; no below-fold reveals under 640px (simple visible images).
- Menu sheet and lightbox keep their ≤ 400 ms fades; the lightbox supports swipe-free next/prev buttons only (no swipe gesture library).
- No pointer-based effects of any kind.

## 12. Performance constraints
- Animate only `opacity` and `transform`. Never animate `height`, `max-height`, `padding`, `top/left`, `filter`, `box-shadow` (except the optional card-hover shadow, hover-only).
- Total motion JavaScript ≤ 2 KB gzipped for reveals/lightbox focus helpers plus the lightbox component; no animation library (no GSAP, Framer Motion, Lenis).
- `will-change` is not used permanently; the 1.02 zoom and settle use `transform` with the browser promoting on demand.
- LCP < 2.5 s on throttled mobile, CLS < 0.05, INP < 200 ms (targets, measured in the build phase).
- Check with `perf.mjs` (Taste Skill) and Lighthouse; no layout shift from any animation.

## 13. Reduced motion, no-JS, forced colours
- `@media (prefers-reduced-motion: reduce)`: settle off; reveals off (images visible); lightbox/menu show instantly; link underline appears without travelling; hover colour/border changes remain (non-motion); no transform transitions.
- No JS: every image visible; gallery tiles link to the image file path or a `#work-n` anchor so works are still viewable; menu is a visible link list or `<details>`.
- Forced colours: focus rings and borders use `currentColor`/system colours.

## 14. Where animation must not be used
Hero text; headings; forms (except focus state); the enquiry success panel; error messages; footer; legal pages; the first viewport of any page; anything representing money or terms; any artwork other than the 1.02 hover zoom and the permitted fades; scroll position indicators; cookie or consent surfaces (no banner is planned).

## 15. Test checklist (build phase)
- [ ] Record 1440, 820, 390 loads: text and hero visible at frame 0.
- [ ] `prefers-reduced-motion: reduce` emulated: zero transforms transitioning.
- [ ] Disable JS: all images visible, gallery usable.
- [ ] Lightbox keyboard test: Esc, arrows, focus trap, focus restore.
- [ ] No more than one `data-reveal` image per screen; none in the first viewport.
- [ ] `getAnimations()` on every page at rest returns `[]` (nothing perpetual).
