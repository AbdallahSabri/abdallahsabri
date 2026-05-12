# Plan: Update Level Feedback Case Study Page Content

## Context

The Level Feedback project page at `/projects/level-feedback` exists but its translation content is outdated — it references Twilio, Stripe, and RabbitMQ which are no longer part of the product. The page component also doesn't use the optional `ProjectDetail` props (`intro`, `statusBadge`, `architecturePhilosophy`, `architectureDecisions`, `ctaBody`, `related`) that the component already supports. The user provided final copy for all sections and wants it implemented.

## Files to Modify

| File | Change |
|---|---|
| `src/app/[locale]/projects/level-feedback/page.tsx` | Extend interface + pass new optional props to `ProjectDetail` |
| `messages/en.json` | Replace `LevelFeedback` namespace (lines 731–833) with new content |
| `messages/ar.json` | Replace `LevelFeedback` namespace (lines 731–833) with Arabic translation |

`seo.ts` — no changes needed, already correct.

---

## Step 1 — Update `page.tsx`

**File:** `src/app/[locale]/projects/level-feedback/page.tsx`

Add two missing interfaces:
```ts
interface ArchDecision { title: string; body: string; }
interface RelatedLink { label: string; href: string; }
```

Extend `LevelFeedbackData` with:
```ts
intro: string;
statusBadge: string;
architecturePhilosophy: string;
architectureDecisions: ArchDecision[];
ctaBody: string;
related: RelatedLink[];
```

Update the `data` object to read new fields:
```ts
intro: t("intro"),
statusBadge: t("statusBadge"),
architecturePhilosophy: t("architecturePhilosophy"),
architectureDecisions: t.raw("architectureDecisions") as ArchDecision[],
ctaBody: t("ctaBody"),
related: t.raw("related") as RelatedLink[],
```

Update `ProjectDetail` props call to pass new fields + change hardcoded CTA href:
```tsx
<ProjectDetail
  ...
  intro={data.intro}
  statusBadge={data.statusBadge}
  architecturePhilosophy={data.architecturePhilosophy}
  architectureDecisions={data.architectureDecisions}
  ctaBody={data.ctaBody}
  related={data.related}
  cta={{ visitLabel: data.cta.visitLabel, href: "mailto:abdallah.silwad@gmail.com" }}
/>
```

---

## Step 2 — Replace `messages/en.json` LevelFeedback section

Replace the entire `LevelFeedback` key (lines 731–833) with:

