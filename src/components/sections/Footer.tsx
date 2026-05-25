import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/lib/metadata";
import { WhatsAppIcon, LinkedInIcon, InstagramIcon } from "@/components/ui/icons";
import type { ComponentType } from "react";
import {Link} from "@/i18n/routing";

const socialHrefs = {
  whatsapp: "https://wa.me/970592090780",
  linkedin: "https://www.linkedin.com/in/abdallah-sabri/",
  instagram: "https://www.instagram.com/abdallah_sabri/",
};

const socialIcons: Record<keyof typeof socialHrefs, ComponentType<{ className?: string }>> = {
  whatsapp: WhatsAppIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
};

const navHrefs = {
  blog: "/blog",
  projects: "/projects",
  faq: "/faq",
  about: "/about",
};

export default async function Footer() {
  const t = await getTranslations("Footer");

  const navLinks = (Object.keys(navHrefs) as Array<keyof typeof navHrefs>).map(
    (key) => ({ label: t(`nav.${key}`), href: navHrefs[key] })
  );

  const socialLinks = (Object.keys(socialHrefs) as Array<keyof typeof socialHrefs>).map(
    (key) => ({ key, label: t(`social.${key}`), href: socialHrefs[key] })
  );

  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight text-white">
              {t("name")}
            </Link>
            {/*<p className="mt-1 text-sm text-zinc-500">{siteConfig.description}</p>*/}
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-zinc-500 transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-4">
            {socialLinks.map(({ label, href, key }) => {
              const Icon = socialIcons[key];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-500 transition-colors hover:text-white"
                  aria-label={`${label} profile`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center text-sm text-zinc-600">
          <p>
            {t("copyright", {
              year: new Date().getFullYear(),
              name: siteConfig.name,
            })}
          </p>
        </div>
      </div>
    </footer>
  );
}
