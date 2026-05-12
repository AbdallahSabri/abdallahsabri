# Plan: /projects, /projects/clincura, /projects/level-feedback Pages

## Context
Add three new locale-aware pages to the portfolio that showcase owned SaaS products in detail. The portfolio's `Work` section already has card-level entries for Clincura and Level Feedback with tech stack, tags, and description sourced from i18n translation files. These new pages expand each product into a full case-study layout — giving search engines richer content (product schema, keywords, metrics) and visitors a deeper story.

---

## Files to Create

### 1. `src/app/[locale]/projects/page.tsx`
Projects index listing page:
- `generateMetadata()` returning SEO title/description/OG (`type: "website"`) and hreflang alternates for `/en/projects` and `/ar/projects`
- JSON-LD: `ItemList` schema containing two `SoftwareApplication` entries
- Layout: `Navbar` → `<main>` → `Footer` → `ScrollToTop`
- Content: `SectionLabel` pill, H1 heading, subtitle, 2-column card grid (mirrors `Work` section card style — `rounded-2xl border bg-[#18181b]`, featured cards get indigo tint)
- Each card links to `/projects/clincura` and `/projects/level-feedback` via `Link` from `@/i18n/routing`

### 2. `src/app/[locale]/projects/clincura/page.tsx`
Clincura detail page:
- `generateMetadata()` from `getTranslations("Clincura")` — title, description, OG (`type: "article"`), Twitter card
- JSON-LD: `SoftwareApplication` schema (`applicationCategory: "HealthcareApplication"`)
- Layout: `Navbar` → `<main>` → `Footer` → `ScrollToTop`
- Uses `ProjectDetail` component (see below)

### 3. `src/app/[locale]/projects/level-feedback/page.tsx`
Level Feedback detail page — identical structure to Clincura page:
- `generateMetadata()` from `getTranslations("LevelFeedback")`
- JSON-LD: `SoftwareApplication` schema (`applicationCategory: "BusinessApplication"`)
- Uses `ProjectDetail` component

### 4. `src/components/sections/ProjectDetail.tsx`
Shared layout component to avoid duplicating JSX across the two detail pages. Accepts typed props:
```ts
type ProjectDetailProps = {
  hero: { name, tagline, period, tags[], backHref }
  problem: { heading, body }
  features: { heading, items: { title, description }[] }
  stack: { groups: { category, items[] }[] }
  impact: { heading, metrics: { value, label }[] }
  cta: { primary: { label, href } }
}
```
Five sections using `section-padding`, `mx-auto max-w-6xl`, and existing design tokens.

---

## Files to Modify

### 5. `messages/en.json`
Add three new top-level namespaces:

**`Projects`** (listing page):
```json
{
  "label": "My Products",
  "heading": "SaaS Products I Founded",
  "description": "Two products I designed, built, and shipped from zero.",
  "viewDetails": "View case study →"
}
```

**`Clincura`** (detail page):
```json
{
  "label": "Healthcare SaaS",
  "heading": "Clincura",
  "tagline": "AI-Powered Clinic Management for Clinic Operations",
  "period": "Dec 2024 – Present",
  "tags": ["Founder", "SaaS", "Healthcare Tech"],
  "ogTitle": "Clincura — AI-Powered Clinic Management SaaS | Abdallah Sabri",
  "ogDescription": "Built from scratch: a Clinic SaaS with AI scheduling, RBAC, and event-driven architecture.",
  "ogImageAlt": "Clincura — clinic management SaaS by Abdallah Sabri",
  "twitterTitle": "Clincura — AI Clinic Management SaaS",
  "twitterDescription": "Built from scratch: Clinic SaaS with AI scheduling and event-driven architecture.",
  "problem": { "heading": "The Problem", "body": "Clinics across the region run on paper or fragmented tools..." },
  "features": {
    "heading": "Key Features",
    "items": [
      { "title": "Clinic Management", "description": "Unified dashboard across locations with per-clinic RBAC." },
      { "title": "AI Scheduling", "description": "Intelligent appointment booking that reduces no-shows." },
      { "title": "Event-Driven Architecture", "description": "RabbitMQ-backed system for reliable async workflows." },
      { "title": "OpenAPI-First", "description": "Fully documented REST API for third-party integrations." },
      { "title": "Role-Based Access Control", "description": "Granular permissions for admins, doctors, and staff." },
      { "title": "Cloud Storage", "description": "Secure patient documents via AWS S3." }
    ]
  },
  "stack": {
    "heading": "Tech Stack",
    "groups": [
      { "category": "Frontend", "items": ["React", "TypeScript"] },
      { "category": "Backend", "items": ["NestJS", "TypeScript", "PostgreSQL", "RabbitMQ"] },
      { "category": "Infrastructure", "items": ["AWS S3", "Docker", "CI/CD"] },
      { "category": "Auth", "items": ["JWT", "RBAC"] },
      { "category": "Docs", "items": ["OpenAPI"] }
    ]
  },
  "impact": {
    "heading": "Results",
    "metrics": [
      { "value": "Dec 2024", "label": "First version shipped" },
      { "value": "Clinic", "label": "Supports multi-location operations" },
      { "value": "Event-driven", "label": "Async-first architecture from day one" }
    ]
  },
  "cta": { "visitLabel": "Visit Clincura", "backLabel": "← All Projects" }
}
```

