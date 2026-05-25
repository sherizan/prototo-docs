# Proto docs (Nextra 4)

Documentation site for [Prototo](https://prototo.app), built with [Nextra 4](https://nextra.site) and the docs theme.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

Content lives in `src/content/`. Navigation titles are configured in `_meta.json` files alongside each folder.

## Deploy

Deploy as a standard Next.js app on Vercel.

## Patches

`patches/nextra-theme-docs+4.6.1.patch` fixes a bug in `nextra-theme-docs@4.6.1` where `Layout` strips `children` before Zod validation, breaking static generation. Applied automatically via `patch-package` on `npm install`. Upstream fix is already on the Nextra main branch.
