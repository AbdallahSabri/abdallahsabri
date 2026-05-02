import { getTranslations } from "next-intl/server";
import SectionLabel from "@/components/ui/SectionLabel";

export default async function About() {
  const t = await getTranslations("About");
  const paragraphs = t.raw("paragraphs") as string[];
  const stats = t.raw("stats") as Array<{ value: string; label: string }>;

  return (
    <section
      id="about"
      className="section-padding bg-[#18181b]"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_340px] lg:items-start">
          {/* Left: Body copy */}
          <div>
            <SectionLabel>{t("label")}</SectionLabel>
            <h2
              id="about-heading"
              className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white"
            >
              {t("headingPart1")}{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {t("headingHighlight")}
              </span>
            </h2>

            <div className="mt-6 space-y-4">
              {paragraphs.map((text, i) => (
                <p key={i} className="leading-relaxed text-zinc-400">
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Right: Stat cards */}
          <div className="flex flex-col gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-white/5 bg-[#0f0f0f] px-6 py-5"
              >
                <p className="min-w-[3.5rem] text-3xl font-bold text-indigo-400">
                  {value}
                </p>
                <p className="text-sm leading-snug text-zinc-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
