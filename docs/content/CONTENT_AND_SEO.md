# NILA VARNAM — CONTENT_AND_SEO.md

Related: [DESIGN](../design/DESIGN.md) · [PROJECT_BLUEPRINT](../PROJECT_BLUEPRINT.md) · [MASTER_PROMPT](../prompts/MASTER_PROMPT.md) · [ANIMATION_SPEC](../design/ANIMATION_SPEC.md) · [REFERENCE_LIBRARY](../design/REFERENCE_LIBRARY.md) · [ARTWORK_INVENTORY](../assets/ARTWORK_INVENTORY.md) · [CONTENT_INPUTS_REQUIRED](CONTENT_INPUTS_REQUIRED.md)

Status tags: **[CONFIRMED]** owner fact · **[PROVISIONAL]** draft that ships only after owner sign-off (CONTENT_INPUTS_REQUIRED #15) · **[OWNER INPUT]** needs facts.
Dated research note: no keyword-volume, difficulty or ranking data was gathered (no SEO tool or search access in this phase, 2026-11-05). Nothing here claims volumes or rankings. Re-validate keywords with a current tool before publishing future articles.

---

## 1. Truth rules for all copy
1. Confirmed facts: independent artist-led studio in Kerala serving customers across India; artist is self-taught with approximately 30 years of practice (learned by observation, experimentation and continuous work); mediums/capabilities: watercolour, portraits, oil, acrylic, sketches, religious artwork, other subjects discussed with the artist; approximately 5–10 paintings a month depending on size, complexity and order mix; the operator handles enquiries, proposals and project management.
2. Never write: artist name (until supplied), qualifications, awards, exhibitions, clients, testimonials, hotel installations, prices, minimum quantities, delivery or shipping guarantees, ranking claims, "trusted by", "award-winning", "leading", "bespoke luxury".
3. Hospitality and gifting are **offered for discussion and commission**; the current portfolio proves portraits and devotional work only (ARTWORK_INVENTORY). Say so plainly where relevant.
4. Self-taught is stated as a positive fact, never as a credential. Use "approximately 30 years of practice", never a start year.
5. Do not name or identify any sitter.
6. Contacts render only when configured (env); never hard-code.
7. The numeric capacity statement ("roughly 5–10 paintings a month") **[PROVISIONAL]** appears only on Hospitality and Gifting pages after the owner approves publishing it.

## 2. Audience segments and search intent

| Segment | Intent type | Typical queries (themes, not volumes) | Primary page |
|---|---|---|---|
| Boutique hotels, resorts, restaurants, hospitality groups | commercial investigation | custom artwork for hotels in India; hotel artwork commissions; original paintings for resorts; art for hospitality interiors; restaurant wall art commission | `/hospitality/` |
| Interior designers, architects | commercial investigation | commission artwork for interior projects India; custom paintings for designers | `/hospitality/` (and `/commissions/` size/brief content) |
| Corporate gifting agencies and companies | commercial | corporate art gifting India; custom hand-painted corporate gifts; executive gift original painting; commemorative portrait gift | `/gifting/` |
| Private clients | transactional / commercial | commissioned portraits India; custom watercolour portraits; custom oil portraits; religious painting commission; portrait from photograph | `/commissions/` |
| Researchers/curious | informational | how commissioned art works; watercolour vs oil portrait | future articles (§14) |
| Brand/navigational | navigational | NILA VARNAM | `/` |

Keyword-to-page mapping is intentional and non-exclusive: intent is mapped to pages; a keyword is never the only reason a page exists, and no near-duplicate pages are created per city or per keyword.

## 3. Positioning and message hierarchy

**Positioning statement [PROVISIONAL]:** NILA VARNAM is an independent studio in Kerala where one self-taught artist, with approximately 30 years of practice, paints original commissioned work — portraits, devotional art and other subjects agreed in advance — for hotels, designers, businesses and private clients across India.

**Message hierarchy**
1. What it is: commissioned original paintings from an artist-led studio in Kerala.
2. Who it serves: hospitality, designers, corporate gifting, private commissions.
3. Proof: real paintings shown whole; approximately 30 years of practice; self-taught.
4. How it works: brief → proposal → painting → delivery (no guarantees, details per project).
5. Next step: Request a proposal.

## 4. Tone of voice and vocabulary
- Plain, calm, specific, warm, first person plural ("we") for the studio; "the artist" for the painter. No exclamation marks; no questions as headlines (FAQ entries may be questions); sentence case.
- Preferred words: commission, original, hand-painted, studio, painting, portrait, brief, proposal, size, medium, schedule, discuss.
- Avoid: elevate, curate (as filler), bespoke luxury, stunning, masterpiece, world-class, unique (unless true and specific), seamless, journey, passion, timeless, "ethereal", "soul-stirring", "God's own country", "authentic Kerala charm", any claim of fame.
- Numbers with units; Indian English spelling ("colour", "watercolour"); dates and currency only when supplied.

## 5. Sitemap and URL structure **[PROVISIONAL]**

| URL | Page | Index? | Nav |
|---|---|---|---|
| `/` | Home | yes | logo |
| `/hospitality/` | Artwork for hotels, resorts and restaurants | yes | Hospitality |
| `/gifting/` | Corporate art gifting | yes | Gifting |
| `/commissions/` | Private commissions and portraits | yes | Commissions |
| `/gallery/` | Gallery (Portraits, Devotional) | yes | Gallery |
| `/artist/` | The artist and the studio | yes | Artist |
| `/contact/` | Request a proposal (form) | yes | button |
| `/thank-you/` | Form confirmation | **noindex** | — |
| `/privacy/` | Privacy | yes (low priority) | footer |
| `/terms/` | Enquiry terms (only if the owner provides) | optional | footer |
| `/404` | Not found | noindex | — |

Rules: trailing slashes; lowercase; no query-driven indexable URLs (`/contact/?type=…` canonicalises to `/contact/`); `sitemap.xml` and `robots.txt` generated; no pages for individual paintings until each has genuine unique content; no city or "near me" pages.

## 6. Titles, meta descriptions, H1/H2 outlines

Titles ≤ 60 characters, descriptions ≤ 155. Brand suffix " | NILA VARNAM" omitted where length demands it.

### 6.1 Home `/`
- **Title:** NILA VARNAM — Commissioned paintings from Kerala
- **Meta:** Original paintings commissioned for hotels, designers, corporate gifting and private clients across India, by a self-taught artist with about 30 years of practice.
- **H1:** Commissioned paintings from a Kerala art studio
- **H2s:** Who we paint for · Paintings from the studio · How a commission works · The artist · Request a proposal

### 6.2 Hospitality `/hospitality/`
- **Title:** Custom Artwork for Hotels and Resorts in India
- **Meta:** Original paintings commissioned for hotels, resorts and restaurants across India. Share your project and receive a proposal from the studio.
- **H1:** Original paintings for hotels, resorts and restaurants
- **H2s:** What we can paint for hospitality spaces · What the portfolio shows today · How a hospitality commission works · Sizes, mediums and schedule · Questions from hospitality teams · Discuss a hospitality project

### 6.3 Gifting `/gifting/`
- **Title:** Corporate Art Gifting in India — Hand-Painted Gifts
- **Meta:** Hand-painted portraits and original paintings as corporate and executive gifts. Tell us the occasion and quantity and we will propose what is possible.
- **H1:** Hand-painted gifts for companies and gifting agencies
- **H2s:** Gifts the artist can paint · Volume and schedule · How a gifting commission works · Questions about gifting · Request a gifting proposal

### 6.4 Commissions `/commissions/`
- **Title:** Commissioned Portraits and Paintings in India
- **Meta:** Commission a watercolour, oil or acrylic portrait or a religious painting from a self-taught Kerala artist. Send a photograph and a few details.
- **H1:** Commission a portrait or painting
- **H2s:** What the artist paints · Watercolour, oil and acrylic · How a commission works · What to send · Questions about commissions · Commission an artwork

### 6.5 Gallery `/gallery/`
- **Title:** Gallery — Portrait and Devotional Paintings
- **Meta:** Portrait and devotional paintings by the NILA VARNAM artist, photographed whole. Open any work to see it larger.
- **H1:** Gallery of paintings
- **H2s:** Portraits · Devotional paintings (· Commission something similar, as a closing link)

### 6.6 Artist `/artist/`
- **Title:** The Artist — Self-Taught Painter in Kerala
- **Meta:** About the artist behind NILA VARNAM: self-taught, around 30 years of practice, painting portraits, devotional art and commissioned work in Kerala.
- **H1:** A self-taught artist with about 30 years of practice
- **H2s:** How the artist learned · What the artist paints · How the studio works · Work with the studio

### 6.7 Contact `/contact/`
- **Title:** Request a Project Proposal | NILA VARNAM
- **Meta:** Send a short brief for a hospitality, gifting or private commission and the studio will reply with next steps.
- **H1:** Request a proposal
- **H2s:** Tell us about your project · Other ways to reach the studio (only if configured)

## 7. Complete draft copy **[PROVISIONAL]**

Copy is intentionally short per screen. `{ARTIST}` = the owner's public name when supplied; until then use "the artist". Square-bracket text is a build instruction, not copy.

### 7.1 Home

**Screen 1 (hero)**
- H1: Commissioned paintings from a Kerala art studio
- Lead: Original portraits, devotional art and other paintings by one self-taught artist with about 30 years of practice, made to commission for businesses and private clients across India.
- Buttons: **Request a proposal** (primary) · See the gallery (secondary)
- Hero picture: `artwork-02` (or 03 when clean file exists), whole.

**Screen 2 — Who we paint for** (`rows`, one line each, each row links)
- Hospitality: Original paintings for hotels, resorts and restaurants. → /hospitality/
- Gifting: Hand-painted gifts for companies and gifting agencies. → /gifting/
- Commissions: Portraits and paintings for private clients. → /commissions/

**Screen 3 — Paintings from the studio** (3 works whole, one ratio per row, then link)
- Intro: Portrait and devotional paintings, shown whole.
- Link: See the gallery

**Screen 4 — How a commission works** (4 numbered rows)
1. Send a brief. Tell us what you need, the space or occasion, and the size you have in mind.
2. Receive a proposal. We confirm what is possible, the medium, the schedule and the cost.
3. The artist paints. Work is scheduled with the artist; you see progress where it suits the project.
4. Delivery. We discuss packing and delivery for your project before it ships.
[Do not add timelines or guarantees.]

**Screen 5 — The artist** (split, painting or portrait right)
- H2: A self-taught artist with about 30 years of practice
- Text: The artist learned by observation, experiment and daily work, and paints watercolour, oil and acrylic, portraits, sketches and religious subjects. Other subjects can be discussed.
- Link: Read about the artist

**Close (teal band, ivory-filled button)**
- H2: Tell us about your project
- Line: Share a short brief and we will reply with next steps.
- Button: **Request a proposal**

### 7.2 Hospitality

**Hero**
- H1: Original paintings for hotels, resorts and restaurants
- Lead: The studio paints original commissions for lobbies, rooms, restaurants and corridors. Share the space and the brief and we will propose what the artist can paint.
- Buttons: **Discuss a hospitality project** · See the gallery
- Picture: `artwork-02` whole.

**What we can paint for hospitality spaces**
- Rows: Portraits and figure paintings · Devotional and religious paintings · Other subjects discussed with the artist, such as landscape or still life **[OWNER INPUT: only list subjects the artist will take on]** · A series of matched works for one property **[OWNER INPUT: confirm]**.
- Text: Sizes, medium and framing are agreed per project.

**What the portfolio shows today** (honesty block)
- Text: The paintings in our gallery are portraits and devotional works. They show how the artist handles light, skin tone, fabric and detail. Work for hospitality spaces is made to commission, so we begin with your brief and agree the subject before painting.
- Link: See the gallery

**How a hospitality commission works** (steps)
1. Brief — the property, the space, the mood, the size and the number of works.
2. Proposal — subject, medium, size, schedule and cost for approval.
3. Painting — the artist paints; we manage communication with you.
4. Delivery — packing and delivery are agreed with you before dispatch.

**Sizes, mediums and schedule**
- Text: The studio completes roughly 5–10 paintings a month, depending on size, complexity and the mix of work. A project of several large paintings is scheduled across months. **[PROVISIONAL: owner approves numeric disclosure]**
- Mediums: watercolour, oil, acrylic, sketches.

**FAQ** (§11.2)

**Close:** H2 Discuss a hospitality project · Line "Tell us about the property and the walls you want to fill." · Button **Discuss a hospitality project**

### 7.3 Gifting

**Hero**
- H1: Hand-painted gifts for companies and gifting agencies
- Lead: A portrait or painting made by hand is a gift that is personal and made once. Tell us the occasion and the quantity and we will propose what is possible.
- Buttons: **Request a gifting proposal** · See the gallery
- Picture: `artwork-03` after a clean file exists; until then `artwork-02`.

**Gifts the artist can paint**
- Rows: A portrait from a photograph (executive, retirement or commemorative) · A painting of a place, object or subject you choose **[OWNER INPUT: confirm]** · A small series for a team or event **[OWNER INPUT: confirm sizes and numbers]**.
- Text: Mediums include watercolour, oil, acrylic and sketches.

**Volume and schedule** (candid)
- Text: This is a small studio. The artist completes roughly 5–10 paintings a month, so a gifting project suits a small number of meaningful gifts rather than hundreds. Tell us the quantity and the date and we will say plainly what fits. **[PROVISIONAL: owner approves numeric disclosure]**

**How a gifting commission works**
1. Share the occasion, the recipients, the quantity and the date.
2. We propose subjects, size, medium, schedule and cost.
3. You approve the references; the artist paints.
4. We agree packing and delivery with you.

**FAQ** (§11.3). **Close:** H2 Request a gifting proposal · Button **Request a gifting proposal**

### 7.4 Commissions

**Hero**
- H1: Commission a portrait or painting
- Lead: Send a photograph and a few details. The artist paints portraits, religious subjects and other works in watercolour, oil or acrylic.
- Buttons: **Commission an artwork** · See the gallery
- Picture: `artwork-04` (watercolour). Hero pictures are provisional and will vary as more works arrive; Home, Hospitality and Gifting use `artwork-02` for now (`artwork-03` once a clean file exists).

**What the artist paints** (rows)
- Portraits of people, from photographs you send
- Devotional and religious paintings
- Sketches
- Other subjects, discussed with the artist

**Watercolour, oil and acrylic** (text, 3 short paragraphs)
- Watercolour: Transparent, luminous washes on paper; suited to portraits with soft light.
- Oil: Rich colour and a smooth finish on canvas; suited to formal and devotional work.
- Acrylic: Strong colour and quick-drying layers on canvas.
- Note: The studio advises which medium suits your subject and space. **[Owner to confirm these descriptions are accurate for this artist.]**

**How a commission works** (4 steps, as Home)

**What to send**
- A clear, high-resolution photograph (a window-lit one is best).
- The size and orientation you would like and where it will hang.
- The medium you prefer, or ask us to advise.
- The date you need it by.

**FAQ** (§11.4). **Close:** H2 Commission an artwork · Button **Commission an artwork**

### 7.5 Gallery
- H1: Gallery of paintings
- Intro: Portrait and devotional paintings, photographed whole. Open a work to see it larger.
- H2 Portraits → works 02, 03 (when clean), 04 · H2 Devotional paintings → work 01
- Closing: Want a painting like one of these? **Commission something similar** → /contact/?type=commission
- Index list rows: only `title · medium · size` fields the owner has supplied.
- Statement: "More work is added as it is photographed." (only while the gallery has fewer than 8 works).

### 7.6 Artist
- H1: A self-taught artist with about 30 years of practice
- Lead: {ARTIST|The artist} paints from a studio in Kerala and learned by looking closely, trying things and painting continuously.
- **How the artist learned:** The artist is self-taught. There was no formal art training; the skill comes from about 30 years of observation, experiment and daily practice. **[OWNER INPUT: confirm wording; never imply a school, teacher or degree]**
- **What the artist paints:** Watercolour, oil and acrylic; portraits; sketches; religious subjects; other subjects by discussion.
- **How the studio works:** The artist paints. The studio's operator handles enquiries, proposals, schedules and delivery so that clients have one point of contact. The studio completes roughly 5–10 paintings a month depending on size and complexity. **[PROVISIONAL]**
- Close: Work with the studio → **Request a proposal**
- Portrait photograph: only if supplied. Optional artist statement as a pull quote: only if supplied verbatim.

### 7.7 Contact
- H1: Request a proposal
- Lead: Tell us what you need. A short brief is enough; we reply personally.
- Form: §9.
- Other ways to reach us: email/WhatsApp/phone **only when configured**; otherwise this section is not rendered.
- Location line: "Based in Kerala, working with clients across India." **[OWNER INPUT: confirm wording]**

## 8. Gallery labels and image caption rules
- No caption under any image (DESIGN §11). Catalogue data appears in the index list and the lightbox text panel.
- Format: **Title** (if the owner gave one; otherwise omitted, not "Untitled") · medium (confirmed only) · size in cm (confirmed only). Year only if the owner chooses to publish.
- Never write sitter names, prices, "sold", "available", "commissioned by".
- Lightbox link: "Commission something like this".

## 9. Form microcopy **[PROVISIONAL]**
- Heading above the form: "Tell us about your project".
- **Enquiry type** (required): Hospitality project · Gifting · Commission · Something else.
- **Your name** (required) · **Email** (required) · **Phone or WhatsApp** (optional) · **Organisation or city** (optional) · **Project brief** (required; helper: "What you need, where it will go, the size you have in mind, and when you need it.").
- Button: **Request a proposal** (segment preselected variants keep the same button label inside the form).
- Under button: "We reply to every enquiry personally." (replace with a time only when the owner commits.) Consent: "By sending this you agree to us contacting you about your enquiry. Privacy."
- Errors: "Enter your name." · "Enter a valid email address." · "Tell us a little about the project." · Server failure: "We could not send your enquiry. Please try again or email us at {email}." (email shown only if configured).
- Success: "Thank you. Your enquiry has been received and we will reply to you personally."
- Never use "Submit", "Click here", exclamation marks or fake countdowns.

## 10. CTA variants (copy)
Primary: Request a proposal · Discuss a hospitality project · Request a gifting proposal · Commission an artwork. Secondary: See the gallery · Read about the artist · Commission something similar. WhatsApp: Message on WhatsApp (only if configured). Footer line: "Request a proposal".

## 11. FAQ drafts (safe, truthful) **[PROVISIONAL]**

### 11.1 Home (short)
- **Where is the studio?** In Kerala. We work with clients across India. **[OWNER INPUT: location wording]**
- **Who paints the work?** One self-taught artist with about 30 years of practice paints every commission.
- **How do I start?** Send a short brief through the form and we will reply with next steps.

### 11.2 Hospitality
- **Do you have hotel installations to show?** The gallery currently shows portrait and devotional paintings. Work for hospitality spaces is made to commission, so we start with your brief. **[Update only with real installations]**
- **Can you paint a series for one property?** We can discuss a matched series; the number of works depends on size and schedule.
- **What sizes can you paint?** Sizes are agreed per project. Tell us the wall and we will advise.
- **What mediums are available?** Watercolour, oil and acrylic.
- **How long does a commission take?** It depends on size, medium and the number of works; we give a schedule in the proposal.
- **Do you ship?** We discuss packing and delivery with you before a project is dispatched. **[OWNER INPUT #12]**
- **How much does it cost?** Cost depends on size, medium, complexity and quantity. We give a written proposal. **[OWNER INPUT #13]**

### 11.3 Gifting
- **What quantity can you handle?** The studio completes roughly 5–10 paintings a month, so we suit a small number of meaningful gifts. Tell us the quantity and date. **[PROVISIONAL]**
- **Can you paint from a photograph?** Yes, portraits are commonly painted from a photograph you provide.
- **Can the gift be framed or packed?** We discuss framing and packing for your project. **[OWNER INPUT #12]**
- **Can recipients' details stay private?** We use references only for the commission and agree how they are handled; see Privacy.
- **What is the lead time?** We give a schedule in the proposal.

### 11.4 Commissions
- **Which medium should I choose?** We will advise based on subject, size and where it will hang.
- **What photograph works best?** A sharp, well-lit, high-resolution photograph. Send the largest original you have.
- **Can I see progress?** We can agree check-ins as part of the proposal. **[OWNER INPUT]**
- **Can I request changes?** Revision terms are agreed in the proposal. **[OWNER INPUT #13]**
- **Do you paint religious subjects?** Yes; the gallery includes a devotional painting.
- **Can you paint other subjects?** Other subjects can be discussed and are confirmed with the artist.

## 12. Internal link strategy
- Home → all three segment pages (rows), gallery (button), artist (link), contact (primary).
- Each segment page → gallery (secondary button), contact with its `?type=`, one sibling segment page in prose ("Looking for a portrait for yourself? See Commissions"), and the artist page.
- Gallery → commissions (closing link) and each lightbox → contact `?type=commission`.
- Artist → contact, commissions.
- Footer on every page: Hospitality, Gifting, Commissions, Gallery, Artist, Contact, Privacy.
- Descriptive anchors ("commission a portrait", "hospitality projects"); no "click here"; no more than ~3 contextual links per screen of text; breadcrumbs on segment pages only (Home › Hospitality).

## 13. Keyword clusters mapped to pages (themes; not volumes)
| Cluster | Example phrases | Page | Notes |
|---|---|---|---|
| Hotel art commissions | custom artwork for hotels in India; hotel artwork commissions; original paintings for resorts | `/hospitality/` | one page, include variants naturally in H2s/FAQ |
| Hospitality interiors | art for hospitality interiors; restaurant wall art commission | `/hospitality/` | supporting; interior-designer phrasing in FAQ |
| Corporate gifts | corporate art gifting India; custom hand-painted corporate gifts; executive gift painting | `/gifting/` | |
| Portrait commissions | commissioned portraits India; custom watercolour portraits; custom oil portraits; portrait from photograph | `/commissions/` | gallery supports with images |
| Religious art | devotional painting commission; religious painting commission | `/commissions/` and `/gallery/` | only claims proven by artwork 01 |
| Brand | NILA VARNAM | `/` | |
| Artist | self-taught artist Kerala | `/artist/` | |

Avoid: stuffing, doorway pages, "painting for sale" (this is not a shop), city pages without real local substance.

## 14. Content gaps and future articles (only with real facts)
1. How a hotel artwork commission works, from brief to delivery.
2. Choosing artwork sizes for lobbies, corridors and restaurant walls.
3. Watercolour or oil: choosing a medium for a portrait.
4. Planning corporate art gifts: quantity, schedule, recipients.
5. How to photograph a subject for a commissioned portrait.
6. Caring for and framing an original painting.
7. Case studies — **only** after real projects exist, with client permission.
Each article needs unique substance, an author line, and links to the relevant segment page.

## 15. Structured data guidance (JSON-LD, validated in build)
- Sitewide: `Organization` (name "NILA VARNAM", `url`, `logo` only when it exists, `areaServed` "India", `sameAs` only for real profiles, `contactPoint` only when email/phone configured; **no `address` and no `LocalBusiness`**); `WebSite` (no SearchAction).
- `Person` for the artist **only after** the public name is supplied; `jobTitle` "Artist"; no `alumniOf`, awards or credentials.
- Segment pages: `Service` (`provider` = Organization, `areaServed` India, `serviceType`; **no price or offers**) and `BreadcrumbList`.
- Gallery: `ImageGallery`; individual `VisualArtwork` entries (`name`, `artMedium`, `artform`, `creator`) **only for works whose title/medium the owner confirmed**.
- Contact: `ContactPage`.
- FAQ: `FAQPage` markup is allowed where the visible FAQ matches exactly; do not expect a rich result.
- Never add `AggregateRating`, `Review`, `Offer`, `Product` or `Event`.

## 16. Local SEO without a storefront
- Describe the studio as "based in Kerala" and "serving clients across India". Do not publish a street address or imply a showroom.
- If the owner later wants Google Business Profile, create it as a **service-area business with the address hidden** and keep name, phone and website consistent with the site; this is an owner decision (CONTENT_INPUTS_REQUIRED #6).
- No "near me" or city doorway pages. Region mentions appear naturally ("hotels in Kerala and across India") only where true.
- `hreflang` not needed (English, India). Set `lang="en-IN"` and `og:locale` `en_IN`.

## 17. Technical SEO checklist (build)
Unique title/description per page; one canonical per page (absolute URL from `PUBLIC_SITE_URL`); Open Graph and Twitter cards with a 1200×630 image built from a real painting (clean file only); `robots.txt` allowing all, pointing to the sitemap, and **disallowing everything on non-production Vercel previews** via `X-Robots-Tag: noindex` on preview deployments; sitemap excludes `/thank-you/`; semantic headings; fast LCP; image `width`/`height`; no duplicate H1; 404 page; no soft 404s; redirect `/gallery` ↔ `/gallery/` consistency by Vercel `trailingSlash`.

## 18. Image SEO and alt text standards
- File names: kebab-case, descriptive, no personal names, e.g. `portrait-white-beard-teal-ground.webp`.
- Alt text: describe what is visible in one sentence ≤ 125 characters; state the confirmed medium only; no keyword stuffing; no sitter names; no "image of"; decorative images `alt=""`.
- Provide `width`/`height`, responsive `srcset`, WebP/AVIF; lazy-load below the fold; the hero is eager with `fetchpriority="high"`.
- Include meaningful `title` text only in the lightbox panel, not as a tooltip.
- Strip location EXIF; keep sRGB.
- Optional image sitemap entries for gallery works.
- Examples: *"Watercolour portrait of an elderly bearded man with a hand raised to his mouth, in green and blue washes"* (after medium confirmed); *"Portrait of a smiling man in a striped scarf against a teal wash"*.

## 19. Conversion copy principles
- One action per screen; state the benefit in the button ("Request a proposal" not "Submit").
- Reduce anxiety: "A short brief is enough." · "We reply to every enquiry personally."
- Be honest about scale (small studio, limited monthly output) — framed as care, not scarcity.
- No countdowns, no discounts, no fake urgency, no popups.
