# src/i18n — Internationalization

i18n setup using next-intl v4. Two locales: English (default) and Arabic (RTL).

## Files

### **routing.ts**
Configuration for next-intl. Exports:

- **`routing` object:** Locale config
  ```ts
  const routing = {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    localeCookie: false,  // No cookie; locale from URL path only
  };
  ```

- **Re-exported navigation hooks:** Always import these from `src/i18n/routing`, not from `next/navigation`
  - `Link` — locale-aware link component
  - `redirect` — locale-aware redirect
  - `usePathname` — get current pathname with locale support
  - `useRouter` — locale-aware router

**Usage:**
```tsx
import { Link, useRouter, usePathname } from '@/i18n/routing';
```

### **request.ts**
Server-side request configuration. Reads the locale from the incoming request, falls back to `'en'` if missing or unsupported, then dynamically imports the corresponding translation file (`messages/{locale}.json`).

**Do not import directly in components.** This is consumed by next-intl internally.

## Translation Files

Located at the project root (outside `src/`):
- **`messages/en.json`** — English strings
- **`messages/ar.json`** — Arabic strings

## Adding a Translation

1. Add the key and value to both `messages/en.json` and `messages/ar.json`
2. In components, use:
   - **Server components:** `const t = await getTranslations('namespace'); t('key')`
   - **Client components:** `const t = useTranslations('namespace'); t('key')`

Import from `next-intl/server` (server) or `next-intl` (client):
```tsx
// Server
import { getTranslations } from 'next-intl/server';
const t = await getTranslations();

// Client
import { useTranslations } from 'next-intl';
const t = useTranslations();
```

## Locale Detection

- **Mechanism:** URL path only (e.g., `/en/about`, `/ar/about`)
- **Middleware:** `src/middleware.ts` delegates to next-intl and routes accordingly
- **No cookie:** Locale is not persisted in cookies; each request's locale is determined by the URL

## Namespace Pattern

Keys in translation files can be nested under namespaces. Example structure:
```json
{
  "navbar": { "home": "...", "about": "..." },
  "hero": { "title": "...", "subtitle": "..." }
}
```

Access with:
```tsx
const t = useTranslations('navbar');
t('home')  // Gets navbar.home
```
