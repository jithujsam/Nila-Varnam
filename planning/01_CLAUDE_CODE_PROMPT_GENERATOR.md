# Claude Code Prompt-Generation Brief — NILA VARNAM

<role>
Act as a senior creative director, brand strategist, UX architect, conversion strategist, SEO strategist, motion designer and Claude Code prompt engineer.
</role>

<mission>
This phase is documentation and prompt design only. Do not build the production website. Inspect this repository, the supplied reference images and genuine artwork assets. Then create a complete, implementation-ready design and prompt system for a later website-development session.
</mission>

<project_context>
Brand: NILA VARNAM. An independent, artist-led art studio based in Kerala and serving customers across India. The artist is the user's father, self-taught, with approximately 30 years of practice learned through observation, experimentation and continuous work. Known mediums and capabilities include watercolour, portraits, oil, acrylic, sketches and religious artwork; other subjects can be discussed when validated with the artist. Approximate production capacity is 5–10 paintings per month, dependent on size, complexity and order mix.

The artist creates the work. The business operator handles prospecting, sales, client communication, proposals, project management and commercial relationships.

Primary audiences: boutique hotels, resorts, restaurants, hospitality groups, interior designers, architects, corporate gifting agencies and businesses commissioning executive or commemorative gifts. Secondary audience: private clients commissioning original work.

Primary website conversion: Request a Project Proposal. Secondary conversions: Discuss a Hospitality Project, Request a Gifting Proposal, Commission an Artwork and contact through WhatsApp when a real number is configured.

This is a commissioned-art lead-generation website, not an ecommerce marketplace. Do not build cart or checkout requirements into the specification.
</project_context>

<visual_direction>
Use the user-supplied stationery and material moodboards as the primary identity references. The intended feeling is a professional contemporary Indian art studio with subtle Kerala roots: tactile, crafted, calm, editorial, confident, warm and commercially credible. It should look appropriate to a boutique hotel buyer or corporate gifting manager, while retaining the personal character of an artist-led practice.

The palette hierarchy is:
1. Deep teal / blue-green as the principal brand anchor.
2. Warm ivory / parchment as the dominant background and surface.
3. Kraft, muted ochre, warm brown, taupe and stone as supporting natural neutrals.
4. Red as a rare attention accent only.

The user specifically wants red to focus attention, but only minimally. Treat it as a signal, not a second primary colour. It may be used for one important conversion moment, a small active indicator, a selected state or a restrained underline. Do not use red for every button, icon, link, section background or repeated highlight. It must never overwhelm deep teal and warm paper tones.

Translate the references through actual material photography, careful whitespace, considered alignment, editorial typography, restrained texture and occasional organic crops. Do not recreate the moodboard literally as a website. Avoid generic AI landing-page patterns, black-and-gold luxury clichés, SaaS dashboard aesthetics, purple gradients, excessive rounded cards, unnecessary shadows, glassmorphism, decorative Kerala clichés and motion-heavy visual theatre.
</visual_direction>

<truth_and_portfolio_rules>
The genuine artwork photographs are the portfolio source of truth. Inspect all images available in the repository. Classify only what can be grounded in the image or owner-provided details. Earlier supplied examples demonstrate realistic portraits and religious paintings, including watercolour-style work; they do not automatically prove a complete hospitality landscape or decorative-interior portfolio.

Never invent artist name, formal qualifications, awards, exhibitions, clients, testimonials, hospitality installations, prices, minimum quantities, shipping promises or delivery guarantees. Describe the artist as self-taught with approximately 30 years of practice. Do not imply formal art training. Where a proposed service is not yet demonstrated by portfolio evidence, describe it as available for discussion or commission, not as an established specialty with a fake track record.
</truth_and_portfolio_rules>

<required_research>
Inspect:
1. Repository contents, branches, README, manifests and existing source files.
2. Both user-supplied moodboard images, if present in the repo or working context.
3. All available real artwork photographs.
4. The installed Taste Skill instructions.
5. Anthropic's current prompt-engineering guide: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices
6. Up to five carefully selected visual reference websites: independent art studios, editorial galleries, contemporary Indian design brands and premium hospitality brands.

