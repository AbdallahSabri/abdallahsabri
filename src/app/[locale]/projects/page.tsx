import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/sections/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import SectionLabel from "@/components/ui/SectionLabel";
import Footer from "@/components/sections/Footer";
import { Link } from "@/i18n/routing";

type ProjectItem = {
  title: string;
  tagline: string;
  period: string;
  description: string;
  tags: string[];
  featured?: boolean;
  href?: string;
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Projects");

  return {
    title: t("heading"),
    description: t("description"),
    openGraph: {
      title: t("heading"),
      description: t("description"),
      url: "https://abdallahsabri.com/projects",
      type: "website",
      images: [
        {
          url: "https://abdallahsabri.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "Projects — Abdallah Sabri",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("heading"),
      description: t("description"),
    },
    alternates: {
      canonical: "https://abdallahsabri.com/projects",
      languages: {
        en: "https://abdallahsabri.com/en/projects",
        ar: "https://abdallahsabri.com/ar/projects",
        "x-default": "https://abdallahsabri.com/en/projects",
      },
    },
  };
}

export default async function ProjectsPage() {
  const t = await getTranslations("Projects");

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://abdallahsabri.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://abdallahsabri.com/projects",
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://abdallahsabri.com/projects#collection",
    name: "Projects — Abdallah Sabri",
    description: "SaaS products designed, built, and shipped by Abdallah Sabri.",
    url: "https://abdallahsabri.com/projects",
    author: { "@id": "https://abdallahsabri.com#person" },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: { "@id": "https://abdallahsabri.com/projects/clincura#app" },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: { "@id": "https://abdallahsabri.com/projects/level-feedback#app" },
        },
      ],
    },
  };

  const items = t.raw("items") as ProjectItem[];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <Navbar />
      <main>
        <section id="projects" className="section-padding" aria-labelledby="projects-heading">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <SectionLabel>{t("label")}</SectionLabel>
              <h1 id="projects-heading" className="mt-4 text-4xl font-bold tracking-tight text-white">
                {t("heading")}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-zinc-400">
                {t("description")}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {items.map(({ title, tagline, period, description, tags, featured, href }) => (
                <Link
                  key={title}
                  href={href || "#"}
                  className={`group flex flex-col rounded-2xl border p-6 transition-colors ${
                    featured
                      ? "border-indigo-500/25 bg-indigo-500/5 hover:border-indigo-500/50"
                      : "border-white/5 bg-[#18181b] hover:border-white/10"
                  }`}
                >
                  <div className="mb-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          tag === "Founder" || tag === "مؤسّس"
                            ? "bg-purple-500/15 text-purple-300"
                            : "bg-white/5 text-zinc-400"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="mb-1 text-2xl font-semibold text-white">{title}</h2>

                  <p className="mb-4 text-sm font-medium text-indigo-400">{tagline}</p>

                  <p className="mb-4 text-xs text-zinc-600">{period}</p>

                  <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-400">
                    {description}
                  </p>

                  <span className="text-sm font-medium text-indigo-400 transition-colors group-hover:text-indigo-300">
                    {t("viewDetails")}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
