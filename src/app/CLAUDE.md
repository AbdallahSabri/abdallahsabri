# src/app — App Router

Next.js App Router structure. Locale-prefixed routing: all pages are under `[locale]/`.

## Routes

| Route | File | Purpose |
|---|---|---|
| `/` | `page.tsx` | Redirect to `/en` (handled by middleware) |
| `/en`, `/ar` | `[locale]/page.tsx` | Home page — renders portfolio (Hero, About, Services, Work, Experience, Skills, Volunteering, Contact, Footer) |
| `/en/about`, `/ar/about` | `[locale]/about/page.tsx` | Standalone about page with profile photo + experience section |
| `/api/contact` | `api/contact/route.ts` | POST endpoint — receives contact form submissions, sends email via Resend SDK |
| `/sitemap.xml` | `sitemap.ts` | Auto-generated sitemap with hreflang alternates |
| `/robots.txt` | `robots.ts` | Auto-generated — allows all crawlers including AI bots |

## Layout Hierarchy

```
app/layout.tsx (root)
  ├─ Google Analytics (production only)
  └─ Wraps everything

  [locale]/layout.tsx (per-locale)
    ├─ Sets <html lang dir> (en/ar)
    ├─ Loads Google Fonts (Geist Sans + Mono)
    ├─ NextIntlClientProvider wrapper
    ├─ JsonLd component (structured data)
    └─ Wraps page content
```

## Adding a New Page

1. Create `src/app/[locale]/new-page/page.tsx`
2. Import `Metadata` from `next`
3. Export `generateMetadata` function that spreads `defaultMetadata` from `src/lib/metadata.ts`
4. Export default component with `async`/`await` if needed
5. Wrap locale-specific strings with `getTranslations()` (server) or `useTranslations()` (client)

Example:
```tsx
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { defaultMetadata } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...defaultMetadata,
    title: 'New Page',
  };
}

export default async function NewPage() {
  const t = await getTranslations('namespace');
  return <div>{t('key')}</div>;
}
```

## SEO & Structured Data

- **Metadata:** Generated per-page via `generateMetadata()` importing `defaultMetadata` from `src/lib/metadata.ts`
- **JSON-LD:** Injected by `<JsonLd />` component from `src/components/JsonLd.tsx` (renders in production only)
  - Global: `Person` + `ProfilePage` schemas
  - `/about`: Additional detailed `Person` schema with `alumniOf`, `award`, `knowsAbout`

## Contact API

- **Endpoint:** `POST /api/contact`
- **Behavior:** 
  - In production: sends email via Resend SDK to `abdallah.silwad@gmail.com`
  - In development/preview: returns `{ ok: true }` immediately (no email sent)
- **Headers:** Set `RESEND_API_KEY` in environment

## Home Page Section Order

From `[locale]/page.tsx`, rendered top-to-bottom:
1. Navbar
2. Hero
3. About
4. Services
5. Work
6. Experience
7. Skills
8. Volunteering
9. Contact
10. Footer
11. ScrollToTop

(SMBServices is defined but commented out in the source)
