# src/components — UI Components

Two categories: portfolio sections (full-page) and UI primitives (reusable).

## Organization

```
components/
├── sections/          # Full-page portfolio sections
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── SMBServices.tsx (commented out)
│   ├── Work.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Volunteering.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── ui/                # Reusable primitives
│   ├── SectionLabel.tsx
│   ├── ScrollToTop.tsx
│   └── icons.tsx
└── JsonLd.tsx        # Schema.org structured data
```

## Portfolio Section Render Order

The home page (`src/app/[locale]/page.tsx`) renders sections in this order:
1. **Navbar** — Fixed top navigation, locale switcher, mobile menu
2. **Hero** — Name, badge, stat counters (years, SaaS products, remote projects)
3. **About** — About section
4. **Services** — Services offered
5. **Work** — Portfolio / case studies
6. **Experience** — Work history / timeline
7. **Skills** — Tech stack / skills showcase
8. **Volunteering** — Volunteering activities
9. **Contact** — Contact form or links
10. **Footer** — Site footer
11. **ScrollToTop** — Scroll-to-top button

## Key Components

### **Navbar**
- Client component (`"use client"`)
- Fixed positioning, sticky to viewport
- Reads translations via `useTranslations()`
- Locale switcher (`en` ↔ `ar`)
- Mobile hamburger menu that locks body scroll on open

### **JsonLd**
- Root-level component injected by `[locale]/layout.tsx`
- Injects two `<script type="application/ld+json">` blocks: `Person` + `ProfilePage` schemas
- **Production-only** — does not render in development
- Locale-aware (different copy for English and Arabic)

### **UI Primitives**

#### `SectionLabel`
- Small pill badge (indigo, uppercase tracking)
- Used as a section heading label
- Props: `children`

#### `ScrollToTop`
- Scroll-to-top button utility
- Appears when page scrolls down

#### `icons.tsx`
- SVG icon definitions and wrappers

## Component Patterns

- **Sections:** Mostly server components; import `getTranslations()` from `next-intl/server` for translations
- **Navbar:** Client component; imports `useTranslations()` from `next-intl` for translations, locale switching, and interactive behavior
- **No hardcoding:** Use `getTranslations()` / `useTranslations()` for all user-facing strings; never hardcode copy
