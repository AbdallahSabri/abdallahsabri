import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/lib/metadata";

const socialHrefs = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};

const navHrefs = {
  about: "#about",
  services: "#services",
  work: "#work",
  contact: "#contact",
};

export default async function Footer() {
  const t = await getTranslations("Footer");

  const navLinks = (Object.keys(navHrefs) as Array<keyof typeof navHrefs>).map(
    (key) => ({ label: t(`nav.${key}`), href: navHrefs[key] })
  );

  const socialLinks = (Object.keys(socialHrefs) as Array<keyof typeof socialHrefs>).map(
    (key) => ({ label: t(`social.${key}`), href: socialHrefs[key] })
  );

  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <a href="#hero" className="text-lg font-bold tracking-tight text-white">
              AS<span className="text-indigo-400">.</span>
            </a>
            <p className="mt-1 text-sm text-zinc-500">{siteConfig.description}</p>
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
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 transition-colors hover:text-white"
                aria-label={`${label} profile`}
              >
                {label}
              </a>
            ))}
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
