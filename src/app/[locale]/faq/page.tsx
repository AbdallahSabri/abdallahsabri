import { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { defaultMetadata } from "@/lib/metadata";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import FAQ from "@/components/sections/FAQ";
import { getFAQSchema, breadcrumbSchema } from "./seo";
import enItems from "../../../../content/faq/en.json";
import arItems from "../../../../content/faq/ar.json";

const itemsMap = { en: enItems, ar: arItems };

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("FAQ");

  return {
    ...defaultMetadata,
    title: t("heading"),
    description: t("description"),
    openGraph: {
      ...defaultMetadata.openGraph,
      title: t("heading"),
      description: t("description"),
      url: "https://abdallahsabri.com/faq",
    },
    alternates: {
      canonical: "https://abdallahsabri.com/en/faq",
      languages: {
        "en-US": "https://abdallahsabri.com/en/faq",
        "ar-SA": "https://abdallahsabri.com/ar/faq",
        "x-default": "https://abdallahsabri.com/en/faq",
      },
    },
  };
}

export default async function FAQPage() {
  const locale = await getLocale();
  const items = itemsMap[locale as "en" | "ar"] ?? enItems;
  const schema = getFAQSchema(items);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main>
        <FAQ items={items} />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