```json
"LevelFeedback": {
  "label": "SMB SaaS",
  "heading": "Level Feedback",
  "tagline": "Automated review replies for restaurants and auto shops — no manual work required.",
  "period": "May 2026 – Present",
  "tags": ["Founder", "SaaS", "SMB"],
  "ogTitle": "Level Feedback — Automated Reputation Management | Abdallah Sabri",
  "ogDescription": "Level Feedback automates Google review responses for restaurants and automotive businesses — AI-generated replies, one-click publishing, local SEO impact.",
  "twitterTitle": "Level Feedback — Automated Reputation Management",
  "twitterDescription": "AI-generated review replies for restaurants and auto shops. One click to publish. Built for US small businesses.",
  "intro": "Level Feedback is a reputation management SaaS that generates professional, contextual responses to customer reviews and publishes them directly to Google — so business owners spend minutes, not hours, managing their online presence. It is built specifically for small and medium-sized businesses in the food & drinks and automotive sectors across the USA.",
  "statusBadge": "In development — launching June 2026",
  "problem": {
    "heading": "The Problem",
    "body": "Restaurant and automotive business owners lose visibility every day because they cannot respond to reviews consistently. Manual review management takes time owners do not have. Unanswered reviews damage local search rankings and erode trust with potential customers."
  },
  "features": {
    "heading": "What Level Feedback does",
    "items": [
      {
        "title": "Automated Professional Replies",
        "description": "Level Feedback reads each review and generates a contextual, tone-aware response using the Claude API. One click submits the reply. Owners get professional responses without writing a single word themselves."
      },
      {
        "title": "Google Business Profile Integration",
        "description": "Reviews from your Google Business Profile appear directly inside the Level Feedback dashboard. You read, edit if needed, and submit — without opening Google, switching tabs, or managing logins separately."
      },
      {
        "title": "Local SEO Improvement",
        "description": "Responding to reviews is a confirmed Google ranking signal for local search. Every published reply through Level Feedback contributes to the activity signals Google uses to rank businesses in local results."
      },
      {
        "title": "Review Management Dashboard",
        "description": "All reviews are surfaced in one place, filterable by rating and reply status. Owners can see at a glance what needs attention, what has been replied to, and how their overall reputation looks."
      },
      {
        "title": "Token-Secured OAuth Flow",
        "description": "Connecting a Google account is handled through a standard OAuth 2.0 flow. All credentials are stored with AES-256 encryption and refresh automatically, so the connection stays active without requiring owners to re-authenticate."
      }
    ]
  },
  "stack": {
    "heading": "How it's built",
    "groups": [
      { "category": "Frontend", "items": ["Next.js", "React", "TypeScript"] },
      { "category": "Backend", "items": ["Next.js API Routes", "Vercel"] },
      { "category": "Database & Auth", "items": ["Firebase Firestore", "Firebase Auth", "Google OAuth 2.0"] },
      { "category": "AI & Security", "items": ["Claude API (Anthropic)", "AES-256 encryption"] }
    ]
  },
  "architecturePhilosophy": "The architecture minimizes operational overhead — serverless where possible, managed services for auth and data, encryption handled at the storage layer.",
  "architectureDecisions": [
    {
      "title": "Vercel serverless over a dedicated backend",
      "body": "The API surface is modest and event-driven. Serverless routes on Vercel eliminate infrastructure management without sacrificing response times for the request patterns this app generates."
    },
    {
      "title": "Firebase Firestore over a relational database",
      "body": "Review data arrives asynchronously and read patterns are dashboard-driven, not relational. Firestore's real-time sync fits that model better than polling a SQL database for new records."
    },
    {
      "title": "Claude API for response generation",
      "body": "Claude handles nuanced tone matching well. A one-star complaint and a four-star compliment need meaningfully different responses. Generic templates do not hold up at scale."
    },
    {
      "title": "AES-256 encryption for OAuth tokens at rest",
      "body": "Google OAuth credentials give the app the ability to post on behalf of a business. Storing tokens encrypted means a database breach does not automatically expose Google account access."
    }
  ],
  "impact": {
    "heading": "Built for real business impact",
    "metrics": [
      { "value": "1-Click", "label": "AI-generated replies per review, not templates" },
      { "value": "Google-native", "label": "Replies published directly through the API" },
      { "value": "AES-256", "label": "OAuth credentials encrypted before storage" },
      { "value": "Local SEO", "label": "Every reply builds compounding ranking signals" }
    ]
  },
  "ctaBody": "Level Feedback launches in June 2026. If you run a restaurant or automotive business and want to stop losing time to manual review management, reach out before launch — early feedback shapes the product before it goes live.",
  "cta": {
    "visitLabel": "Get Early Access",
    "backLabel": "← All Projects"
  },
  "related": [
    { "label": "About Abdallah Sabri — background, stack, and what I build", "href": "/about" },
    { "label": "Clincura — clinic management platform", "href": "/projects/clincura" },
    { "label": "From monolith to microservices", "href": "/blog/from-monolith-to-microservices" }
  ]
}
```

Note: `impact.metrics` grows from 3 to 4 items. `ProjectDetail` renders metrics in a `md:grid-cols-3` grid — 4 items wraps to 3+1, which is acceptable without any component changes.

---

## Step 3 — Replace `messages/ar.json` LevelFeedback section

Same key structure as English. Technical terms (Level Feedback, Next.js, Claude API, Firebase, AES-256, OAuth 2.0, Google) stay in English. Translated values:

- `label`: "منصة أعمال صغيرة"
- `tagline`: "ردود تلقائية على المراجعات للمطاعم وورش السيارات — بلا جهد يدوي."
- `statusBadge`: "قيد التطوير — الإطلاق في يونيو 2026"
- `problem.heading`: "المشكلة"
- `problem.body`: translated from English faithfully
- `features.heading`: "ما الذي يقدمه Level Feedback"
- 5 feature titles + descriptions: fully translated
- `stack.heading`: "كيف تم بناؤه"
- stack category names: "الواجهة الأمامية" / "الخادم" / "قاعدة البيانات والمصادقة" / "الذكاء الاصطناعي والأمان"
- `architecturePhilosophy`: translated
- 4 `architectureDecisions`: titles + bodies translated
- `impact.heading`: "مبني لأثر تجاري حقيقي"
- 4 metrics: values stay in English (1-Click, Google-native, AES-256, Local SEO); labels translated
- `ctaBody`: translated
- `cta.visitLabel`: "الحصول على وصول مبكر"
- `cta.backLabel`: "← جميع المشاريع"
- `related`: 3 links — labels translated, `href` values unchanged

---

## Verification

1. `npm run build` — no TypeScript errors
2. `npm run lint` — no lint errors
3. `http://localhost:3000/en/projects/level-feedback` — confirm all 7 sections render:
   - Hero with `intro` paragraph visible
   - Status badge: "In development — launching June 2026"
   - Problem section with new copy
   - 5 feature cards in grid
   - Tech stack grouped correctly + 4 architecture decision bullets
   - 4 impact metric tiles
   - CTA section with `ctaBody` text above a "Get Early Access" button linking to `mailto:abdallah.silwad@gmail.com`
   - Related links section with 3 links
4. `http://localhost:3000/ar/projects/level-feedback` — RTL layout, Arabic copy renders correctly
