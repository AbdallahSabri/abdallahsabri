import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import SectionLabel from "@/components/ui/SectionLabel";
import { Link } from "@/i18n/routing";
import { getAllPosts } from "@/lib/blog";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Blog");

  return {
    title: t("heading"),
    description: t("description"),
    openGraph: {
      title: t("heading"),
      description: t("description"),
      url: "https://abdallahsabri.com/blog",
      type: "website",
      images: [
        {
          url: "https://abdallahsabri.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "Blog — Abdallah Sabri",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("heading"),
      description: t("description"),
    },
    alternates: {
      canonical: "https://abdallahsabri.com/blog",
      languages: {
        en: "https://abdallahsabri.com/en/blog",
        ar: "https://abdallahsabri.com/ar/blog",
        "x-default": "https://abdallahsabri.com/en/blog",
      },
    },
  };
}

export default async function BlogPage() {
  const t = await getTranslations("Blog");
  const posts = getAllPosts();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://abdallahsabri.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://abdallahsabri.com/blog" },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://abdallahsabri.com/blog#collection",
    name: "Blog — Abdallah Sabri",
    description: t("description"),
    url: "https://abdallahsabri.com/blog",
    author: { "@id": "https://abdallahsabri.com#person" },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@id": `https://abdallahsabri.com/blog/${post.slug}#article` },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <Navbar />
      <main>
        <section id="blog" className="section-padding" aria-labelledby="blog-heading">
          <div className="mx-auto max-w-3xl">
            <div className="mb-16 text-center">
              <SectionLabel>{t("label")}</SectionLabel>
              <h1
                id="blog-heading"
                className="mt-4 text-4xl font-bold tracking-tight text-white"
              >
                {t("heading")}
              </h1>
              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-zinc-400">
                {t("description")}
              </p>
            </div>

            {posts.length === 0 ? (
              <p className="text-center text-zinc-500">{t("empty")}</p>
            ) : (
              <div className="flex flex-col gap-4">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col rounded-2xl border border-white/5 bg-[#18181b] p-6 transition-colors hover:border-white/10"
                  >
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs font-medium text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-indigo-300">
                      {post.title}
                    </h2>

                    <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-zinc-600">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <span className="text-sm font-medium text-indigo-400 transition-colors group-hover:text-indigo-300">
                        {t("readArticle")} →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
