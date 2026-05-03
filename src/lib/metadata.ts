import type { Metadata } from "next";

export const siteConfig = {
  name: "Abdallah Sabri",
  title: "Abdallah Sabri — Full-Stack Engineer",
  description:
    "Full-stack developer specializing in modern web applications. Building fast, scalable, and beautiful digital experiences.",
  url: "https://abdallahsabri.com",
  ogImage: "https://abdallahsabri.com/og-image.jpg",
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
    "full-stack developer",
    "web developer",
    "React",
    "Next.js",
    "TypeScript",
    "software engineer",
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
    images: [siteConfig.ogImage],
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
};
