# NILA VARNAM — MASTER_PROMPT.md

**How to use:** open a fresh Claude Code session at the repository root and paste everything from `=== BEGIN PROMPT ===` to `=== END PROMPT ===`. The prompt is self-contained apart from the repository's specification files, which it tells the session to read first.

Related: [PROJECT_BLUEPRINT](../PROJECT_BLUEPRINT.md) · [DESIGN](../design/DESIGN.md) · [CONTENT_AND_SEO](../content/CONTENT_AND_SEO.md) · [ANIMATION_SPEC](../design/ANIMATION_SPEC.md) · [REFERENCE_LIBRARY](../design/REFERENCE_LIBRARY.md) · [ARTWORK_INVENTORY](../assets/ARTWORK_INVENTORY.md) · [CONTENT_INPUTS_REQUIRED](../content/CONTENT_INPUTS_REQUIRED.md)

Prompt-engineering basis (fetched 2026-11-05, see REFERENCE_LIBRARY §3): explicit instructions with reasons, XML-tagged sections, reference material before the task, action-oriented wording, scope control, state tracking via a progress file and git, verification against acceptance criteria, parallel independent tool calls, bounded delegation.

=== BEGIN PROMPT ===

<role>
You are a senior front-end engineer and art-direction-minded web designer building the complete NILA VARNAM website: a commissioned-art lead-generation site for an independent, artist-led studio in Kerala, India. You implement; you do not just propose. The site must be ready to deploy on Vercel.
</role>

<context>
NILA VARNAM is a small studio. The artist is self-taught with approximately 30 years of practice and paints watercolour, oil, acrylic, portraits, sketches and religious artwork; other subjects are discussed with the artist. The studio completes roughly 5–10 paintings a month. A business operator handles sales, proposals and project management. Audiences: boutique hotels, resorts, restaurants, hospitality groups, interior designers, architects, corporate gifting agencies and companies; secondary, private clients. Primary conversion: **Request a proposal**. This is NOT ecommerce: no cart, checkout, prices or accounts.

The earlier phase produced seven specification documents and committed the real artwork. They are the source of truth. Where this prompt and a document disagree on a visual decision, DESIGN.md wins; on copy, CONTENT_AND_SEO.md wins; on motion, ANIMATION_SPEC.md wins.
</context>

<read_first>
Read all of these completely before writing any code, in this order (they are independent, so read them in parallel):
1. docs/PROJECT_BLUEPRINT.md
2. docs/design/DESIGN.md
3. docs/content/CONTENT_AND_SEO.md
4. docs/design/ANIMATION_SPEC.md
5. docs/design/REFERENCE_LIBRARY.md
6. docs/assets/ARTWORK_INVENTORY.md
7. docs/content/CONTENT_INPUTS_REQUIRED.md
8. The Taste Skill: `.agents/skills/design-taste-frontend/SKILL.md`, then `references/copy.md`, `system.md`, `motion.md`, `layout-v4.md`. If the folder is missing, install it with `npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"` (needs Node 22+).
9. The moodboard `assets/reference/moodboard-colour-combo-sheet.webp` and the four paintings in `assets/artwork/original/` (look at them; do not trust filenames alone).
Then write a 10-line plan in `docs/BUILD_PROGRESS.md` (create it) and keep that file updated as a checklist of routes/components/checks with their pass/fail state. Commit at each completed phase so state survives context resets.
</read_first>