**`LevelFeedback`** (detail page) — same shape with Level Feedback–specific copy:
```json
{
  "label": "SMB SaaS",
  "heading": "Level Feedback",
  "tagline": "Automated Reputation Management for Small Businesses",
  "period": "May 2026 – Present",
  "tags": ["Founder", "SaaS", "SMB"],
  "ogTitle": "Level Feedback — SMB Reputation Management | Abdallah Sabri",
  "ogDescription": "Automates Google Business Profile management and review monitoring for small businesses.",
  "features": {
    "items": [
      { "title": "Google Business Profile Automation", "description": "Auto-publish posts, respond to reviews, and manage Q&A." },
      { "title": "Review Monitoring", "description": "Real-time alerts for new reviews across platforms." },
      { "title": "Twilio SMS Campaigns", "description": "Automated SMS follow-ups to collect customer feedback." },
      { "title": "Stripe Billing", "description": "Subscription management with usage-based tiers." },
      { "title": "Claude AI Integration", "description": "AI-generated review response drafts." },
      { "title": "Event-Driven Core", "description": "RabbitMQ + Firebase for reliable async processing." }
    ]
  },
  "stack": {
    "groups": [
      { "category": "Frontend", "items": ["Next.js", "TypeScript"] },
      { "category": "Backend", "items": ["Firebase", "RabbitMQ"] },
      { "category": "Integrations", "items": ["Stripe", "Twilio", "Claude API", "Google APIs"] },
      { "category": "Infrastructure", "items": ["Vercel"] }
    ]
  },
  "impact": {
    "metrics": [
      { "value": "May 2026", "label": "Launched" },
      { "value": "Claude AI", "label": "AI-powered review responses" },
      { "value": "Automated", "label": "Full GBP management workflow" }
    ]
  },
  "cta": { "visitLabel": "Visit Level Feedback", "backLabel": "← All Projects" }
}
```

Also update `Work.items[0].href` → `"/projects/clincura"` and `Work.items[1].href` → `"/projects/level-feedback"`.

Add `"projects": "Projects"` to `Navbar.links` in both JSON files.

### 6. `messages/ar.json`
Mirror all three new namespaces in Arabic (full translation of all keys).

### 7. `src/components/sections/Navbar.tsx`
Add `{ label: t("links.projects"), href: "/projects" }` to the `navLinks` array. Use `Link` from `@/i18n/routing` with `href="/projects"` (page-level route, not hash anchor).

### 8. `src/app/sitemap.ts`
Add six new entries (en + ar for each new route):
- `/en/projects`, `/ar/projects`
- `/en/projects/clincura`, `/ar/projects/clincura`
- `/en/projects/level-feedback`, `/ar/projects/level-feedback`

With `lastModified: new Date()` and appropriate priority.

---

## Design Tokens (match existing theme)

| Element | Value |
|---|---|
| Page background | `bg-[#0f0f0f]` |
| Card background | `bg-[#18181b]` |
| Featured card | `bg-indigo-500/5 border-indigo-500/25` |
| Section wrapper | `section-padding` + `mx-auto max-w-6xl` |
| Headings | `text-white font-bold tracking-tight` |
| Body text | `text-zinc-400 leading-relaxed` |
| Tech chip | `rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-zinc-500` |
| Tag pill | `rounded-full px-2.5 py-0.5 text-xs font-medium bg-white/5 text-zinc-400` |
| Primary CTA | `rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500` |

---

## JSON-LD Schema Hierarchy

The schema graph uses `@id` references so all types link to the shared `Person` node already emitted by `JsonLd.tsx`. No duplicate data, just pointers.

### Shared identity node (already in `JsonLd.tsx` — do not re-emit, only reference by `@id`)

```
PERSON
  @id: "https://abdallahsabri.com#person"
  name: Abdallah Sabri
  url: abdallahsabri.com
  sameAs: [LinkedIn, GitHub]
```

### `src/app/[locale]/projects/page.tsx` — 2 schema blocks