For each external reference, record the exact URL, date inspected, relevant design lesson and what must not be copied. Do not claim to have inspected inaccessible pages. Keep the reference list selective and useful.

Use the current Anthropic guide, not just the user's pasted excerpt. Apply clear roles, context, sequential instructions, well-structured XML tags, concrete examples where useful, explicit output formats, action-oriented instructions and verification against acceptance criteria. Tune any model-specific advice to the Claude model actually available in Claude Code. Avoid excessive or conflicting prompt instructions.
</required_research>

<taste_skill>
Install the requested skill with this documented command:

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

The skill's documented install name is `design-taste-frontend`. Read its installed SKILL.md and follow its actual guidance. Do not merely install it and ignore it.

Verify Node.js and browser prerequisites. The skill's checks require Node 22+ and Chrome, Edge or Chromium. If unavailable, document the limitation and do not claim browser verification ran.

Use the skill to guide art direction, design-system consistency and visual quality. Calibrate layout variance, motion intensity and visual density for a premium art studio. Do not blindly accept random palette/layout decisions that conflict with the supplied moodboards. Do not use shader-heavy tech/game effects. Record which skill recommendations were adopted, adapted or rejected and why.
</taste_skill>

<deliverables>
Create these exact documentation files:

1. `docs/design/DESIGN.md`
2. `docs/prompts/MASTER_PROMPT.md`
3. `docs/content/CONTENT_AND_SEO.md`
4. `docs/design/ANIMATION_SPEC.md`
5. `docs/design/REFERENCE_LIBRARY.md`
6. `docs/PROJECT_BLUEPRINT.md`
7. `docs/assets/ARTWORK_INVENTORY.md`
8. `docs/content/CONTENT_INPUTS_REQUIRED.md`

All documents must cross-reference one another and share consistent decisions. Clearly mark decisions as confirmed, provisional or awaiting owner input.
</deliverables>

<design_md>
Make DESIGN.md the definitive design authority. Specify brand essence, audience expectations, design principles and anti-principles; moodboard analysis; exact colour tokens and hierarchy; rules for minimal red usage; typography families, weights, scale and line heights; grid, max widths, gutters, spacing and breakpoints; texture/material rules; image ratios, art direction and crop behaviour; wordmark direction without pretending a final logo exists; navigation; CTA hierarchy; forms; gallery; responsive behaviour; accessibility; component rules; and examples of correct versus incorrect decisions.

Explain the desired emotional result in concrete terms: crafted, calm, contemporary, rooted, tactile and professionally credible. The visitor should feel this is a real artist-led studio with decades of practice and the ability to scope a serious commission.

Define exactly where red is permitted and where it is prohibited. Include contrast/accessibility decisions.
</design_md>

<master_prompt>
MASTER_PROMPT.md is for a fresh, later Claude Code implementation session. It must be an operational build prompt, not a summary.

It must instruct that later session to:
- Inspect the repository and preserve working functionality.
- Read every specification file before coding.
- Load and follow Taste Skill.
- Confirm the stack from repository evidence; if empty, choose a justified maintainable stack.
- Build the complete site, not only a homepage.
- Implement all routes and shared components.
- Use actual artwork with correct file paths.
- Implement responsive, accessible interactions.
- Use factual approved content only.
- Configure enquiry capture only with a real backend; document missing secrets and setup.
- Implement SEO and metadata.
- Review at mobile, tablet and desktop sizes.
- Run meaningful type, lint, build, functional and visual checks.
- Iterate against explicit acceptance criteria.
- Avoid unrelated refactors and destructive operations.
- Ask before irreversible or externally visible actions such as pushing, deleting shared data or changing production infrastructure.

Include project goals/non-goals, route map, page requirements, component architecture, content model, asset rules, SEO, animation, form/lead flow, accessibility, performance, acceptance criteria and final reporting.
</master_prompt>

