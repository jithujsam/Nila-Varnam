# NILA VARNAM — ARTWORK_INVENTORY.md

Related: [DESIGN](../design/DESIGN.md) · [PROJECT_BLUEPRINT](../PROJECT_BLUEPRINT.md) · [MASTER_PROMPT](../prompts/MASTER_PROMPT.md) · [CONTENT_AND_SEO](../content/CONTENT_AND_SEO.md) · [ANIMATION_SPEC](../design/ANIMATION_SPEC.md) · [REFERENCE_LIBRARY](../design/REFERENCE_LIBRARY.md) · [CONTENT_INPUTS_REQUIRED](../content/CONTENT_INPUTS_REQUIRED.md)

Inspected visually on 2026-11-05; dimensions measured with Pillow. Tags: **[CONFIRMED]** = visible in the file, **[OWNER INPUT]** = to be supplied.

## 0. Where the files are
The repository contained **no images** when this phase began (only planning Markdown). The five images supplied in the session were copied **unchanged** (byte-identical) into the repository under new descriptive filenames. Originals must never be overwritten; derivatives (crops, resized WebP/AVIF) are created later in `public/` or an `assets/artwork/derived/` folder, never in `assets/artwork/original/`.

| Session file | Repository path |
|---|---|
| (moodboard) | `assets/reference/moodboard-colour-combo-sheet.webp` (see REFERENCE_LIBRARY) |
| painting 1 | `assets/artwork/original/artwork-01-christ-framed.jpg` |
| painting 2 | `assets/artwork/original/artwork-02-portrait-white-beard-canvas.jpg` |
| painting 3 | `assets/artwork/original/artwork-03-portrait-moustache-teal-ground.jpg` |
| painting 4 | `assets/artwork/original/artwork-04-watercolour-elder-hand-to-mouth.jpg` |

Total genuine artworks: **4**. This is thin for a launch portfolio: the site must be designed to look complete with four works without padding.

## 0a. Second supply (owner zip, 2026-11-05): the portfolio is now real
The owner supplied 17 further images (and one photograph of the artist at work). They show far more than the first four: **botanical paintings, a harbour scene, a miniature-style devotional painting, framed portraits and a pencil sketch.** The statement in the sections below that the portfolio proves only portrait and devotional work is therefore **superseded**; the site now describes botanical, portrait, devotional, marine and sketch work, and still says hospitality commissions are made to the brief (no installations are shown or claimed).

Processed derivatives live in `src/assets/artworks/` (webp, sRGB, never upscaled; white borders trimmed on some; bottom screenshot artefacts cropped). Originals of the moderate-size files are kept unaltered in `assets/artwork/original/` and `assets/studio/`. Two originals (an 8.7 MB pencil-sketch photo and a 3.9 MB round devotional photo) stay with the owner.

| Published (status approved) | Category | Note |
|---|---|---|
| botanical-banana-plant, -white-lotus, -pink-red-bloom, -magnolia-pods, -banana-bunch, -red-flower-framed | Botanical paintings | no people; safest to publish |
| portrait-white-beard-teal-ground, -watercolour-man-blue-shirt, -nun-framed, -elder-hand-to-mouth | Portraits | **sitters are real people; the owner must confirm permission** |
| devotional-christ-framed, devotional-ganesha-miniature | Devotional paintings | |
| marine-ship-at-harbour, sketch-pencil-portrait | Landscapes and sketches | the sketch depicts a real person (permission) |
| studio-artist-at-work | Artist page only (not gallery) | owner-supplied photo; computer screen and desk notes cropped out |

| Held back (not published) | Why |
|---|---|
| `IMG-20250123-WA0021` couple portrait | signature area carries a phone number and a third-party brand mark; also two private sitters |
| `IMG-20260824-WA0033` moustache portrait, teal ground | burned-in name and phone number |
| `IMG_20260423_191428184` round devotional painting | photographed on a bedspread; needs a clean reshoot |

Titles, mediums and sizes are still unknown and are omitted. Alt texts describe only what is visible. Approval here follows the owner's instruction to use these images; sitter permission and the owner's final selection remain the owner's decision.

