# CLAUDE.md

prototo-docs: the designer-facing documentation site at docs.prototo.app.
Next.js 16 + Nextra 4. Content is MDX in `src/content/` with `_meta.ts`
navigation. Deploys on Vercel from main.

Docs: `DESIGN.md` before any visual change · `README.md` setup. `proto-docs-prompt.md` is the
original build prompt (history only).

## Prototo ecosystem

@~/Public/prototo-shared/INDEX.md

This repo is a pure consumer: pages must match shipped behavior. When `~/Public/prototo-shared/CHANGELOG.md`
shows a user-facing change (CLI version, URL shape, desktop release), check the affected pages.
Backlog label: `docs`.

## Writing rules

- Designer-first. Never mention Metro, bundlers, React Native internals, or
  package versions. The reader is a product designer, not an engineer.
- **No em dashes in copy** (house rule). Use periods, colons, or commas.
- Prototo Desktop is the ONLY flow (prototo-shared#74, 2026-09-26): there are
  no terminal users. Describe app actions (Publish, Record, Flow, Export flow,
  New project, View › Restart Preview, the Prototo menu), never `npx proto …`
  commands; the app runs the CLI itself. Claude Code's own setup commands
  (configure-claude-code) are the exception. Removed pages get a redirect in
  `next.config.mjs`.

## Commands

- `npm run dev` — local dev at :3000
- `npm run build` — production build (run before pushing content changes)
