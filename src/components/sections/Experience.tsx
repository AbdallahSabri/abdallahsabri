import SectionLabel from "@/components/ui/SectionLabel";

type Entry = {
  type: "role" | "education";
  dot: "green" | "blue" | "yellow" | "red" | "gray" | "purple";
  title: string;
  org: string;
  period: string;
  location?: string;
  bullets: string[];
};

const entries: Entry[] = [
  {
    type: "role",
    dot: "green",
    title: "Independent Software Engineer & Founder",
    org: "Self-Employed",
    period: "Dec 2024 – Present",
    location: "Ramallah, Palestine (Remote)",
    bullets: [
      "Founded and launched Clincura (healthcare SaaS) and Level Feedback (SMB reputation platform).",
      "Architected full-stack systems independently, from database schema to deployment pipelines.",
      "Implemented JWT/RBAC authorization across both products for compliance and access control.",
    ],
  },
  {
    type: "role",
    dot: "blue",
    title: "Senior Software Engineer",
    org: "ASAL Technologies",
    period: "Mar 2021 – Dec 2024",
    location: "Palestine (Remote)",
    bullets: [
      "Ride With Via (2021–2023): Designed BFF layer; cut API response times by 97%; supported 100K+ users.",
      "Zencity (2023–2024): Consolidated 5 legacy services into a unified notification system for 300+ government clients; built drag-and-drop Report Builder with Module Federation; maintained shared Storybook component library.",
      "Mentored 3 junior engineers through full onboarding — all 3 converted to full-time roles.",
    ],
  },
  {
    type: "role",
    dot: "yellow",
    title: "Senior Software Engineer & Team Leader",
    org: "Safarway",
    period: "Jun 2018 – Feb 2021",
    location: "Palestine",
    bullets: [
      "Defined technical roadmap with founders and delivered first working POC.",
      "Led microservices migration and scaled platform to ~1M users and 100,000+ property listings.",
      "Built 'Operation Manager' — internal logistics tool for 100,000+ global properties.",
      "Grew and led a 5-person engineering team.",
    ],
  },
  {
    type: "role",
    dot: "red",
    title: "Senior Software Engineer",
    org: "Ministry of Transport (Palestinian Authority)",
    period: "Feb 2014 – May 2018",
    location: "Palestine",
    bullets: [
      "Built the main public website and citizen service portal.",
      "Integrated backend systems across multiple government ministries.",
    ],
  },
  {
    type: "role",
    dot: "gray",
    title: "Software Engineer",
    org: "Andalus",
    period: "Jun 2010 – Jan 2014",
    location: "Palestine",
    bullets: [
      "Built a web-based Point of Sale (POS) system for retail operations.",
    ],
  },
  {
    type: "education",
    dot: "purple",
    title: "B.Sc. in Information & Communication Technologies",
    org: "Al-Quds Open University",
    period: "Graduated 2010",
    bullets: [],
  },
];

const dotColors: Record<Entry["dot"], string> = {
  green: "bg-emerald-400",
  blue: "bg-indigo-400",
  yellow: "bg-amber-400",
  red: "bg-rose-400",
  gray: "bg-zinc-500",
  purple: "bg-purple-400",
};

const dotRings: Record<Entry["dot"], string> = {
  green: "ring-emerald-400/20",
  blue: "ring-indigo-400/20",
  yellow: "ring-amber-400/20",
  red: "ring-rose-400/20",
  gray: "ring-zinc-500/20",
  purple: "ring-purple-400/20",
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <SectionLabel>Experience</SectionLabel>
          <h2
            id="experience-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white"
          >
            Career timeline
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-zinc-400">
            15+ years across government, enterprise, scale-up, and startup environments.
          </p>
        </div>

        <ol className="relative" aria-label="Career timeline">
          {/* Vertical line */}
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-white/5"
            aria-hidden="true"
          />

          {entries.map((entry, i) => (
            <li key={i} className="relative mb-10 pl-10 last:mb-0">
              {/* Dot */}
              <span
                className={`absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full ring-4 ${dotColors[entry.dot]} ${dotRings[entry.dot]}`}
                aria-hidden="true"
              />

              {/* Card */}
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
