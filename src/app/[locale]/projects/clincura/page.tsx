import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/sections/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Footer from "@/components/sections/Footer";
import ProjectDetail from "@/components/sections/ProjectDetail";
import { breadcrumbSchema, articleSchema, appSchema } from "./seo";

interface Feature {
  title: string;
  description: string;
}

interface TechGroup {
  category: string;
  items: string[];
}

interface Metric {
  value: string;
  label: string;
}

interface ArchDecision {
  title: string;
  body: string;
}

interface RelatedLink {
  label: string;
  href: string;
}

interface ClincuraData {
  label: string;
  heading: string;
  tagline: string;
  period: string;
  tags: string[];
  ogTitle: string;
  ogDescription: string;
  ogImageAlt: string;
  twitterTitle: string;
  twitterDescription: string;
  intro: string;
  statusBadge: string;
  problem: { heading: string; body: string };
  features: { heading: string; items: Feature[] };
  stack: { heading: string; groups: TechGroup[] };
  architecturePhilosophy: string;
  architectureDecisions: ArchDecision[];
  impact: { heading: string; metrics: Metric[] };
  ctaBody: string;
  cta: { visitLabel: string; backLabel: string };
  related: RelatedLink[];
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Clincura");

  return {
    title: t("heading"),
    description: t("ogDescription"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://abdallahsabri.com/projects/clincura",
      type: "article",
      images: [
        {
          url: "https://abdallahsabri.com/og-image-clincura.jpg",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
    },
    alternates: {
      canonical: "https://abdallahsabri.com/projects/clincura",
      languages: {
        en: "https://abdallahsabri.com/en/projects/clincura",
        ar: "https://abdallahsabri.com/ar/projects/clincura",
        "x-default": "https://abdallahsabri.com/en/projects/clincura",
      },
    },
  };
}

export default async function ClincuraPage() {
  const t = await getTranslations("Clincura");

  const data: ClincuraData = {
    label: t("label"),
    heading: t("heading"),
    tagline: t("tagline"),
    period: t("period"),
    tags: t.raw("tags") as string[],
    ogTitle: t("ogTitle"),
    ogDescription: t("ogDescription"),
    ogImageAlt: t("ogImageAlt"),
    twitterTitle: t("twitterTitle"),
    twitterDescription: t("twitterDescription"),
    intro: t("intro"),
    statusBadge: t("statusBadge"),
    problem: t.raw("problem") as ClincuraData["problem"],
    features: t.raw("features") as ClincuraData["features"],
    stack: t.raw("stack") as ClincuraData["stack"],
    architecturePhilosophy: t("architecturePhilosophy"),
    architectureDecisions: t.raw("architectureDecisions") as ClincuraData["architectureDecisions"],
    impact: t.raw("impact") as ClincuraData["impact"],
    ctaBody: t("ctaBody"),
    cta: t.raw("cta") as ClincuraData["cta"],
    related: t.raw("related") as ClincuraData["related"],
  };


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />

      <Navbar />
      <main>
        <ProjectDetail
          label={data.label}
          name={data.heading}
          tagline={data.tagline}
          period={data.period}
          tags={data.tags}
          backLabel={data.cta.backLabel}
          intro={data.intro}
          statusBadge={data.statusBadge}
          problem={data.problem}
          features={data.features}
          stack={data.stack}
          architecturePhilosophy={data.architecturePhilosophy}
          architectureDecisions={data.architectureDecisions}
          impact={data.impact}
          ctaBody={data.ctaBody}
          cta={{ visitLabel: data.cta.visitLabel, href: "mailto:abdallah.silwad@gmail.com" }}
          related={data.related}
        />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