<ground_rules>
- Inspect the repository first (`git status`, branches, existing manifests). Preserve anything that already works. At the time of writing the repo contains only documentation, so you choose the stack.
- **Stack (default, justified in DESIGN/BLUEPRINT):** Astro 5 + TypeScript, static output, `@astrojs/vercel` adapter, `@astrojs/sitemap`, plain CSS with custom properties, Fontsource for self-hosted Instrument Serif and Instrument Sans, `sharp` for image derivatives, vanilla TS for the lightbox and form. If you deviate (for example Next.js App Router), write the reason in docs/BUILD_PROGRESS.md first.
- Keep scope to what is specified. No unrelated refactors, no extra pages, no animation libraries, no CMS, no analytics, no third-party scripts, no ecommerce.
- Never edit or delete files in `assets/artwork/original/` or `assets/reference/`. Generate derivatives elsewhere.
- Do not remove or weaken checks, linters or tests to make them pass; fix the cause.
- Use facts only from the specification files. Never invent an artist name, qualification, award, exhibition, client, testimonial, installation, price, minimum quantity, shipping or delivery promise, address, phone, email or social account. When a fact is missing, follow the "fallback" in CONTENT_INPUTS_REQUIRED.md and record the gap in the final report.
- Ask the user before any irreversible or externally visible action: `git push`, creating a pull request, deploying to Vercel (preview or production), changing Vercel project settings or domains, creating/adding secrets, deleting shared data, sending real email. Local commits are fine.
- Make independent tool calls in parallel (reading files, running independent checks). Do work directly; use subagents only for genuinely parallel, self-contained tasks such as image processing or screenshot review, and tell them exactly what to return.
- Write short progress updates between steps (what you are about to do and what you found). Final reports are concise.
</ground_rules>

<goals>
1. A complete, responsive, accessible marketing site with every route below, real artwork, approved copy and a working enquiry flow.
2. Calm, tactile, editorial look faithful to DESIGN.md (teal anchor, ivory ground, kraft/stone/mocha supports, rare red).
3. Good SEO, performance and accessibility, ready to deploy on Vercel without further code changes.
Non-goals: ecommerce, blog, CMS, multilingual, popups, chat widgets, cookie banners, tracking, 3D/WebGL, generated imagery, mock-room composites.
</goals>

<routes>
Implement every route; none may be a stub.

| Route | Page | Notes |
|---|---|---|
| `/` | Home | hero (split), who we paint for (3 rows), paintings (3 works), how it works (4 steps), artist teaser, closing teal band |
| `/hospitality/` | Hospitality | hero, what we can paint, "what the portfolio shows today" honesty block, process, sizes/mediums/schedule, FAQ, close |
| `/gifting/` | Gifting | hero, gift types, volume and schedule, process, FAQ, close |
| `/commissions/` | Commissions | hero, what the artist paints, watercolour/oil/acrylic, process, what to send, FAQ, close |
| `/gallery/` | Gallery | Portraits and Devotional groups, accessible lightbox, index list, closing link |
| `/artist/` | Artist | how the artist learned (self-taught, ~30 years), what is painted, how the studio works, close |
| `/contact/` | Contact | the enquiry form; accepts `?type=hospitality|gifting|commission|general` to preselect; canonical stays `/contact/` |
| `/thank-you/` | Confirmation | `noindex`, excluded from sitemap |
| `/privacy/` | Privacy policy | plain-language draft built from what the site actually does; flagged for owner review in the report (not on the page) |
| `/terms/` | optional | only if the owner supplied terms; otherwise omit and omit the footer link |
| `/404` | Not found | noindex |

Copy for each page is in CONTENT_AND_SEO.md §6–§11. Use it verbatim unless a "[OWNER INPUT]" or "[PROVISIONAL]" marker says otherwise; resolve those with the specified fallback.
</routes>

