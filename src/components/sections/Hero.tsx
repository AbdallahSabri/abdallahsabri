import { getTranslations } from "next-intl/server";

const statValues = ["15+", "2", "97%", "8+"];
const statKeys = ["experience", "saas", "latency", "remote"] as const;

export default async function Hero() {
  const t = await getTranslations("Hero");

  const stats = statValues.map((value, i) => ({
    value,
    label: t(`stats.${statKeys[i]}`),
  }));

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
            {t("titlePart1")}{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {t("titleHighlight")}
            </span>
          </h1>

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

        {/* Right: Photo + stats */}
        <div className="flex flex-col items-center gap-8">
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
            <div className="flex h-full flex-col items-center justify-center gap-3">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-400">
                <span className="text-3xl font-bold text-white">AS</span>
              </div>
              <p className="text-xs text-zinc-500">{t("photoSoon")}</p>
            </div>
          </div>

          <div className="grid w-full grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center"
              >
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
