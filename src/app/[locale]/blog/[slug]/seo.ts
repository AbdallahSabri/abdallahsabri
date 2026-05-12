import type { BlogPostMeta } from "@/lib/blog";

const BASE = "https://abdallahsabri.com";

export function getBlogSchemas(post: BlogPostMeta) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${BASE}/blog/${post.slug}`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${BASE}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    url: `${BASE}/blog/${post.slug}`,
    datePublished: new Date(post.date).toISOString(),
    keywords: post.tags.join(", "),
    author: { "@id": `${BASE}#person` },
    image: post.image ?? `${BASE}/og-image.png`,
  };

  return { breadcrumbSchema, articleSchema };
}
