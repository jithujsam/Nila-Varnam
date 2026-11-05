# NILA VARNAM — DEPLOYMENT.md

Related: [PROJECT_BLUEPRINT](PROJECT_BLUEPRINT.md) · [MASTER_PROMPT](prompts/MASTER_PROMPT.md) · [ARTWORK_GUIDE](ARTWORK_GUIDE.md) · [CONTENT_INPUTS_REQUIRED](content/CONTENT_INPUTS_REQUIRED.md)

**Status of this document:** describes what is configured in the repository. Nothing has been deployed, no Vercel project has been linked, no domain connected and nothing pushed to `main`. Each of those needs explicit owner approval.

## 1. Stack
Astro 7 (static output) + TypeScript, `@astrojs/vercel` adapter (Build Output API), `@astrojs/sitemap`, self-hosted fonts (Fontsource: Instrument Serif, Instrument Sans). One serverless function: `POST /api/enquiry/` (`src/pages/api/enquiry.ts`). Node 22 (`.nvmrc`, `engines`).

## 2. Vercel project settings
| Setting | Value |
|---|---|
| Framework Preset | Astro (auto-detected) |
| Build Command | `npm run build` (runs preflight → `astro build` → post-build check) |
| Output Directory | leave default (the adapter writes `.vercel/output`) |
| Install Command | `npm install` |
| Node.js Version | 22.x |
| Root Directory | repository root |

`vercel.json` already sets security headers (CSP, nosniff, frame deny, referrer, permissions policy), immutable caching for `/_astro/*`, and a `/index.html` → `/` redirect. Trailing slashes are always on (`/contact/`).

## 3. Environment variables
Set in Vercel → Project → Settings → Environment Variables (Production **and** Preview), or locally in `.env` (git-ignored; copy `.env.example`).

| Variable | Required | Purpose |
|---|---|---|
| `PUBLIC_SITE_URL` | production | Canonical URLs, sitemap, Open Graph. Real public URL, no trailing slash |
| `RESEND_API_KEY` | production | Email delivery of enquiries (Resend) |
| `ENQUIRY_TO_EMAIL` | production | Where enquiries go (comma-separate multiple) |
| `ENQUIRY_FROM_EMAIL` | production | Verified sender, e.g. `NILA VARNAM <enquiries@yourdomain>` |
| `PUBLIC_CONTACT_EMAIL` | optional | Shown on Contact, Footer, Privacy. Empty = not shown |
| `PUBLIC_WHATSAPP_NUMBER` | optional | Digits with country code. Enables "Message on WhatsApp" |
| `PUBLIC_PHONE` | optional | Shown in the footer |
| `PUBLIC_ARTIST_NAME` | optional | Artist's public name. Empty = "the artist"; enables `Person` schema |

Never commit real values. Server-only keys (`RESEND_API_KEY`, `ENQUIRY_*`) must **not** be prefixed `PUBLIC_`.

## 3a. Staging mode (currently ON)
`launch.config.json` has `"stagingMode": true`. While it is true, **every** build, including a Vercel Production build of `main`, behaves like a preview: placeholder artwork is allowed and labelled, the site is `noindex` with `robots.txt` disallowing all, and the email variables are not required (the contact form shows a notice until they are set). This lets `main` deploy now.

**At launch:** approve real artwork, set the Production environment variables, then set `"stagingMode": false` and push. The production guards in section 4 switch on and the site becomes indexable. Do not launch without doing this.

## 4. What is a "production" build
A build is treated as production when `VERCEL_ENV=production` (Vercel's Production environment) or `BUILD_TARGET=production`. Everything else (Vercel Preview, local) is a preview build.

| | Preview / local | Production |
|---|---|---|
| Placeholder artwork | shown, clearly labelled | **impossible** |
| Search engines | `noindex, nofollow` meta; `robots.txt` disallows all | `index, follow`; robots allows, lists sitemap |
| Missing env vars | build passes; Contact page shows a developer notice | **build fails** with a list of missing variables |
| Unapproved artwork | allowed | **build fails** |

### Placeholder safety (four layers)
1. `src/data/artworks.ts`: only `status: 'approved'` works are published in production.
2. `scripts/preflight.mjs` runs before every build and, in production, fails if there is no approved artwork, if any placement points at a non-approved artwork, if an approved entry looks like a placeholder, or if env vars are missing.
3. `src/lib/artwork.ts` throws at build time if production code references a non-approved artwork, and never imports the placeholder images (they are removed from the production bundle).
4. `scripts/postbuild-check.mjs` scans the built output; the build fails if a placeholder file, a placeholder marker or a stray `noindex` is found.

**Consequence:** the first production deployment is blocked until real, approved artwork is added (see ARTWORK_GUIDE). This is intentional. Preview deployments work immediately.

## 5. First deployment checklist (needs owner approval at each externally visible step)
1. Add real approved artwork and update `placements.ts` (ARTWORK_GUIDE).
2. Create a Resend account, verify the sending domain, create an API key.
3. Push the branch to GitHub *(requires approval)*; import the repository in Vercel *(requires approval)*.
4. Set the environment variables for Preview and Production.
5. Open the Preview deployment: check every page, send a test enquiry, confirm the email arrives and `Reply-To` is the sender.
6. Promote to Production *(requires approval)*; attach the domain in Vercel → Domains *(requires approval)*; set `PUBLIC_SITE_URL` to it and redeploy.
7. Check `/robots.txt`, `/sitemap-index.xml`, view-source for `index, follow`, and the contact form once more on production.
8. Submit the sitemap to Google Search Console (optional).

Rollback: Vercel → Deployments → select the previous deployment → Promote to Production.

## 6. Local commands
```bash
npm install
cp .env.example .env     # then fill in values for local form testing
npm run dev              # http://localhost:4321
npm run check            # type check
npm run build            # preflight + build + post-build check
BUILD_TARGET=production npm run build   # prove the production guards locally
npm run placeholders     # regenerate the generated abstract placeholder images (preview only)
npm run images -- <original> <name> [cropBottomPx]   # make a web derivative of a real painting
```

## 7. Verification already performed (see the implementation report for results)
Type check, preview build, production-guard tests (including a fixture with approved artwork), keyboard/lightbox/form/menu tests, reduced-motion and no-JS tests, red-usage audit, Lighthouse mobile (local server), Taste Skill layout and consistency checkers. **Not verified:** a real Vercel deployment, `vercel build` via the Vercel CLI, and live email delivery (no Resend credentials were available).

## 8. Known operational notes
- The in-memory rate limit on the enquiry endpoint is best-effort per warm function instance. For stronger protection add Vercel BotID or a KV/Upstash limiter.
- No analytics or cookies are used; the Privacy page says so. Update it if that changes.
- The Privacy page is a plain-language draft that needs owner/legal review before launch.
