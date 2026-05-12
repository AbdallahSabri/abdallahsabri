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
  problem: { heading: string; body: string };
  features: { heading: string; items: Feature[] };
  stack: { heading: string; groups: TechGroup[] };
  impact: { heading: string; metrics: Metric[] };
  cta: { visitLabel: string; backLabel: string };
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
    problem: t.raw("problem") as ClincuraData["problem"],
    features: t.raw("features") as ClincuraData["features"],
    stack: t.raw("stack") as ClincuraData["stack"],
    impact: t.raw("impact") as ClincuraData["impact"],
    cta: t.raw("cta") as ClincuraData["cta"],
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
          problem={data.problem}
          features={data.features}
          stack={data.stack}
          impact={data.impact}
          cta={{ visitLabel: data.cta.visitLabel, href: "https://clincura.com" }}
        />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
