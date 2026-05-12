# Plan: Clincura Case Study — AEO/GEO Content Rewrite

**Date:** 2026-05-12  
**Branch:** feature/aeo

## Context

The existing `/projects/clincura` page has shallow placeholder content: one-line feature descriptions, stub metrics, and incomplete stack groups. The task replaces it with a full AEO/GEO-optimised case study — answer-first hero, richer feature writeups, architecture narrative with WHY-focused decision bullets, proof metrics, a pilot CTA, and related internal links.

The `ProjectDetail` shared component is extended with optional props so Level Feedback is unaffected.

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/sections/ProjectDetail.tsx` | Add 6 optional props + render new sections |
| `messages/en.json` | Replace Clincura namespace with full new content |
| `messages/ar.json` | Replace Clincura namespace with Arabic translations |
| `src/app/[locale]/projects/clincura/page.tsx` | Extend `ClincuraData` interface + pass new props |

---

## Step 1 — Extend `ProjectDetail` with optional props

Add to `ProjectDetailProps` (all optional — Level Feedback passes none of these):

```typescript
intro?: string;
statusBadge?: string;
architecturePhilosophy?: string;
architectureDecisions?: Array<{ title: string; body: string }>;
ctaBody?: string;
related?: Array<{ label: string; href: string }>;
```

New render logic (all guarded with `&& prop`):

- **Hero** — after the tagline `<p>`, render `intro` as `<p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-300">` if present
- **Status badge** — new `<section>` immediately after hero, if `statusBadge`: small band with pill badge text
- **Architecture decisions** — inside the existing Stack `<section>`, after the badge groups grid, if `architecturePhilosophy` + `architectureDecisions`: render philosophy sentence then `<ul>` of `<strong>title</strong> — body` bullets
- **CTA body** — inside the CTA `<section>`, before the `<a>` button, if `ctaBody`: `<p className="mb-8 max-w-xl mx-auto text-zinc-400">`
- **Related links** — new `<section>` at the bottom, if `related`: heading "Related" + `<ul>` of `<Link href={r.href}>{r.label}</Link>`

---

## Step 2 — English content (`messages/en.json` — Clincura namespace)

Full replacement:

```json
{
  "label": "Healthcare SaaS",
  "heading": "Clincura",
  "tagline": "Clinic management that gets out of the way",
  "period": "Dec 2024 – Present",
  "tags": ["Founder", "SaaS", "Healthcare Tech"],
  "ogTitle": "Clincura — AI-Powered Clinic Management SaaS | Abdallah Sabri",
  "ogDescription": "Clincura is an AI-powered clinic management SaaS for independent doctors and small-to-medium clinics — unified patient records, diagnostic workflows, and AI-generated visit summaries.",
  "ogImageAlt": "Clincura — clinic management SaaS by Abdallah Sabri",
  "twitterTitle": "Clincura — AI Clinic Management SaaS",
  "twitterDescription": "Unified patient records, diagnostic workflows, and AI visit summaries for independent clinics.",
  "intro": "Clincura is an AI-powered clinic management SaaS for independent doctors and small-to-medium clinics. It brings patient history, appointments, diagnostics, and clinical documentation into a single view so providers spend their time on patients, not software. Most clinic tools are either too thin for a growing practice or too complex for a five-person team — Clincura is built for exactly that gap.",
  "statusBadge": "MVP — accepting pilot clinic applications",
  "problem": {
    "heading": "The Problem",
    "body": "Independent clinics and small practices run on paper systems or a patchwork of disconnected tools. There is no unified patient record, no workflow for tracking diagnostics end-to-end, and no clinical documentation support. The result is administrative drag that takes time away from patient care."
  },
  "features": {
    "heading": "What Clincura does",
    "items": [
      {
        "title": "Unified Patient Management",
        "description": "Every patient's appointments, diagnoses, vital signs, and clinical history are accessible from one screen. There is no switching between systems or searching through paper files. The full record is there from the moment a patient checks in."
      },
      {
        "title": "Integrated Diagnostic Workflows",
        "description": "Doctors can place lab and imaging requests directly inside a visit, upload results, and track status without leaving the patient view. The request-to-result workflow is captured in the system, not on a notepad."
      },
      {
        "title": "AI-Powered Visit Summaries",
        "description": "After each consultation, Clincura generates a clinical documentation draft using OpenAI. The doctor reviews and confirms rather than typing from scratch. The result is faster notes and a consistent documentation standard across the clinic."
      },
      {
        "title": "Role-Based Access and Clinic Controls",
        "description": "Each clinic gets granular permission controls and per-feature toggles. A receptionist can manage appointments without accessing clinical records. A clinic admin can configure features without touching another clinic's data."
      }
    ]
  },
  "stack": {
    "heading": "How it's built",
    "groups": [
      { "category": "Backend", "items": ["NestJS", "TypeScript", "Node.js"] },
      { "category": "Database", "items": ["PostgreSQL", "TypeORM"] },
      { "category": "Auth", "items": ["JWT", "Passport.js"] },
      { "category": "File Storage", "items": ["AWS S3"] },
      { "category": "Async", "items": ["RabbitMQ"] },
      { "category": "AI", "items": ["OpenAI API"] },
      { "category": "Standards", "items": ["WHO ICD-10 API"] },
      { "category": "Deployment", "items": ["Docker", "Docker Compose"] }
    ]
  },
  "architecturePhilosophy": "Built as a multi-tenant SaaS with strict data isolation and production-grade security designed into the core from day one.",
  "architectureDecisions": [
    {
      "title": "Multi-tenancy with strict data isolation",
      "body": "Each clinic operates in a fully isolated data context enforced at the query level. A bug in one tenant's data path cannot surface another tenant's records. This was a hard requirement from day one, not a retrofit."
    },
    {
      "title": "RabbitMQ for async processing",
      "body": "Notifications and audio conversion run asynchronously via RabbitMQ, keeping API response times predictable regardless of background task load. Without a queue, long-running jobs would block the request thread or hit timeout failures."
    },
    {
      "title": "Pre-signed S3 URLs for file access",
      "body": "Patient documents go directly from S3 to the client — the application server never handles the file bytes. This keeps medical files off application logs and removes the server as a bottleneck for large uploads."
    },
    {
      "title": "WHO ICD-10 for diagnosis codes",
      "body": "Diagnosis codes come from the WHO ICD-10 API rather than a local lookup table. A local table would drift and require ongoing maintenance; the external API guarantees clinical accuracy without the overhead."
    }
  ],
  "impact": {
    "heading": "Built with production constraints in mind",
    "metrics": [
      { "value": "Multi-tenant", "label": "Data isolated per clinic at the query level — cross-tenant access is impossible by design" },
      { "value": "Secure by default", "label": "JWT refresh tokens, Bcrypt, Helmet, rate limiting, and CORS configured before the first feature shipped" },
      { "value": "AI in workflow", "label": "OpenAI generates structured documentation that writes directly into the patient visit record" },
      { "value": "ICD-10 compliant", "label": "Diagnosis codes follow the WHO international standard for clinical accuracy and interoperability" }
    ]
  },
  "ctaBody": "Clincura is in active development and looking for pilot clinics to validate the core workflow. If you run an independent practice or a small clinic and would like to be an early user, I want to hear from you.",
  "cta": {
    "visitLabel": "Contact for pilot access",
    "backLabel": "← All Projects"
  },
  "related": [
    { "label": "About Abdallah Sabri", "href": "/about" },
    { "label": "Level Feedback — SMB reputation management SaaS", "href": "/projects/level-feedback" },
    { "label": "From Monolith to Microservices", "href": "/blog/from-monolith-to-microservices" }
  ]
}
```

