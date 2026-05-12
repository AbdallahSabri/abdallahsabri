import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/sections/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
import Experience from "@/components/sections/Experience";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("About");

  return {
    title: t("label"),
    description: t("headingPart1"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://abdallahsabri.com/about",
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

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://abdallahsabri.com/about#person",
    name: t("schemaName"),
    jobTitle: t("schemaJobTitle"),
    url: "https://abdallahsabri.com",
    image: {
      "@type": "ImageObject",
      url: "https://abdallahsabri.com/profile.jpg",
      width: 400,
      height: 400,
    },
    description: t("schemaDescription"),
    sameAs: [
      "https://linkedin.com/in/abdallah-sabri",
      "https://github.com/abdallah-sabri",
    ],
    worksFor: {
      "@type": "Organization",
      name: t("schemaOrganization"),
    },
    knowsAbout: t("schemaSkills", { returnObjects: true }),
    alumniOf: {
      "@type": "EducationalOrganization",
      name: t("schemaUniversity"),
      url: "https://www.aqou.edu.ps/",
    },
    award: t("schemaAwards", { returnObjects: true }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <Navbar />
      <main>
        <About />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "3rem 1rem",
          }}
        >
          <Image
            src="https://s3.eu-central-1.amazonaws.com/abdallahsabri.com/abdallah00008.JPG"
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
