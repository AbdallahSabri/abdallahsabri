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
      name: "Level Feedback",
      item: "https://abdallahsabri.com/projects/level-feedback",
    },
  ],
};

export const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://abdallahsabri.com/projects/level-feedback#article",
  headline: "Level Feedback — Building an Automated Reputation Management SaaS for SMBs",
  description:
    "Automates Google Business Profile management and review monitoring for small businesses.",
  url: "https://abdallahsabri.com/projects/level-feedback",
  datePublished: "2026-05-01",
  author: { "@id": "https://abdallahsabri.com#person" },
  image: "https://abdallahsabri.com/og-image-level-feedback.jpg",
  mainEntity: { "@id": "https://abdallahsabri.com/projects/level-feedback#app" },
};

export const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://abdallahsabri.com/projects/level-feedback#app",
  name: "Level Feedback",
  description: "Automated Reputation Management for Small Businesses",
  url: "https://levelfeedback.com",
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
