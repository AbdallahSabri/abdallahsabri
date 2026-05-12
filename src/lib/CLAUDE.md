# src/lib — Utilities

Single file: `metadata.ts` — centralized metadata and site configuration.

## Exports

### **siteConfig**
Canonical site constants. Always import from here, never hardcode.

```ts
{
  name: 'Abdallah Sabri',
  title: 'Abdallah Sabri — Full-Stack Engineer',
  description: '...',
  url: 'https://abdallahsabri.com',
  ogImage: '...',  // OG image URL
  twitter: '@...',  // Twitter handle
}
```

**Usage:**
```tsx
import { siteConfig } from '@/lib/metadata';

// In a component:
<meta property="og:title" content={siteConfig.title} />
```

### **defaultMetadata**
Next.js `Metadata` object. Single source of truth for shared metadata attributes (OG, Twitter card, robots, hreflang alternates).

**Usage in pages:**
```tsx
import { Metadata } from 'next';
import { defaultMetadata } from '@/lib/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return {
    ...defaultMetadata,
    title: 'Page-specific title',
    // Override any fields as needed
  };
}
```

## Metadata Structure

`defaultMetadata` includes:
- **Open Graph:** `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
- **Twitter Card:** `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`, `twitter:site`
- **Robots:** `robots: { index: true, follow: true, ... }`
- **Alternates:** `alternates.canonical` + `alternates.languages` for `en-US`, `ar-SA`, `x-default` (for hreflang)

## When to Update

- Update `siteConfig` when: site name, URL, OG image, or Twitter handle changes
- Update `defaultMetadata` when: global robots directives or hreflang structure changes
- Use spread in `generateMetadata()` for page-specific overrides (title, description per page)
