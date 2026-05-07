import type {Metadata} from "next";
import type {ReactNode} from "react";
import {Geist, Geist_Mono} from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from "next-intl";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({variable: "--font-geist-sans", subsets: ["latin"]});
const geistMono = Geist_Mono({variable: "--font-geist-mono", subsets: ["latin"]});

const EN_TITLE = "Abdallah Sabri — Senior Software Engineer & Founder";
const EN_DESC = "Senior Software Engineer for freelance & remote work. Expert in Next.js, Node.js, distributed systems & SEO. Scaled to 1M+ users.";
const AR_TITLE = "عبدالله صبري — مهندس برمجيات ومؤسس تقني";
const AR_DESC = "مهندس برمجيات أول للعمل الحر والعمل عن بُعد. متخصص في Next.js وNode.js والأنظمة الموزعة وSEO. أسّس منتجَين SaaS ووصل لمليون مستخدم.";

interface GenerateMetadataProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr ? AR_TITLE : EN_TITLE;
  const description = isAr ? AR_DESC : EN_DESC;
  const canonical = `https://abdallahsabri.com/${locale}`;

  return {
    title,
    description,
    keywords: isAr
      ? [
        "عبدالله صبري",
        "مهندس برمجيات أول",
        "مهندس مؤسس",
        "مهندس برمجيات للعمل الحر",
        "متاح للعمل عن بُعد",
        "SEO specialist",
      ]
      : [
        "Abdallah Sabri",
        "senior software engineer",
        "founding engineer",
        "freelance software engineer Next.js",
        "freelance software engineer Node.js",
        "team lead software engineer remote",
        "software engineer available for hire",
        "SEO specialist",
      ],
    authors: [{name: "Abdallah Sabri", url: "https://abdallahsabri.com"}],
    creator: "Abdallah Sabri",
    alternates: {
      canonical,
      languages: {
        en: "https://abdallahsabri.com/en",
        ar: "https://abdallahsabri.com/ar",
        "x-default": "https://abdallahsabri.com/en",
      },
    },
    openGraph: {
      type: "profile",
      title,
      description,
      url: canonical,
      siteName: "Abdallah Sabri",
      locale: isAr ? "ar_AR" : "en_US",
      alternateLocale: isAr ? "en_US" : "ar_AR",
      images: [
        {
          url: "https://abdallahsabri.com/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@abdallahsabri",
      images: [
        {
          url: "https://abdallahsabri.com/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
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
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
                                             children,
                                             params,
                                           }: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const {locale} = await params;

  if (!routing.locales.includes(locale as "en" | "ar")) {
    notFound();
  }

  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="scroll-smooth"
    >
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <JsonLd locale={locale}/>
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