---

## Step 3 — Arabic content (`messages/ar.json` — Clincura namespace)

Full replacement with Arabic translations. Key new fields:

- `tagline`: "إدارة عيادات تبقى بعيدة عن طريقك"
- `intro`: "كلينكيورا منصة SaaS مدعومة بالذكاء الاصطناعي لإدارة العيادات، مصممة للأطباء المستقلين والعيادات الصغيرة والمتوسطة. توحّد سجلات المرضى والمواعيد والتشخيصات والتوثيق الطبي في شاشة واحدة، حتى يتفرغ مقدمو الرعاية لمرضاهم لا للبرامج. معظم أدوات إدارة العيادات إما شحيحة المميزات أو بالغة التعقيد لفريق صغير — كلينكيورا بُنيت لهذه الفجوة تحديدًا."
- `statusBadge`: "نسخة تجريبية — نقبل طلبات انضمام العيادات الرائدة"
- `features.heading`: "ما تفعله كلينكيورا"
- `stack.heading`: "كيف بُنيت"
- `architecturePhilosophy`: "بُنيت كمنصة SaaS متعددة المستأجرين مع عزل صارم للبيانات وأمان على مستوى الإنتاج مدمج في الأساس منذ اليوم الأول."
- `architectureDecisions`: [4 translated decision bullets]
- `impact.heading`: "مبنية بمعايير الإنتاج من اليوم الأول"
- `ctaBody`: "كلينكيورا في مرحلة التطوير النشط وتبحث عن عيادات رائدة للتحقق من سير العمل الأساسي. إن كنت تدير عيادة مستقلة أو عيادة صغيرة وتريد أن تكون من أوائل المستخدمين، أودّ أن أسمع منك."
- `cta.visitLabel`: "تواصل للانضمام كعيادة رائدة"
- `related`: [3 links with Arabic labels, same hrefs]

---

## Step 4 — Update `page.tsx`

Extend `ClincuraData` interface:
```typescript
intro: string;
statusBadge: string;
architecturePhilosophy: string;
architectureDecisions: Array<{ title: string; body: string }>;
ctaBody: string;
related: Array<{ label: string; href: string }>;
```

Add to `data` object:
```typescript
intro: t("intro"),
statusBadge: t("statusBadge"),
architecturePhilosophy: t("architecturePhilosophy"),
architectureDecisions: t.raw("architectureDecisions") as ClincuraData["architectureDecisions"],
ctaBody: t("ctaBody"),
related: t.raw("related") as ClincuraData["related"],
```

Pass to `<ProjectDetail>`:
```tsx
intro={data.intro}
statusBadge={data.statusBadge}
architecturePhilosophy={data.architecturePhilosophy}
architectureDecisions={data.architectureDecisions}
ctaBody={data.ctaBody}
related={data.related}
```

Change CTA href: `"mailto:abdallah.silwad@gmail.com"` (replaces `https://clincura.com`).

---

## Verification

1. `npm run dev` → `/en/projects/clincura`
2. Confirm 7 sections render: hero + intro, status badge, problem, features (4), stack + arch decisions, proof metrics (4), CTA with body + button, related links
3. Switch to `/ar/projects/clincura` — Arabic content + RTL layout correct
4. `npm run build` — TypeScript passes (no interface mismatches)
5. `npm run lint` — no ESLint errors