<content_and_seo>
CONTENT_AND_SEO.md must define audience segments and search intent; positioning; message hierarchy; tone and vocabulary; sitemap and URL structure; page titles and meta descriptions; H1/H2 structure; complete draft copy for homepage, hospitality, gifting, commissions, artist, gallery and contact pages; form microcopy; FAQ drafts; internal links; keyword clusters mapped to pages; future content opportunities; schema guidance; local SEO without inventing a storefront; image SEO and alt-text rules; and conversion copy.

Potential search themes include custom artwork for hotels in India, hotel artwork commissions, original paintings for resorts, artwork for hospitality interiors, corporate art gifting India, custom hand-painted corporate gifts, commissioned portraits India, custom watercolour portraits and custom oil portraits.

Do not claim ranking guarantees, search volumes or keyword difficulty without current, dated evidence. Map intent to pages, not every keyword to one page. Avoid thin or repetitive SEO pages.
</content_and_seo>

<animation_spec>
ANIMATION_SPEC.md must describe a quiet, tactile and deliberate motion language inspired by an unhurried gallery visit or turning the page of an art book.

Specify motion principles and anti-principles, timing scale in milliseconds, easing, hero image reveal, typography entrance, section reveals, gallery hover/focus, lightbox transitions, navigation, buttons, reduced-motion fallback, mobile constraints and performance. Avoid long pinned scroll scenes, excessive parallax, cursor-following effects, animated grain, shader effects and perpetual movement. Motion must serve the artwork and orientation, not compete with them.
</animation_spec>

<reference_library>
REFERENCE_LIBRARY.md must document both user moodboards with repository paths and specific colour/material/layout observations. Add only a few external references that were actually inspected. Include URL, inspection date, useful lesson, what not to copy and how the lesson applies to NILA VARNAM. No unfocused inspiration dump.
</reference_library>

<project_blueprint>
PROJECT_BLUEPRINT.md must define business goals, website non-goals, page inventory and purpose, conversion hierarchy, visitor journeys for hospitality/gifting/private commissions, dependencies, content/asset dependencies, technology assumptions, integrations, known unknowns, phases and definition of done. Link all other docs.
</project_blueprint>

<artwork_inventory>
ARTWORK_INVENTORY.md must list each genuine image found: exact relative path, dimensions, visible subject, medium only if known, photo quality issues, best category, potential page use and recommended reshoot/crop. Never invent paths or overwrite originals. Create derivatives separately only if necessary.
</artwork_inventory>

<content_inputs_required>
CONTENT_INPUTS_REQUIRED.md must list owner inputs: public artist name, optional artist portrait, approved biography, business email/phone/WhatsApp, social links, approved location wording, domain/trademark decision, artwork titles/mediums/dimensions, more hospitality-relevant samples, actual packaging/shipping capabilities, confirmed commercial terms and final copy. Mark each as launch blocker, high priority or optional. Do not stop the documentation task to ask for all inputs.
</content_inputs_required>

<execution_sequence>
1. Inspect repository and report its state.
2. Visually inspect the moodboards and record specific design observations.
3. Inventory genuine artwork images.
4. Install and read Taste Skill; confirm prerequisites.
5. Read current Anthropic prompting guidance.
6. Research a small number of strong external design references.
7. Make one coherent design recommendation; avoid an unranked set of concepts.
8. Write all eight documents.
9. Cross-check content, palette, red usage, page map and CTA hierarchy across the documents.
10. Verify that a fresh Claude Code session could use MASTER_PROMPT.md without needing this conversation.
11. Stop. Do not implement the website.
</execution_sequence>

<quality_bar>
These must be professional creative and technical specifications, not short generic prompts. Be concrete: exact tokens, examples, page-by-page requirements, animation behaviours, structured copy, component states and testable criteria. Make the design direction distinctive and faithful to the moodboards. One coherent recommendation is better than disconnected options. Mark uncertainty honestly.
</quality_bar>

<completion_report>
At completion, list every file created, explain the final visual direction, identify repository or environment limitations, list owner inputs still required and explicitly confirm that production website code was not built.
</completion_report>