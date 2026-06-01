import type { Metadata } from "next";

export const defaultOgImage = "og-image.png";
export const defaultFullOgImage = `https://abdallahsabri.com/${defaultOgImage}`;

export const siteConfig = {
  name: "Abdallah Sabri",
  title: "Abdallah Sabri — Senior Software Engineer & Founding Engineer",
  description:
    "Full-stack developer specializing in modern web applications. Building fast, scalable, and beautiful digital experiences.",
  url: "https://abdallahsabri.com",
  ogImage: defaultFullOgImage,
  twitterHandle: "@abdallahsabri",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Abdallah Sabri",
    "senior software engineer",
    "founding engineer",
    "freelance software engineer Next.js",
    "freelance software engineer Node.js",
    "team lead software engineer remote",
    "software engineer available for hire",
    "SEO specialist",
    "full-stack developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Web Developer",
    "Software Engineer",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    languages: {
      'en-US': 'https://abdallahsabri.com/en',
      'ar-SA': 'https://abdallahsabri.com/ar',
      'x-default': 'https://abdallahsabri.com/en',
    },
  },
};