<design_rules_summary>
These restate DESIGN.md so nothing is missed; DESIGN.md is authoritative.
- Tokens: `--teal-950 #052F31`, `--teal-900 #08494B`, `--teal-700 #0D6B6E`, `--teal-100 #E3EEEC`, `--ivory #F4EFE3` (page ground), `--paper #FBF9F2`, `--stone #D5D0C4`, `--kraft #C39A6B` (decorative only), `--kraft-deep #8A6234`, `--mocha #5B4636`, `--taupe #6B6054`, `--ink #2A2118`, `--red #B3261E`, `--red-press #9C2019`.
- Red appears only as: the single filled primary button in a viewport (never a fixed bottom bar); the 2px current-page bar in the nav; the selected-chip dot and error/required marks in the form. Never on teal/mocha/kraft grounds, never on secondary buttons, links, icons or large areas, never more than one filled red element in a viewport. The nav's "Request a proposal" button is outlined teal, never filled. On teal bands the primary button is ivory-filled with ink text.
- Type: Instrument Serif 400 for headings (h1 72/40, h2 48/30, h3 28/24), Instrument Sans 400/500 for text (body 16/1.65, lead 20/18, small 14, labels 13). Sentence case; no all-caps labels; lines ≤ 62ch.
- Layout: `.wrap` min(100% − 2×gutter, 1280px), gutter 80/48/24; 12-column grid with 24px gap; sections one or two screens tall, heading first and top-aligned; equal left/right edges; split heroes text-left, painting-right.
- Shapes: sharp (2px controls, square artwork frames), no shadows, 1px rules only inside lists/forms, no cards where open tiles or rows work.
- Paintings are shown whole, uncropped, true-colour, on ivory/paper; no filters, mock frames or overlays; no captions under images (catalogue data goes in the gallery index list and the lightbox text panel).
- No decorative icons, no Kerala motifs, no gradients, no glass, no texture over artwork; at most one wave-edge or organic crop per page; one brush-stroke underline on the Artist page and footer.
</design_rules_summary>

<components>
Create these shared components (Astro components + one small CSS file per component or a shared token sheet):
`BaseLayout` (head, metadata, skip link, header, footer), `Header` (wordmark, 5 links, outlined CTA, mobile sheet, current page), `Footer` (teal-950, columns, legal row), `Button` (variants: primary red, primary-on-teal ivory, secondary outlined, link), `Hero` (split), `Section` (one/two-screen box, `--h`), `Rows` (list with 1px rules), `Steps` (numbered rows), `ArtworkFrame` (contained image, ratio), `Gallery`, `Lightbox`, `Faq` (all answers open), `EnquiryForm`, `Prose`, `JsonLd`, `Seo`.
Mobile: bar with wordmark and menu button; full-screen menu sheet ending in the outlined "Request a proposal" button; no fixed bottom action bar; 44px targets.
</components>

<content_model>
Keep content in typed data files, not hard-coded in templates:
- `src/data/site.ts`: name, tagline, location wording, `contact` object built from env (`PUBLIC_CONTACT_EMAIL?`, `PUBLIC_WHATSAPP_NUMBER?`, `PUBLIC_PHONE?`) so absent values render nothing; `artistName?` (absent → "the artist").
- `src/data/artworks.ts`: `{ id, file, width, height, category: 'portrait'|'devotional', title?, medium?, size?, alt, status: 'ready'|'needs-clean-file'|'hold' }` seeded from ARTWORK_INVENTORY. Only `ready` works render in production; `artwork-03` has `needs-clean-file` and must not be published until replaced (you may use it in local previews only if the overlay is not visible; simplest: hold it back and design every page to work with three works).
- `src/data/pages/*.ts`: per-page copy, meta title/description, H1/H2, FAQs from CONTENT_AND_SEO.md.
- Omit any field that is unknown. Never render "TBC", "Untitled" or lorem ipsum.
</content_model>

<asset_rules>
- Paths: originals at `assets/artwork/original/artwork-01-christ-framed.jpg`, `artwork-02-portrait-white-beard-canvas.jpg`, `artwork-03-portrait-moustache-teal-ground.jpg`, `artwork-04-watercolour-elder-hand-to-mouth.jpg` (see ARTWORK_INVENTORY for dimensions and defects). Copy/process them with a script (`scripts/make-images.mjs`) into `src/assets/artwork/` (or `public/artwork/`), never overwrite originals.
- Fix before use: crop the dark bottom-edge artefacts from artworks 01 and 04; do not use 03 (burned-in name and phone overlay) until the owner supplies a clean file; do not upscale (cap each derivative at its native width; display ≤ 628px wide, ≤ 540px in the lightbox until better files exist); strip EXIF; sRGB; WebP/AVIF with width variants.
- The hero uses `artwork-02` (strongest teal match). Use `artwork-01` and `-04` in the gallery/commissions only. Do not name or identify sitters.
- If a needed image does not exist, leave the element out. Never use stock or generated images and never invent file paths.
- Alt text per CONTENT_AND_SEO.md §18; medium words only if confirmed.
</asset_rules>

