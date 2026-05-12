export const breadcrumbSchema = {
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Clincura",
      item: "https://abdallahsabri.com/projects/clincura",
    },
  ],
};

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://abdallahsabri.com/projects/clincura#article",
  headline: "Clincura — Building an AI-Powered Clinic Management SaaS",
  description:
    "Built from scratch: a Clinic SaaS with AI scheduling, RBAC, and event-driven architecture.",
  url: "https://abdallahsabri.com/projects/clincura",
  datePublished: "2024-12-01",
  author: { "@id": "https://abdallahsabri.com#person" },
  image: "https://abdallahsabri.com/og-image-clincura.jpg",
  mainEntity: { "@id": "https://abdallahsabri.com/projects/clincura#app" },
};

export const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://abdallahsabri.com/projects/clincura#app",
  name: "Clincura",
  description: "AI-Powered Clinic Management for Clinic Operations",
  url: "https://clincura.com",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  creator: { "@id": "https://abdallahsabri.com#person" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free trial available",
  },
};
