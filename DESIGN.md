# Prototo Docs — Design System

The visual spec for the Prototo docs (`docs.prototo.app`). A Nextra 4 site — most of the look is
Nextra's theme; the brand layer lives in `src/app/globals.css` (`:root` CSS vars) and the Nextra
primary-hue vars. Docs is a **pink-primary** surface (links + accents use the brand pink).

## Brand palette (canonical — shared across all Prototo surfaces)

| Token | Hex | Use here |
|---|---|---|
| Primary brand pink | `#E86A9C` | `--prototo-primary` + the Nextra primary hue (links, active nav, accents) |
| Pink CTA (accessible) | `#C83C79` | `--prototo-primary-strong` — deepened so **white/light text on pink clears WCAG AA** (4.8:1). Use for any pink button carrying light text. |
| Brand blush | `#F0E4E8` | `--prototo-secondary` — soft pink tint (subtle backgrounds/hovers) |
| Ink | `#241820` | primary text (warm near-black) |
| Accent (teal) | `#00A090` | secondary accent, sparing |

> Canonical values are shared with the site, desktop app, and emails — each surface applies them per
> its own system, but the hexes match. See the other repos' `DESIGN.md`.

## Nextra primary hue

The brand pink is expressed to Nextra in HSL so its theming (links, sidebar highlight) picks it up:

```css
--nextra-primary-hue: 336deg;
--nextra-primary-saturation: 73%;
--nextra-primary-lightness: 66%; /* .dark: 72% */
```

That HSL resolves to `#E86A9C`. If the brand pink changes, update both `--prototo-primary` and these
three hue vars together (keep them in sync by hand).

## Do / Don't

- **Do** use the CSS vars (`var(--prototo-primary)` etc.), never hardcode the hex in a component.
- **Do** use `--prototo-primary-strong` for a pink button with light text (AA).
- **Don't** introduce a second pink — the palette above is the whole brand set.