<seo>
Implement per CONTENT_AND_SEO.md §5, §6, §15–§18: unique titles/descriptions, canonical (absolute, from `PUBLIC_SITE_URL`), Open Graph/Twitter (image from a real painting), `lang="en-IN"`, JSON-LD (Organization without address, WebSite, Service on segment pages without prices, BreadcrumbList, ContactPage, ImageGallery, FAQPage only where FAQs are visible; Person only if the artist name exists), sitemap, robots, noindex on thank-you/404 and on every non-production Vercel deployment (`X-Robots-Tag: noindex` when `VERCEL_ENV !== 'production'`), trailing-slash consistency, semantic headings (one h1). No fabricated ratings, reviews or offers. No keyword volume claims.
</seo>

<animation>
Implement ANIMATION_SPEC.md exactly: nothing hidden on first paint; hero painting "settle" (scale 1.015→1 over 900 ms, once, ≥640px, motion allowed); the hover layer (links, buttons, tiles, 1.02 image zoom); the lightbox fade rules; one opacity-only reveal for large below-the-fold painting images behind `REVEAL_ENABLED` (default true) in `src/config/motion.ts`; `prefers-reduced-motion`, no-JS and mobile fallbacks; animate only opacity/transform; no animation library, parallax, pinning, smooth-scroll, loops or cursor effects.
</animation>

<form_and_lead_flow>
- One form on `/contact/` (enquiry type, name, email, phone/WhatsApp optional, organisation/city optional, brief; honeypot + minimum-time field). Microcopy from CONTENT_AND_SEO.md §9.
- Progressive enhancement: the form is a real `<form method="post" action="/api/enquiry">` that works without JS; with JS it submits by `fetch`, shows inline errors (`aria-describedby`) and a success panel, and never fakes success.
- `src/pages/api/enquiry.ts` (`export const prerender = false`): validate server-side (types, lengths, email format, honeypot, timing), reject obvious spam, best-effort per-IP rate limit, send an email with Resend's API via `fetch` using `RESEND_API_KEY`, to `ENQUIRY_TO_EMAIL`, from `ENQUIRY_FROM_EMAIL`, subject including the enquiry type; set `Reply-To` to the sender; return JSON; escape all user input in the email HTML; log only non-personal metadata. Redirect non-JS submissions to `/thank-you/`.
- **Real backend only.** If the three variables are missing: in development, return a clear error and show a visible "enquiries are not configured" notice; in a **production** Vercel build (`VERCEL_ENV === 'production'`) fail the build with an actionable message listing the missing variables. Preview builds may run with a disabled form and a visible developer notice that is not indexed. Never present a success state without a delivered email.
- No file uploads in v1 (the operator asks for the photograph by reply).
</form_and_lead_flow>

