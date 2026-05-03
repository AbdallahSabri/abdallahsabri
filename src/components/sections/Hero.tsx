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

        {/* Right: Photo + stats — gradient-border card */}
        <div className="rounded-3xl p-px bg-[linear-gradient(135deg,rgba(123,97,255,0.65)_0%,rgba(123,97,255,0.06)_45%,rgba(123,97,255,0.06)_55%,rgba(123,97,255,0.55)_100%)]">
          <div className="flex flex-col gap-5 rounded-3xl bg-[#1A1A20] p-5">
            {/* Photo area with radial glow */}
            <div className="relative flex h-[300px] items-end justify-center overflow-hidden rounded-2xl">
              {/* Purple radial glow behind subject */}
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] bg-[#7B61FF]/50" />
              <img
                src="https://s3.eu-central-1.amazonaws.com/abdallahsabri.com/abdallah00023.png"
                alt="Abdallah Sabri"
                className="relative z-10 h-80 w-auto max-w-none object-contain object-bottom "
              />
            </div>

            {/* Metric cards */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-white/[0.05] bg-[#0F0F12] px-3 py-4 text-center"
                >
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-xs leading-snug text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
