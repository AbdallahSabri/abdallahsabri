# abdallahsabri.com

Personal portfolio and contact site showcasing work, experience, and services.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, React 19) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 (`@tailwindcss/postcss`) |
| Fonts | Geist Sans + Geist Mono (Google Fonts via `next/font`) |
| i18n | next-intl v4 — English (default) + Arabic (RTL) |
| Email | Resend SDK v6 (contact form) |
| Images | Next.js `<Image>` with AVIF/WebP, remote images from AWS S3 (`eu-central-1`) |
| Analytics | Google Analytics (production only) |
| SEO | next-sitemap, robots.ts, structured JSON-LD (Person + ProfilePage schemas) |
| Linting | ESLint 9 + Prettier 3 |
| Deployment | Vercel |

## Quick Start

```bash
npm install
npm run dev       # localhost:3000
npm run build
npm run lint
npm run format
```

## Architecture

```
src/
├── app/                 # Next.js App Router (routes, layouts, API handlers)
├── components/          # UI components (sections/ for portfolio, ui/ for primitives)
├── lib/                 # Utilities (metadata.ts — siteConfig + defaultMetadata)
├── i18n/                # Internationalization (routing.ts, request.ts)
└── middleware.ts        # next-intl locale detection

messages/
├── en.json              # English translations
└── ar.json              # Arabic translations
```

## Environment Variables

- **`RESEND_API_KEY`** — Used in `/api/contact` to send contact form emails

## Key Constraints & Behaviors

- **Analytics & JSON-LD:** Gated to `NODE_ENV === 'production'` — neither renders in development or preview.
- **Contact API:** In non-production, `/api/contact` returns `{ ok: true }` immediately without sending email (prevents accidental sends during dev).
- **Locale routing:** Locale is determined from the URL path only; cookie-based locale detection is disabled.
- **S3 images:** Remote images from `s3.eu-central-1.amazonaws.com/abdallahsabri.com/**` are allowed by `next.config.ts`.
- **SEO Schemas:** All JSON-LD schemas must be defined in a `seo.ts` file in the same folder as the page route. Import schemas in the page component and inject via `<script type="application/ld+json">` tags. Examples: `src/app/[locale]/projects/clincura/seo.ts`, `src/app/[locale]/projects/level-feedback/seo.ts`.

## Deployment

Deployed to Vercel. Use the standard Vercel CLI or GitHub-based CI/CD for deployments.

## Planning

When requesting planning for any task or feature, Claude will create a plan file in the `PLANS/` folder using the naming format: `TIMESTAMP_PLAN_NAME.md` (e.g., `051220261530_redesign_hero.md`). Timestamps are in `MMDDYYYYHHMM` format.

## Related Documentation

- `/src/app/CLAUDE.md` — Routes, layouts, how to add pages
- `/src/components/CLAUDE.md` — Component organization, portfolio sections
- `/src/lib/CLAUDE.md` — Utilities: siteConfig, defaultMetadata
- `/src/i18n/CLAUDE.md` — i18n setup, translation workflow