## 1. Global observations
- All four are web/social-compressed JPEGs (≤ 1600px long side, 190–400 KB), likely shared via messaging or social platforms. None meets the 2× display-width rule for a full-width image.
- Two carry **black rectangular artefacts** (bottom edge) from screenshots; one carries a **burned-in name and contact overlay**.
- All four are **portraits or devotional figures**; they evidence portrait and religious capability. **They do not evidence** hospitality-specific work: no landscapes, interiors, florals, abstract/decorative pieces, or work in situ. Copy must follow (CONTENT_AND_SEO).
- Sitters in three works appear to be real individuals. **Likeness and publication permission is OWNER INPUT** (see CONTENT_INPUTS_REQUIRED #9). Do not name or identify any sitter on the site.
- Signatures and dates appear in the paintings (dates read like `21.1.23` and `14-7-24` on two). The artist's signature is the owner's own; do not transcribe it into copy, and do not publish "year" as a fact until the owner confirms.
- Media: the owner has stated watercolour, oil, acrylic, portraits, sketches and religious art as capabilities; **the medium of each individual file is not confirmed** and is marked "appears …" below. Do not publish a medium until confirmed.

## 2. Per-image inventory

### artwork-01 — Christ, framed
- **Path:** `assets/artwork/original/artwork-01-christ-framed.jpg`
- **Dimensions:** 1340 × 1600 px (≈ 5:6 portrait), JPEG.
- **Visible subject:** half-length figure of Christ, long hair and beard, right hand raised in blessing, left hand on chest, red robe over a pale tunic with a green sash, soft grey-blue gradient background; signature at lower right. Photographed **inside a gold-tone beaded wooden frame** on a white wall.
- **Medium:** appears to be oil on canvas **[unconfirmed]**.
- **Quality issues:** frame included (the frame is not the artist's work and may be a customer's/owner's frame; show it only if intended); a small **dark rectangular artefact at the bottom edge** (screenshot remnant); slight perspective/lens tilt; white wall margin of uneven width; image resolution modest; saturated red and green may clip after compression.
- **Best category:** Devotional.
- **Potential use:** Gallery (devotional group); Commissions page "religious artwork" example; not a hospitality hero.
- **Crop/reshoot:** crop to the painted surface or keep the frame consistently (decide once); remove the artefact; reshoot square-on in even daylight without the frame, ≥ 3000px; capture a detail of the hand/face.
- **Suggested alt text:** "Oil-style painting of Christ with a raised hand in blessing, red robe and green sash" — change "Oil-style" to the confirmed medium (or omit it) before publishing.

### artwork-02 — Portrait, white-bearded man, teal-blue ground
- **Path:** `assets/artwork/original/artwork-02-portrait-white-beard-canvas.jpg`
- **Dimensions:** 1080 × 1430 px (≈ 3:4 portrait), JPEG.
- **Visible subject:** close portrait of an elderly man with long white hair and full white beard in a white garment, turned slightly, soft warm skin tones against a dark-to-teal blue-green brushed ground; canvas weave is visible; signature and a date at lower right.
- **Medium:** appears to be acrylic or oil on stretched canvas **[unconfirmed]**.
- **Quality issues:** low resolution for its prominence (1080 px wide), social-media compression, slight cool colour cast possible; no frame; the sitter is likely a real person (permission needed).
- **Best category:** Portraits.
- **Potential use:** **strongest tonal match to the brand (teal ground)** → leading candidate for the home hero and the Commissions page once a ≥ 2000px file exists; gallery portraits group; commissioned-portraits search page.
- **Crop/reshoot:** use whole until reshot; never upscale past displayed 540px; reshoot square-on, matte light, ≥ 3000px on the long side, colour card in frame.
- **Suggested alt text:** "Portrait painting of an elderly man with a full white beard against a teal-blue background".

### artwork-03 — Portrait, smiling man with moustache and striped scarf, teal ground
- **Path:** `assets/artwork/original/artwork-03-portrait-moustache-teal-ground.jpg`
- **Dimensions:** 1600 × 1290 px (≈ 5:4 landscape), JPEG.
- **Visible subject:** close, warmly smiling man with grey hair and moustache wearing a dark jumper and a blue/white striped scarf, against a mottled teal-green wash; signature and a date at lower left.
- **Medium:** appears to be watercolour on paper (wash background, paper-textured whites) **[unconfirmed]**; the owner has named watercolour as a capability.
- **Quality issues:** **a red burned-in text overlay across the bottom edge shows a personal name and an Indian mobile number.** It must **not** be published. It also overlaps the area next to the signature, so a crop removing it also removes part of the signature region. Resolution is the best of the four but still < 2000px.
- **Best category:** Portraits (watercolour).
- **Potential use:** home hero alternative (teal ground matches the brand strongly), Commissions page, gallery. **Blocked until a clean file exists.**
- **Crop/reshoot:** obtain the original without overlay; failing that, crop above the overlay and accept losing the bottom ≈ 5% (check the signature stays acceptable or is cropped consistently). Reshoot at ≥ 3000px.
- **Contact data note:** the overlay's name and number are **unverified candidates** for public contact details; do not copy them anywhere without owner confirmation (CONTENT_INPUTS_REQUIRED #1, #4).
- **Suggested alt text:** "Watercolour-style portrait of a smiling man with a moustache and a striped scarf on a teal background" (confirm medium).

### artwork-04 — Watercolour-style portrait, elder with hand to mouth
- **Path:** `assets/artwork/original/artwork-04-watercolour-elder-hand-to-mouth.jpg`
- **Dimensions:** 1098 × 1600 px (≈ 11:16 tall portrait), JPEG.
- **Visible subject:** elderly bald man with white beard, intense blue eyes, one hand raised to his mouth holding a small object, green-and-ochre checked shirt, bright wet-in-wet washes of green, blue and warm white; signature and a mark at lower left.
- **Medium:** appears to be watercolour on paper **[unconfirmed]**, and the most obviously painterly work of the four.
- **Quality issues:** **dark rectangular artefact at bottom edge** (screenshot remnant); modest resolution (1098 px wide); very tall ratio fits 4:5 frames only when letter-boxed; the raised hand holds a small object near the mouth (reads as smoking), which some hospitality or gifting buyers may find off-brand — **the owner should decide whether it leads anywhere**; likely a real sitter (permission).
- **Best category:** Portraits (watercolour).
- **Potential use:** gallery; watercolour example on the Commissions page; not a hero; avoid on Gifting page until the owner approves the subject.
- **Crop/reshoot:** crop away the bottom artefact (lose ≈ 1–2% of the height); reshoot full-sheet square-on ≥ 3000px; if the paper white edge is present keep it for authenticity.
- **Suggested alt text:** "Watercolour portrait of an elderly bearded man with a hand raised to his mouth, in green and blue washes".

## 3. Category and usage matrix

| Work | Category | Hero | Home | Hospitality | Gifting | Commissions | Gallery | Artist |
|---|---|---|---|---|---|---|---|---|
| 01 Christ framed | Devotional | no | optional | no | no | yes (religious) | yes | no |
| 02 White-bearded portrait | Portraits | **yes (after reshoot)** | yes | supporting only | no | **yes** | yes | optional |
| 03 Moustache, teal wash | Portraits (watercolour) | **yes (after clean file)** | yes | supporting only | possible | yes | yes | no |
| 04 Elder, watercolour | Portraits (watercolour) | no | no | no | no | yes | yes | no |

**Hospitality and Gifting pages have no directly relevant artwork yet.** They should show a portrait as proof of skill and state plainly that hospitality-specific work is made to commission (CONTENT_AND_SEO). Do not generate or composite room mock-ups.

## 4. Missing shots (priority order)
1. Clean, high-resolution, square-on re-photographs of all four works (no overlays, no frame unless intended, no artefacts).
2. The artist working (hands, brushes, palette, easel) — real photographs by the owner.
3. Paintings on a real wall at real scale (home or client space with permission) to show scale and presence.
4. Any landscape, floral, abstract, devotional or decorative works the artist has already painted that suit hotels, resorts and restaurants.
5. Any gift-suited format: small paintings, sketches, framed portraits, packaging, with size noted.
6. A studio/paper/canvas close-up for texture, shot by the owner.
7. Optional: an artist portrait.

## 5. Image processing rules (for the build)
- Never edit originals. Generate derivatives into a separate directory with an explicit script (e.g., `scripts/make-images.mjs`, using `sharp`) and commit its output only if small; otherwise generate at build time.
- Output sRGB WebP (quality ~80) and AVIF where supported, widths 480, 720, 1080 and the native width, plus a JPEG fallback only if needed. Never upscale: cap derivatives at native width.
- Strip EXIF location data; keep colour profile.
- File names: lowercase-kebab, descriptive, no personal names (e.g., `portrait-white-beard-teal-ground.webp`).
- Build `src/data/artworks.ts` from this inventory: `id`, `file`, `width`, `height`, `category`, `title` (optional, owner), `medium` (only if confirmed), `size` (only if confirmed), `alt`, `status` (`ready` | `needs-clean-file`). Works with status `needs-clean-file` (03) may only be published after replacement; the build must fail or omit them from production if the overlay file is referenced (a simple check by filename/flag).
