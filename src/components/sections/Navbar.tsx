"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navLinks = [
    { label: t("links.about"), href: "#about" },
    { label: t("links.services"), href: "#services" },
    { label: t("links.work"), href: "#work" },
    { label: t("links.experience"), href: "#experience" },
    { label: t("links.skills"), href: "#skills" },
    { label: t("links.volunteering"), href: "#volunteering" },
    { label: t("links.smb"), href: "#smb" },
    { label: t("links.contact"), href: "#contact" },
  ];

  const switchLocale = () => {
    router.replace(pathname, { locale: locale === "en" ? "ar" : "en" });
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0f0f0f]/80 backdrop-blur-md">
        <nav
          className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
          aria-label="Main navigation"
        >
          <a href="#hero" className="text-lg font-bold tracking-tight text-white">
            Abdallah Sabri
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={switchLocale}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
              aria-label={locale === "en" ? "Switch to Arabic" : "Switch to English"}
            >
              {locale === "en" ? "AR" : "EN"}
            </button>
            <a
              href="#contact"
              className="rounded-full bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
            >
              {t("cta")}
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("closeMenu") : t("openMenu")}
            aria-expanded={open}
            className="relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden"
          >
            <span
              className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-[#0f0f0f] transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-[73px] items-center justify-between border-b border-white/5 px-6">
          <a
            href="#hero"
            className="text-lg font-bold tracking-tight text-white"
            onClick={() => setOpen(false)}
          >
            Abdallah Sabri
          </a>
        </div>

        <nav className="flex flex-1 flex-col justify-between px-6 py-10">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ label, href }, i) => (
              <li
                key={href}
                className="transition-all duration-300"
                style={{
                  transitionDelay: open ? `${i * 40}ms` : "0ms",
                  transform: open ? "translateX(0)" : "translateX(-12px)",
                  opacity: open ? 1 : 0,
                }}
              >
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={() => { switchLocale(); setOpen(false); }}
              className="rounded-full border border-white/10 py-3 text-sm font-medium text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
            >
              {locale === "en" ? "العربية" : "English"}
            </button>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-600"
            >
              {t("cta")}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
