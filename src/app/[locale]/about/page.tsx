import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/sections/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Experience from "@/components/sections/Experience";
import Image from "next/image";
import { getPersonSchema } from "./seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations("About");

  return {
    title: t("label"),
    description: t("headingPart1"),
    alternates: {
      canonical: `https://abdallahsabri.com/${locale}/about`,
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: `https://abdallahsabri.com/${locale}/about`,
      type: "profile",
      images: [
        {
          url: "https://abdallahsabri.com/og-image-about.jpg",
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
  };
}

export default async function AboutPage() {
  const t = await getTranslations("About");

  const personSchema = getPersonSchema(t);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <Navbar />
      <main id="main-content">
        <About />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "3rem 1rem",
          }}
        >
          <Image
            src="https://d3l0mjyonoq4zj.cloudfront.net/abdallah00008.JPG"
            alt="Profile"
            width={500}
            height={600}
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              objectFit: "cover",
            }}
          />
        </div>

        <Experience />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