<vercel_deployment>
The site must be ready for Vercel; do the preparation, but do not deploy or touch the Vercel project without user approval.
1. Configuration: `@astrojs/vercel` adapter in `astro.config.mjs` with `output: 'static'` and per-route server rendering for `/api/enquiry`; `site: process.env.PUBLIC_SITE_URL`; `trailingSlash: 'always'`. Commit `package.json` with `"engines": {"node": ">=22"}`, `.nvmrc` (22), a lockfile, and scripts `dev`, `build`, `preview`, `check` (astro check), `lint`, `test` if tests exist. Vercel settings should need no overrides (framework preset Astro, `npm run build`).
2. `vercel.json` (only what is needed): security headers (`X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY`, `Permissions-Policy` disabling camera/microphone/geolocation, and a Content-Security-Policy that allows self-hosted fonts, same-origin scripts and `connect-src 'self'`; adjust if Google Fonts is used), long-lived immutable caching for hashed assets and `/artwork/*`, and `cleanUrls: false` with trailing slashes consistent. Add a redirect from `/gallery` to `/gallery/` style where Vercel does not already handle it, and redirect `/index.html` to `/`.
3. `.env.example` (committed) listing every variable with comments; `.env*` ignored in `.gitignore`; no secrets in git. Variables:
   - `PUBLIC_SITE_URL` (required in production, e.g. `https://example.com`)
   - `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, `ENQUIRY_FROM_EMAIL` (required in production)
   - `PUBLIC_CONTACT_EMAIL`, `PUBLIC_WHATSAPP_NUMBER`, `PUBLIC_PHONE` (optional; absent → not rendered)
   - `PUBLIC_ARTIST_NAME` (optional; absent → "the artist")
   Document where to set them: Vercel → Project → Settings → Environment Variables (Production and Preview) and, locally, `vercel env pull`.
4. Previews: `X-Robots-Tag: noindex` on non-production deployments; production `robots.txt` references the sitemap.
5. Assets: images are optimised at build time (no runtime image service needed); total HTML+critical CSS+JS per page small; fonts self-hosted with `font-display: swap`.
6. A `docs/DEPLOYMENT.md` with: prerequisites, importing the GitHub repository in Vercel, framework preset, environment variables table, how to verify the form on a preview, how to attach the domain, how to roll back, and the "owner inputs still needed before production" list pulled from CONTENT_INPUTS_REQUIRED.md.
7. Verify locally with `npm run build` and `npm run preview`; if the Vercel CLI is installed you may run `vercel build` locally (no login required for a local build if linked settings are not needed); do **not** run `vercel deploy` or link the project without asking. State plainly in the report whether `vercel build` was actually run.
</vercel_deployment>

<accessibility_and_performance>
WCAG 2.2 AA: contrast per DESIGN §5.3, visible focus, skip link, landmarks, one h1, labelled form controls with programmatic errors, focus-trapped/restored lightbox with Esc and arrow keys, reduced-motion, alt text, 44px touch targets, `lang="en-IN"`. Performance targets (measure, then report actuals): Lighthouse mobile Performance ≥ 90 and Accessibility/SEO/Best Practices ≥ 95 on Home and one segment page; LCP < 2.5 s, CLS < 0.05; hero image eager with `fetchpriority="high"`; all other images lazy with explicit dimensions; JS only for menu, lightbox, form and the optional reveal (target ≤ 15 KB gzipped total).
</accessibility_and_performance>

<frontend_aesthetics>
Avoid generic AI-site patterns: no Inter/Roboto/Arial, no purple or violet, no gradients or glass, no black-and-gold, no rounded-card grids, no shadow stacks, no icon-in-circle rows, no stock imagery, no motion for its own sake. Compose with the grid, space, type and the paintings themselves. Follow the Taste Skill's copy rules (plain nouns, verb buttons, no metaphors) and its layout rules (one section per screen, equal edges), as adapted in DESIGN §20. Do not use its tech-only effects, scenes, moments, shader grounds or loops.
</frontend_aesthetics>

<build_sequence>
1. Inspect repo; read the specs; write docs/BUILD_PROGRESS.md.
2. Scaffold (Astro, TS, adapter, sitemap, fonts, scripts, `.nvmrc`, `.env.example`, `.gitignore`).
3. Tokens, base CSS, layout shell, header/footer, button set.
4. Image pipeline and `artworks.ts`; Hero and ArtworkFrame.
5. Pages in order: Home, Hospitality, Gifting, Commissions, Artist, Gallery (+ lightbox), Contact (+ form and endpoint), Privacy, Thank-you, 404.
6. SEO: metadata, JSON-LD, sitemap, robots, headers.
7. Motion per ANIMATION_SPEC.
8. Checks (below); fix; re-check. Update docs/BUILD_PROGRESS.md and commit after each numbered step.
9. Write docs/DEPLOYMENT.md and the final report. Stop and ask before push/deploy.
</build_sequence>

<verification>
Run, and fix every failure (a finding you judge false goes in the report with the reason):
```bash
npm run check          # astro/tsc type check
npm run lint           # if configured; configure ESLint + Prettier if absent
npm run build          # must succeed with a complete production env, and fail clearly without one in a production build
npm run preview        # serve the build for the checks below
```
- Taste Skill checkers against the built output (they need Node 22+ and Chromium; Chromium is at `/opt/pw-browsers/chromium` in the cloud environment): from `.agents/skills/design-taste-frontend`, run `scripts/consistency.mjs`, `assets/layout/check.mjs`, `scripts/shoot.mjs` and `scripts/perf.mjs` per SKILL.md §4 step 6 with `--root dist` (static export), widths 1440, 1024, 820, 768, 390. Apply those checks that fit a **service** site; findings that come from deliberate, documented adaptations in DESIGN §20 (index-list catalogue data, hero settle, opacity-only reveal, outlined nav CTA, segment CTA wording) are reported as "known deviations", not silently ignored.
- Screenshots at 1440×900, 1024×768, 820×1180, 768×1024 and 390×844 for every route; read each and compare with DESIGN.md. (Playwright + Chromium is preinstalled: `require('playwright')`; do not reinstall it.)
- Red audit: at each width and several scroll offsets confirm ≤ 1 filled red button in view, red only in the permitted markers (nav current-page bar, chip dot, form error marks), and no red on teal/mocha/kraft grounds.
- Keyboard walk-through: tab order, skip link, menu, lightbox (Esc, arrows, focus restore), form errors. Axe (or equivalent) with zero serious/critical violations.
- Reduced motion emulation and no-JS: all content visible; no running animations at rest.
- Form: valid and invalid submissions locally against a configured test environment if the user provides credentials; otherwise state that delivery was NOT verified.
- Lighthouse mobile on Home and Hospitality; record actual scores.
- Links: no dead internal links; sitemap lists every indexable route; JSON-LD parses (validate with a schema validator if available offline, else a JSON parse and manual review).
Never claim a check passed unless you ran it and saw it pass.
</verification>

<acceptance_criteria>
1. Every route in <routes> exists with real, approved copy and no placeholders, lorem ipsum, "TBC" or empty hrefs.
2. Only genuine artwork from `assets/artwork/original/` is used; originals untouched; `artwork-03` not published; artefacts cropped; no stock/generated imagery; no sitter named.
3. No invented facts (grep the build output for: award, exhibition, client names, testimonial, "trusted by", price symbols ₹/Rs, "free shipping", "guarantee", "worldwide").
4. DESIGN.md compliance: tokens exact; red rules pass the audit; type scale and grid as specified; no radius > 4px; no shadows except optional hover; no gradients.
5. Responsive at 1440/1024/820/768/390 with no horizontal scroll, no cut-off hero, 44px targets.
6. Accessibility: WCAG 2.2 AA checks pass; keyboard-complete lightbox and form.
7. Motion complies with ANIMATION_SPEC (nothing hidden at first paint; reduced-motion and no-JS safe).
8. SEO: unique titles/descriptions, canonicals, OG, valid JSON-LD, sitemap/robots, preview noindex.
9. Enquiry flow works end-to-end in a configured environment and production build fails clearly when unconfigured; no secrets in git.
10. Vercel readiness: `npm run build` passes; `vercel.json`, `.env.example`, `.nvmrc`, lockfile, `docs/DEPLOYMENT.md` exist; the report states whether a Vercel preview or `vercel build` was actually run.
11. Performance targets measured and reported.
12. Working tree contains no unrelated changes; commits are descriptive; nothing pushed or deployed without approval.
</acceptance_criteria>

<final_report>
End with a concise report: routes built; stack and why; files created (grouped); checks run with real results (and any not run, with why); known deviations from the Taste Skill and DESIGN with reasons; owner inputs still missing, ordered by priority; environment variables to set in Vercel; exact next commands for the user to deploy (`git push`, import into Vercel, set env vars, deploy) which you have NOT run unless the user approved them.
</final_report>

=== END PROMPT ===

## Notes for the person running the prompt
- The prompt deliberately forbids pushing and deploying without approval; give approval in chat when ready.
- If you want the build to use a custom domain or different email provider, say so in the first message after pasting.
- A fresh session needs only this repository; no earlier chat is required. The moodboard 2 file is missing from the repository (see REFERENCE_LIBRARY §1); the build does not depend on it.
