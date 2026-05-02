import { getTranslations } from "next-intl/server";
import SectionLabel from "@/components/ui/SectionLabel";

type EntryData = {
  type: "role" | "education";
  dot: "green" | "blue" | "yellow" | "red" | "gray" | "purple";
  title: string;
  org: string;
  period: string;
  location?: string;
  bullets: string[];
};

const dotColors: Record<EntryData["dot"], string> = {
  green: "bg-emerald-400",
  blue: "bg-indigo-400",
  yellow: "bg-amber-400",
  red: "bg-rose-400",
  gray: "bg-zinc-500",
  purple: "bg-purple-400",
};

const dotRings: Record<EntryData["dot"], string> = {
  green: "ring-emerald-400/20",
  blue: "ring-indigo-400/20",
  yellow: "ring-amber-400/20",
  red: "ring-rose-400/20",
  gray: "ring-zinc-500/20",
  purple: "ring-purple-400/20",
};

export default async function Experience() {
  const t = await getTranslations("Experience");
  const entries = t.raw("entries") as EntryData[];

  return (
    <section
      id="experience"
      className="section-padding"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2
            id="experience-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white"
          >
            {t("heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-zinc-400">
            {t("description")}
          </p>
        </div>

        <ol className="relative" aria-label={t("ariaLabel")}>
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-white/5"
            aria-hidden="true"
          />

          {entries.map((entry, i) => (
            <li key={i} className="relative mb-10 pl-10 last:mb-0">
              <span
                className={`absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full ring-4 ${dotColors[entry.dot]} ${dotRings[entry.dot]}`}
                aria-hidden="true"
              />

              <div className="rounded-2xl border border-white/5 bg-[#18181b] px-6 py-5 transition-colors hover:border-white/10">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {entry.title}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-indigo-400">
                      {entry.org}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">
                      {entry.period}
                    </span>
                    {entry.location && (
                      <p className="mt-1.5 text-xs text-zinc-600">
                        {entry.location}
                      </p>
                    )}
                  </div>
                </div>

                {entry.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {entry.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-zinc-400">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-600" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
