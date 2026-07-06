# CLAUDE.md

prototo-docs: the designer-facing documentation site at docs.prototo.app.
Next.js 16 + Nextra 4. Content is MDX in `src/content/` with `_meta.json`
navigation. Deploys on Vercel from main.

## Prototo ecosystem (4 repos — read the shared contracts)

This repo is one of the Prototo siblings. The single source of truth for
cross-repo contracts is auto-loaded here:

@~/Public/prototo-shared/CONTRACTS.md

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
- CLI commands are always `npx proto <cmd>` (`proto` is not on PATH).
- The PRIMARY flow is Prototo Desktop (one window, prototo.app/download);
  the two-terminal flow is the alternative for terminal pros.

## Commands

- `npm run dev` — local dev at :3000
- `npm run build` — production build (run before pushing content changes)
