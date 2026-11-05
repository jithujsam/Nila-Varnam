# NILA VARNAM — PROJECT_BLUEPRINT.md

Navigation and decision document for the whole project.

## Specification set
| Doc | Path | Role |
|---|---|---|
| Design authority | [docs/design/DESIGN.md](design/DESIGN.md) | colours, type, layout, components, red rules, Taste Skill decisions |
| Master build prompt | [docs/prompts/MASTER_PROMPT.md](prompts/MASTER_PROMPT.md) | operational prompt for the later build session (Vercel-ready) |
| Content and SEO | [docs/content/CONTENT_AND_SEO.md](content/CONTENT_AND_SEO.md) | sitemap, copy, metadata, schema, FAQs |
| Animation | [docs/design/ANIMATION_SPEC.md](design/ANIMATION_SPEC.md) | motion language and limits |
| References | [docs/design/REFERENCE_LIBRARY.md](design/REFERENCE_LIBRARY.md) | moodboards, Taste Skill, prompt guide, external reference status |
| Artwork | [docs/assets/ARTWORK_INVENTORY.md](assets/ARTWORK_INVENTORY.md) | the four real paintings and their issues |
| Exhibition concept (central direction) | [docs/design/EXHIBITION_CONCEPT.md](design/EXHIBITION_CONCEPT.md) | the site as an exhibition that functions as a business: sequence, plates, rooms, what is avoided |
| Owner inputs | [docs/content/CONTENT_INPUTS_REQUIRED.md](content/CONTENT_INPUTS_REQUIRED.md) | facts and assets still needed |

Original briefs: `01_CLAUDE_CODE_PROMPT_GENERATOR.md` (root, the fuller version), `planning/01_CLAUDE_CODE_PROMPT_GENERATOR.md` (shorter variant), `00_README_FIRST.md`, `02_REFERENCE_COLOUR_AND_ART_DIRECTION.md`. Where they differ, the root `01_…` file and the user's chat instructions were followed; I did not diff every line of the two variants, but their deliverables and rules are consistent (note: the root file spells the inputs file path `docs/CONTENT/…`; the shorter variant and this project use `docs/content/CONTENT_INPUTS_REQUIRED.md`).

Status tags: **[CONFIRMED]** · **[PROVISIONAL]** · **[OWNER INPUT]**.

## 1. Business objective **[CONFIRMED]**
Generate qualified project-proposal enquiries for an independent, artist-led art studio in Kerala (artist self-taught, ~30 years of practice; operator handles sales and project management; ~5–10 paintings/month). Primary markets: boutique hotels, resorts, restaurants, hospitality groups, interior designers, architects, corporate gifting agencies and companies. Secondary: private commissions.

## 2. Website goals and non-goals
**Goals:** make the work and the studio credible to a professional buyer in under a minute; route each visitor type to a tailored page; capture enquiries reliably; rank for the intent themes in CONTENT_AND_SEO without exaggeration; be fast, accessible and easy for a non-developer to update.
**Non-goals:** ecommerce, cart, checkout, pricing tables, user accounts, blog at launch, CMS at launch (static data files; CMS is a later option), multilingual at launch, chat widgets, popups, cookie banners (no non-essential cookies planned), 3D/WebGL, generated art, fake social proof.

## 3. Decisions register
| Decision | Value | Status |
|---|---|---|
| Site kind (Taste Skill) | service | CONFIRMED (by analysis) |
| Palette | teal anchor, ivory ground, kraft/stone/mocha, rare red | CONFIRMED hierarchy / PROVISIONAL hex |
| Type | Instrument Serif + Instrument Sans | PROVISIONAL |
| Hero | split, painting whole | PROVISIONAL |
| Nav | Hospitality · Gifting · Commissions · Gallery · Artist + outlined "Request a proposal" | PROVISIONAL |
| Primary CTA | "Request a proposal" (filled red, one per viewport) | CONFIRMED conversion / PROVISIONAL style |
| Routes | `/`, `/hospitality/`, `/gifting/`, `/commissions/`, `/gallery/`, `/artist/`, `/contact/`, `/privacy/`, `/thank-you/`, 404 (+ `/terms/` optional) | PROVISIONAL |
| Stack | Astro 5 + TypeScript, static output, Vercel adapter for the single enquiry function | PROVISIONAL |
| Hosting | Vercel | **CONFIRMED (user instruction)** |
| Enquiry backend | Vercel Function (Astro API route) emailing via Resend (or equivalent) | PROVISIONAL |
| Public artist name, contacts, domain | — | OWNER INPUT |
| Numeric capacity ("5–10 a month") on the site | draft only on Hospitality, Gifting, Artist | PROVISIONAL, owner approval |
| Moodboard 2 file | not in repo | OWNER INPUT |
| External design references | none could be inspected | recorded |

## 4. Page inventory and purpose
| Page | Purpose | Primary action |
|---|---|---|
| Home | orient all visitors; prove with real paintings; route | Request a proposal |
| Hospitality | convince hotel/resort/restaurant/designer buyers; be honest that the proof is portrait/devotional so far | Discuss a hospitality project |
| Gifting | corporate/executive gifts; set volume expectations | Request a gifting proposal |
| Commissions | private portraits, devotional art; what to send | Commission an artwork |
| Gallery | proof of skill, whole paintings, lightbox | Commission something similar |
| Artist | trust: self-taught, ~30 years, how the studio works | Request a proposal |
| Process | one authoritative explanation of commissioning: stages, what to send per market, what happens after you submit | Request a proposal |
| Contact | single enquiry form with type-specific guidance | submit |
| Privacy / Terms | legal | — |
| Thank-you | confirmation (noindex) | — |

