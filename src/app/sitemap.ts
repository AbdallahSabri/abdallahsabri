import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://abdallahsabri.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const posts = getAllPosts();

  return [
    {
      url: `${BASE_URL}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar`,
        },
      },
    },
    {
      url: `${BASE_URL}/ar`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: `${BASE_URL}/en`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/about`,
        },
      },
    },
    {
      url: `${BASE_URL}/ar/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/about`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/projects`,
        },
      },
    },
    {
      url: `${BASE_URL}/ar/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/projects`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/projects/clincura`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/projects/clincura`,
        },
      },
    },
    {
      url: `${BASE_URL}/ar/projects/clincura`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/projects/clincura`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/projects/level-feedback`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          ar: `${BASE_URL}/ar/projects/level-feedback`,
        },
      },
    },
    {
      url: `${BASE_URL}/ar/projects/level-feedback`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/projects/level-feedback`,
        },
      },
    },
    {
      url: `${BASE_URL}/en/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: { ar: `${BASE_URL}/ar/blog` } },
    },
    {
      url: `${BASE_URL}/ar/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: { en: `${BASE_URL}/en/blog` } },
    },
    ...posts.flatMap((post) => [
      {
        url: `${BASE_URL}/en/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: { languages: { ar: `${BASE_URL}/ar/blog/${post.slug}` } },
      },
      {
        url: `${BASE_URL}/ar/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: { languages: { en: `${BASE_URL}/en/blog/${post.slug}` } },
      },
    ]),
  ];
}
