# Ashi Gupta Portfolio

Single-page portfolio built with Next.js 15 (App Router, static export) + TypeScript + Tailwind CSS v4.
Deployable to GitHub Pages or any static host.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
```

## Type-check, lint, build

```bash
npm run typecheck
npm run lint
npm run build        # writes static files to ./out
```

## Editing content

All resume-derived content lives in a single typed file: [src/content/site.ts](src/content/site.ts).

Edit and commit:
- `site.name`, `site.title`, `site.location`, `site.email`, `site.linkedin`
- `about` - the one-sentence summary
- `skills[]` - grouped skill labels
- `experience[]` - reverse-chronological roles and delivery highlights
- `education[]` and `certifications[]` - education and certification details

The portrait is imported in [src/components/Profile.tsx](src/components/Profile.tsx). Replace the imported image file to update it.

Resume:
- Replace `public/AshiGupta_Resume.pdf` with the latest PDF (same filename), or update `site.resumeFile`.

## Deploy to GitHub Pages

The included GitHub Actions workflow at `.github/workflows/deploy-pages.yml` builds and deploys automatically on every push to `main`. It detects user sites (`<username>.github.io`) and project sites, applying the correct path in each case.

After pushing to GitHub, open **Settings > Pages** and select **GitHub Actions** as the source.

## What was verified

- Production build exports static files to `out/`.
- TypeScript check is clean with `npm run typecheck`.
- GitHub Pages builds correctly for both user and project site URLs.

## Not built (intentionally, per your decision)

- No admin area, authentication, database, analytics, or contact-form backend. Content is managed in code.

## Files of interest

- [src/app/layout.tsx](src/app/layout.tsx) — root layout, metadata, Manrope font
- [src/app/page.tsx](src/app/page.tsx) — page composition
- [src/app/globals.css](src/app/globals.css) — Tailwind v4 tokens, reduced-motion, focus styles
- [src/content/site.ts](src/content/site.ts) — all content
- [src/components/Nav.tsx](src/components/Nav.tsx)
- [src/components/Profile.tsx](src/components/Profile.tsx)
- [src/components/Skills.tsx](src/components/Skills.tsx)
- [src/components/Experience.tsx](src/components/Experience.tsx)
- [src/components/Education.tsx](src/components/Education.tsx)
- [src/components/Connect.tsx](src/components/Connect.tsx)
- [src/components/Footer.tsx](src/components/Footer.tsx)
- [next.config.ts](next.config.ts) — static export config with optional `basePath`
