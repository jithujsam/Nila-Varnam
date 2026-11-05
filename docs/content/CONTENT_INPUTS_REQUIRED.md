# NILA VARNAM — CONTENT_INPUTS_REQUIRED.md

Related: [PROJECT_BLUEPRINT](../PROJECT_BLUEPRINT.md) · [CONTENT_AND_SEO](CONTENT_AND_SEO.md) · [DESIGN](../design/DESIGN.md) · [MASTER_PROMPT](../prompts/MASTER_PROMPT.md) · [ANIMATION_SPEC](../design/ANIMATION_SPEC.md) · [REFERENCE_LIBRARY](../design/REFERENCE_LIBRARY.md) · [ARTWORK_INVENTORY](../assets/ARTWORK_INVENTORY.md)

Everything the owner must supply. The documentation phase did **not** stop to ask for these; the later build can proceed with safe fallbacks (column "Build fallback") but **launch cannot** until Launch blockers are closed.

Priority key: **LB** = launch blocker · **HP** = high priority (launch is possible but weaker) · **OPT** = optional.

| # | Input | Priority | Why it matters | Build fallback until supplied |
|---|---|---|---|---|
| 1 | **Artist's preferred public name** (as it should appear on the site). A name (“Joby Sam”) appears in a burned-in overlay on `artwork-03`; it is unverified. | LB | Artist page, schema `Person`, credibility | Page says "the artist" and "the studio"; no name rendered; schema `Person` omitted |
| 2 | **Approved artist biography**: owner-approved factual text; confirm “self-taught”, “approximately 30 years”, where in Kerala (district/town, optional), mediums | LB | Artist page, Home, trust | Use only the confirmed facts in CONTENT_AND_SEO draft; no anecdotes |
| 3 | Artist portrait and/or photographs of the artist at work | HP | Humanises the studio; strongest trust signal after the paintings | Artist page uses a painting and text only |
| 4 | **Business email** (receives enquiries), **phone**, **WhatsApp number**. A mobile number appears in the `artwork-03` overlay and is unverified. | LB (email); HP (phone/WhatsApp) | Enquiry delivery; contact page; schema | Form needs `ENQUIRY_TO_EMAIL`; no phone/WhatsApp rendered when env empty |
| 5 | Social links (Instagram, Facebook, YouTube etc.) to be shown | OPT | Credibility, off-site proof | No social links rendered |
| 6 | **Approved location wording**: e.g. "Based in Kerala" vs a named district/town; whether visits are by appointment; no public street address unless wanted | HP | Local SEO, trust; avoids implying a shopfront | "Based in Kerala, working with clients across India." |
| 7 | **Domain and trademark decision**: domain name; whether "NILA VARNAM" is registered or searched; any conflicting existing business | LB (domain), HP (trademark check) | Canonical URLs, sitemap, email sender | Build with `PUBLIC_SITE_URL`; Vercel preview URL for staging |
| 8 | Artwork **titles, mediums, dimensions** (and year if the owner wishes) for each work | HP | Gallery index, lightbox, alt text accuracy | Fields omitted; no "TBC" shown |
| 9 | **Permission to publish each sitter's likeness** (private persons and any public figures); whether names may be given | LB | Legal and ethical; three works show real people | Publish only works the owner marks `approved`; the others stay in repo but unlinked |
| 10 | **Clean, high-resolution photographs** of every painting (≥ 3000px long side, no overlays, no frame unless intended, square-on) — see ARTWORK_INVENTORY §4 | LB for `artwork-03` replacement; HP for all | Hero quality, lightbox, SEO image quality | Use the four originals at ≤ 540–628px; hold `artwork-03` back |
| 11 | **Hospitality-relevant samples**: landscapes, florals, abstracts, devotional, decorative pieces suitable for lobbies/rooms; any work seen in a real room | HP | The Hospitality page otherwise has no on-topic proof | Page says it is made to commission and shows portrait skill |
| 12 | **Packaging, framing and shipping capabilities**: do they frame? courier partner? international? insurance? typical lead time | HP | Gifting and Commission FAQs | FAQs say "discussed per project"; no promises |
| 13 | **Commercial terms**: how enquiries are accepted, sizes offered, advance/payment structure, revisions, minimum quantities, lead times, price ranges or "from" prices (or a decision to publish none) | HP | Credible proposals; Gifting FAQ | No prices, minimums or delivery times on the site |
| 14 | **Logo** (if any) and the **second moodboard file** (place at `assets/reference/moodboard-material-swatches.*`) | OPT (logo), HP (moodboard file) | Wordmark; archival reference | Typographic wordmark; moodboard noted as missing |
| 15 | **Approved final copy** (owner and operator sign-off on CONTENT_AND_SEO drafts) | LB | Truth and tone | Drafts ship only after sign-off |
| 16 | **Reply-time commitment** for enquiries (e.g., within 2 working days) | HP | Form microcopy | "We reply to every enquiry personally." |
| 17 | **Privacy policy and terms** (owner/legal review; GST/legal-entity details if they wish to publish) | LB for Privacy | Required for a lead form | Plain-language draft provided in the build; flagged "needs review" in the report, not on the page |
| 18 | **Accounts**: Vercel project, GitHub repository permissions, email-sending provider (e.g., Resend) with verified sender domain | LB | Deploy and enquiry delivery | Local/preview build runs; production build blocked until env set |
| 19 | Whether to show Malayalam text; meaning/transliteration of "Nila Varnam" the owner wants stated | OPT | Cultural accuracy | No Malayalam; no claimed meaning |
| 20 | Analytics preference (Vercel Web Analytics, Plausible, none) and consent approach | OPT | Measuring enquiries | No analytics scripts |
| 21 | Whether an "existing clients" or "commissioned for" line may ever be used, and which, with permission | OPT | Social proof | None shown; no logos, quotes or named clients |
| 22 | Hospitality and gifting examples the artist wants to propose (e.g., a series of 6 matched works for a hotel corridor) | OPT | Specific, credible proposals | Generic process copy |

## How to supply inputs
- Text facts: add to a new file `docs/content/OWNER_FACTS.md` (create when ready) or reply in the chat; the build session copies them into `src/data/site.ts`.
- Images: drop into `assets/artwork/original/` with a note of title/medium/size; never overwrite existing files.
- Secrets: never commit; set in Vercel Project Settings → Environment Variables (see MASTER_PROMPT §Environment).