**Block 1: BreadcrumbList**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://abdallahsabri.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Projects",
      "item": "https://abdallahsabri.com/projects"
    }
  ]
}
```

**Block 2: CollectionPage**
```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://abdallahsabri.com/projects#collection",
  "name": "Projects — Abdallah Sabri",
  "description": "SaaS products designed, built, and shipped by Abdallah Sabri.",
  "url": "https://abdallahsabri.com/projects",
  "author": { "@id": "https://abdallahsabri.com#person" },
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem", "position": 1,
        "item": { "@id": "https://abdallahsabri.com/projects/clincura#app" }
      },
      {
        "@type": "ListItem", "position": 2,
        "item": { "@id": "https://abdallahsabri.com/projects/level-feedback#app" }
      }
    ]
  }
}
```

### `src/app/[locale]/projects/clincura/page.tsx` — 3 schema blocks

**Block 1: BreadcrumbList**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://abdallahsabri.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Projects",
      "item": "https://abdallahsabri.com/projects"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Clincura",
      "item": "https://abdallahsabri.com/projects/clincura"
    }
  ]
}
```

**Block 2: Article** (the case study)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://abdallahsabri.com/projects/clincura#article",
  "headline": "Clincura — Building an AI-Powered Clinic Management SaaS",
  "description": "How I designed and built Clincura from zero: architecture decisions, tech stack, and outcomes.",
  "url": "https://abdallahsabri.com/projects/clincura",
  "datePublished": "2024-12-01",
  "author": { "@id": "https://abdallahsabri.com#person" },

  "image": "https://abdallahsabri.com/og-image-clincura.jpg",
  "mainEntity": { "@id": "https://abdallahsabri.com/projects/clincura#app" }
}
```

**Block 3: SoftwareApplication** (the product)
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://abdallahsabri.com/projects/clincura#app",
  "name": "Clincura",
  "description": "AI-powered clinic management SaaS for Clinic operations.",
  "url": "https://clincura.com",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "creator": { "@id": "https://abdallahsabri.com#person" },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free trial available"
  }
}
```

### `src/app/[locale]/projects/level-feedback/page.tsx` — 3 schema blocks

**Block 1: BreadcrumbList**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://abdallahsabri.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Projects",
      "item": "https://abdallahsabri.com/projects"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Level Feedback",
      "item": "https://abdallahsabri.com/projects/level-feedback"
    }
  ]
}
```

**Block 2: Article**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://abdallahsabri.com/projects/level-feedback#article",
  "headline": "Level Feedback — Building an Automated Reputation Management SaaS for SMBs",
  "description": "How I designed and built Level Feedback: Google Business Profile automation, AI-generated reviews, and event-driven architecture.",
  "url": "https://abdallahsabri.com/projects/level-feedback",
  "datePublished": "2026-05-01",
  "author": { "@id": "https://abdallahsabri.com#person" },

  "image": "https://abdallahsabri.com/og-image-level-feedback.jpg",
  "mainEntity": { "@id": "https://abdallahsabri.com/projects/level-feedback#app" }
}
```

**Block 3: SoftwareApplication**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://abdallahsabri.com/projects/level-feedback#app",
  "name": "Level Feedback",
  "description": "Automated Google Business Profile management and reputation monitoring for small businesses.",
  "url": "https://levelfeedback.com",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "creator": { "@id": "https://abdallahsabri.com#person" },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "Free trial available"
  }
}
```

### Implementation notes

- Each page injects its schema blocks via `<script type="application/ld+json" dangerouslySetInnerHTML=...>` — one `<script>` tag per block, following the pattern in `src/app/[locale]/about/page.tsx`
- `SoftwareApplication` `@id` values on `/projects` are forward-references — the full object is defined on each detail page; the CollectionPage just links by `@id`
- Product URLs: `clincura.com` and `levelfeedback.com` (confirmed)

---

## OG Metadata Per Page

| Page | OG `type` | Canonical |
|---|---|---|
| /projects | `website` | `https://abdallahsabri.com/projects` |
| /projects/clincura | `article` | `https://abdallahsabri.com/projects/clincura` |
| /projects/level-feedback | `article` | `https://abdallahsabri.com/projects/level-feedback` |

Each page: unique `title`, `description`, `openGraph.url`, `alternates.canonical`, hreflang `en`/`ar`, semantic `<h1>` (one per page).

---

## Verification
1. `npm run dev` — visit `/en/projects`, `/en/projects/clincura`, `/en/projects/level-feedback`
2. Switch to `/ar/...` routes — verify RTL and Arabic text
3. Check Navbar includes "Projects" link
4. Browser devtools `<head>`: correct title, OG tags, canonical, hreflang
5. `npm run build` — no type errors
