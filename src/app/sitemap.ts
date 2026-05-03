import type { MetadataRoute } from "next";

const BASE_URL = "https://abdallahsabri.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const alternates = {
    languages: {
      en: `${BASE_URL}/en`,
      ar: `${BASE_URL}/ar`,
    },
  };

  return [
    {
      url: `${BASE_URL}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates,
    },
    {
      url: `${BASE_URL}/ar`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates,
    },
  ];
}
