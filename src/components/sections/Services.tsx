import { getTranslations } from "next-intl/server";
import SectionLabel from "@/components/ui/SectionLabel";
import type { ReactNode } from "react";

const serviceIcons: ReactNode[] = [
  <svg key="backend" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <polyline points="8 21 12 17 16 21" />
  </svg>,
  <svg key="perf" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>,
  <svg key="cloud" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 20V10" />
    <path d="M12 20V4" />
    <path d="M6 20v-6" />
  </svg>,
  <svg key="migration" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 3 21 3 21 8" />
    <line x1="4" y1="20" x2="21" y2="3" />
    <polyline points="21 16 21 21 16 21" />
    <line x1="15" y1="15" x2="21" y2="21" />
  </svg>,
  <svg key="leadership" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  <svg key="saas" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </svg>,
];

export default async function Services() {
  const t = await getTranslations("Services");
  const items = t.raw("items") as Array<{
    title: string;
    audience: string;
    description: string;
  }>;

  const services = items.map((item, i) => ({ ...item, icon: serviceIcons[i] }));

  return (
    <section
      id="services"
      className="section-padding"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2
            id="services-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white"
          >
            {t("heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-zinc-400">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon, title, audience, description }) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl border border-white/5 bg-[#18181b] p-6 transition-colors hover:border-indigo-500/30"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 transition-colors group-hover:bg-indigo-500/20">
                {icon}
              </div>
              <h3 className="mb-1 text-base font-semibold text-white">
                {title}
              </h3>
              <p className="mb-3 text-xs font-medium text-indigo-400">
                {audience}
              </p>
              <p className="text-sm leading-relaxed text-zinc-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
