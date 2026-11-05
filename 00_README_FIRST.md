# NILA VARNAM — Design & Prompt Blueprint

This folder is the **design and prompt-generation phase**, not the website implementation phase.

Start with `01_CLAUDE_CODE_PROMPT_GENERATOR.md` in Claude Code from the root of `jithujsam/Nila-Varnam`.

Claude Code's job is to inspect the repository, install and read the requested design skill, inspect the supplied visual references and real artwork assets, then author the complete website specification set.

## Required outputs

Claude must create these files in the repository:

- `docs/design/DESIGN.md`
- `docs/prompts/MASTER_PROMPT.md`
- `docs/content/CONTENT_AND_SEO.md`
- `docs/design/ANIMATION_SPEC.md`
- `docs/design/REFERENCE_LIBRARY.md`
- `docs/PROJECT_BLUEPRINT.md`

Claude must **not** start implementing the production website in this phase. The outputs are the approved blueprint to use in a later implementation session.

## Brand visual direction

The supplied brand references show:
- Deep teal as the principal brand colour.
- Warm ivory / parchment as the main background.
- Kraft, natural paper and muted warm neutrals as supporting materials.
- Texture and tactile detail used with restraint.
- A small, deliberate red accent for attention and conversion.

Red is not a primary brand colour. Use it sparingly for a selected CTA, active state, small marker, important underline, enquiry emphasis or other single focal detail. Do not spread red across every button, icon, label or section.

## Reference images

The two user-provided visual references are expected to be available in the repository or supplied to Claude Code:
1. The stationery / identity flatlay featuring teal, parchment, kraft paper, natural string and restrained identity marks.
2. The wider colour-and-material moodboard featuring deep teal, warm white, kraft, taupe, textured swatches and abstract organic compositions.

Claude must locate these assets. If they are not in the repository, request or provide an explicit place for the owner to add them. Do not silently substitute unrelated stock images.

## Taste Skill

Install the frontend design skill using:

```bash
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

The user originally wrote `npx skills add Leonxlnx/taste-skill`. Use the repository URL plus explicit skill name above because that is the currently documented installation form.

The skill requires Node.js 22+ and Chrome, Edge or Chromium for its browser checks. Do not pretend those checks ran if the environment lacks these prerequisites.

## Use

Open Claude Code in the repository and run `01_CLAUDE_CODE_PROMPT_GENERATOR.md`.
