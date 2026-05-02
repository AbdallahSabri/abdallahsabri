const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "2", label: "SaaS Products Launched" },
  { value: "97%", label: "API Latency Reduction" },
  { value: "8+", label: "Years Remote Engineering" },
];

export default function Hero() {
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
            Available for Work
          </p>

          <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
            Senior Software Engineer &amp;{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Engineering Leader
            </span>
          </h1>

          <p className="mb-4 text-lg leading-relaxed text-zinc-300">
            15+ years building cloud-native systems that scale — from government
            portals to SaaS products used in production worldwide.
          </p>

          <p className="mb-9 text-base leading-relaxed text-zinc-400">
            I architect distributed backends, lead cross-functional teams, and
            ship products that work in production — not just on whiteboards.
          </p>

          <div className="mb-6 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-full bg-indigo-500 px-7 py-3 font-medium text-white transition-colors hover:bg-indigo-600"
            >
              Hire Me
            </a>
            <a
              href="#work"
              className="rounded-full border border-white/10 px-7 py-3 font-medium text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
            >
              See My Work
            </a>
          </div>

          <p className="text-sm text-zinc-500">
            📍 Ramallah, Palestine — Open to Remote Worldwide &amp; Relocation
          </p>
        </div>

        {/* Right: Photo + stats */}
        <div className="flex flex-col items-center gap-8">
          {/* Photo placeholder */}
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
            <div className="flex h-full flex-col items-center justify-center gap-3">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-400">
                <span className="text-3xl font-bold text-white">AS</span>
              </div>
              <p className="text-xs text-zinc-500">Photo coming soon</p>
            </div>
          </div>

          {/* Stat badges */}
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