## 5. Conversion hierarchy
1. **Request a proposal** (and segment variants) → `/contact/` form → email to operator. Primary.
2. Secondary: Discuss a Hospitality Project, Request a Gifting Proposal, Commission an Artwork (all route to the form with a preselected type).
3. WhatsApp: only when a real number is configured.
4. Tertiary: gallery browsing, artist page.
Measure: form submissions by type (server-side counter in logs/email subject; optional analytics later).

## 6. Visitor journeys
**Hospitality buyer:** search/referral → Home or Hospitality → sees a whole portrait and the honest portfolio note → reads process and capacity → Discuss a hospitality project → form (type preselected) → operator replies with questions and a proposal.
**Gifting buyer:** Gifting page → reads gift types and volume candour → Request a gifting proposal → form → operator confirms quantity/date feasibility.
**Private client:** Commissions → sees medium guidance and "what to send" → Commission an artwork → form (optionally mentions a photograph; file upload is **not** in v1; the operator replies asking for the image by email/WhatsApp) → proposal.
**Designer/architect:** Hospitality → size/medium notes → form.

## 7. Dependencies
- **Content:** drafts in CONTENT_AND_SEO need owner sign-off (#15) and facts (#1, #2, #4, #6, #12, #13).
- **Assets:** only four paintings, three of which need cleaner files; `artwork-03` is blocked by a burned-in overlay; more hospitality-relevant work wanted (ARTWORK_INVENTORY).
- **Page dependency map:** Home → {Hospitality, Gifting, Commissions, Gallery, Artist, Contact}; segment pages → Gallery, Contact; Gallery → Contact; Contact → Thank-you. Shared: header, footer, button set, artwork data, form component, lightbox.
- **Build order dependencies:** design tokens → layout shell → artwork data → pages → form + function → SEO/metadata → QA → deployment.

## 8. Technology assumptions **[PROVISIONAL]**
The repository holds only Markdown (no package manifest), so the stack is chosen, not inherited:
- **Astro 5 + TypeScript**, static output with one server-rendered endpoint; `@astrojs/vercel` adapter; `@astrojs/sitemap`; plain CSS with custom properties (no Tailwind required; if the build session prefers Tailwind it must map exactly to DESIGN tokens); no UI framework unless needed for the lightbox (vanilla TS preferred); `sharp` for derivatives; Fontsource for self-hosted fonts.
- Why: content site, minimal JS, excellent Core Web Vitals, first-class Vercel support, simple for a small team to edit (data files).
- Alternative (acceptable): Next.js App Router with static generation and a Route Handler for the form. The master prompt tells the build session to confirm and justify.
- **Vercel readiness:** see MASTER_PROMPT §Deployment (project settings, env vars, headers, redirects, preview noindex, no secrets in git). Deploying and pushing require explicit user approval.

## 9. Integrations
- Email: Resend (or Postmark/SES) via `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL`, `ENQUIRY_FROM_EMAIL` (verified sender domain). 
- Spam control: honeypot, timing check, server-side validation, basic per-IP rate limit (in-memory best effort; upgrade path: Vercel KV/Upstash or Vercel BotID).
- Analytics: none at launch (owner decision #20).
- Fonts: Fontsource (self-hosted) or Google Fonts.
- No CMS, no maps, no embeds, no third-party scripts at launch.

## 10. Known unknowns
Public artist name; contact details; location wording; domain; logo; reply-time promise; commercial terms; packaging/shipping; likeness permissions; which hospitality subjects the artist will take on; clean high-resolution images; moodboard 2 file; whether any real installations exist. All tracked in CONTENT_INPUTS_REQUIRED.

## 11. Build phases
| Phase | Scope | Exit criteria |
|---|---|---|
| 0 (done) | This documentation set | Eight docs exist and cross-check |
| 1 Foundation | Scaffold Astro + TS, tokens, fonts, layout shell, header/footer, artwork data, image pipeline | `build` and type check pass; shell at 5 widths |
| 2 Pages | Home, Hospitality, Gifting, Commissions, Artist, Gallery + lightbox, Privacy, 404 | All routes render real copy; no placeholders |
| 3 Enquiry | Contact form, endpoint, validation, email, thank-you, env guard | Test submission delivered in a configured environment |
| 4 SEO and a11y | Metadata, schema, sitemap, robots, alt text, keyboard and axe checks | Checks pass; schema validates |
| 5 Polish and QA | Taste Skill checkers, screenshots at 5 widths, performance, red audit | Acceptance criteria in MASTER_PROMPT all green |
| 6 Release | Vercel project, env vars, preview review, production deploy, domain | Owner approves each externally visible step |

## 12. Definition of done
All routes implemented with approved copy; only real artwork used and no blocked asset published; no invented claims; one filled red per viewport (screenshot audit); WCAG 2.2 AA checks on every page; Lighthouse mobile ≥ 90 Performance, ≥ 95 Accessibility/SEO/Best Practices on Home and one segment page (measured and reported, not assumed); the form delivers email in a configured environment and fails the production build when unconfigured; sitemap/robots/schema valid; builds cleanly on Vercel (preview URL verified); final report lists what was verified, what was not and what the owner must still supply.
