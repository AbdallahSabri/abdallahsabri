import SectionLabel from "@/components/ui/SectionLabel";

const stats = [
  { value: "15+", label: "Years of Engineering Experience" },
  { value: "2", label: "SaaS Products Built & Launched" },
  { value: "97%", label: "API Response Time Cut in Production (BFF layer, Ride With Via)" },
  { value: "5", label: "Legacy Services Unified into One Platform (Zencity)" },
  { value: "8+", label: "Years Remote Engineering" },
];

const paragraphs = [
  "I'm Abdallah Sabri — a Senior Software Engineer with over 15 years of experience building backend systems, leading engineering teams, and turning complex problems into scalable, maintainable software.",
  "My career has spanned government portals, travel tech, civic analytics, and healthcare SaaS. I've worked inside large enterprise environments and scrappy startup teams — and I've been on both sides of the table as an engineer and as a founder.",
  "In late 2024, I launched Clincura, an AI-powered clinic management SaaS, and Level Feedback, a reputation management platform for small businesses. Building these products from zero has sharpened my instincts on system design, product decisions, and what actually matters when you're the one responsible for the outcome.",
  "I'm based in Ramallah, Palestine, and actively looking for remote opportunities or roles that would allow me to relocate — particularly in Europe.",
  "When I'm not building software, I'm investing in people — currently serving as President of Afaq Toastmasters Club, helping others grow their communication and leadership skills.",
];

export default function About() {
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
            <SectionLabel>About Me</SectionLabel>
            <h2
              id="about-heading"
              className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white"
            >
              Engineer. Founder.{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Builder.
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
