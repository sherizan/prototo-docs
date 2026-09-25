# CLAUDE.md

prototo-docs: the designer-facing documentation site at docs.prototo.app.
Next.js 16 + Nextra 4. Content is MDX in `src/content/` with `_meta.ts`
navigation. Deploys on Vercel from main.

## Prototo ecosystem (4 repos — read the shared contracts)

This repo is one of the Prototo siblings. The single source of truth for
cross-repo contracts is auto-loaded here:

@~/Public/prototo-shared/CONTRACTS.md

**Backlog (all Prototo repos):** GitHub Issues on `sherizan/prototo-shared` + the Prototo project board — `gh issue list -R sherizan/prototo-shared -l docs` when picking up work; add deferred docs follow-ups there (`gh issue create` + `gh project item-add 5 --owner sherizan --url <issue>`), not in a local file.

- **proto** (`~/Public/proto`) — the CLI (`@sherizan/proto-cli`) + iOS dev-client.
- **prototo-website** (`~/Public/prototo-website`) — backend, auth, share, studio.
- **prototo-desktop** (`~/Public/prototo-desktop`) — the Mac app (the primary flow).
- **prototo-docs** (here) — consumes everything: docs must match shipped
  behavior. When CONTRACTS.md's changelog shows a user-facing change (new CLI
  version, new tool, URL shape, desktop release), check the affected pages.

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
