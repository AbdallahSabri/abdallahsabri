import { getTranslations, getLocale } from "next-intl/server";
import HeroCard from "./HeroCard";
import HeroCardSlot from "./HeroCardSlot";

export default async function Hero() {
  const t = await getTranslations("Hero");
  const locale = await getLocale();

  return (
    <section
      id="hero"
      className="flex min-h-screen items-center px-6 pt-20"
      aria-label="Hero"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left: Text content */}
        <div>
          <p className="mb-5 text-sm font-medium tracking-widest text-indigo-400 uppercase">
            {t("badge")}
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
            <span className="mb-2 block text-2xl font-medium text-zinc-300">
              {locale === "ar" ? "عبدالله صبري" : "Abdallah Sabri"}
            </span>
            {t("titlePart1")}{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
          </h1>

          <div className="mb-4 flex flex-wrap gap-2">
            {(t.raw("skills") as string[]).map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
          <HeroCardSlot position="mobile"><HeroCard /></HeroCardSlot>
          <p className="mb-4 text-lg leading-relaxed text-zinc-300">
            {t("subtitle")}
          </p>

          <p className="mb-9 text-base leading-relaxed text-zinc-400">
            {t("description")}
          </p>

          <div className="mb-6 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-indigo-500 px-7 py-3 font-medium text-white transition-colors hover:bg-indigo-600"
            >
              {t("cta")}
            </a>
            <a
              href="#work"
              className="rounded-full border border-white/10 px-7 py-3 font-medium text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
            >
              {t("ctaWork")}
            </a>
          </div>

          <p className="text-sm text-zinc-500">{t("location")}</p>
        </div>

        <HeroCardSlot position="desktop"><HeroCard /></HeroCardSlot>
      </div>
    </section>
  );
}
