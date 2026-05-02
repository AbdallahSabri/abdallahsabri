import SectionLabel from "@/components/ui/SectionLabel";

type Project = {
  title: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
  tags: string[];
  featured?: boolean;
  href?: string;
};

const projects: Project[] = [
  {
    title: "Clincura",
    role: "Founder & Architect",
    period: "Dec 2024 – Present",
    description:
      "An AI-powered clinic management SaaS platform built for multi-clinic operations. Handles scheduling, patient records, billing, and staff management — live with paying clients.",
    stack: ["NestJS", "TypeScript", "PostgreSQL", "RabbitMQ", "JWT/RBAC", "OpenAPI"],
    tags: ["SaaS Product", "Healthcare Tech", "Founder"],
    featured: true,
  },
  {
    title: "Level Feedback",
    role: "Founder & Architect",
    period: "Dec 2024 – Present",
    description:
      "A platform automating Google Business Profile management and reputation monitoring for small businesses. Built with a focus on simplicity for non-technical SMB owners.",
    stack: ["Next.js", "Firebase", "Stripe", "Twilio", "QStash", "Vercel"],
    tags: ["SaaS Product", "SMB", "Founder"],
    featured: true,
  },
  {
    title: "Ride With Via — BFF Layer",
    role: "Senior Engineer @ ASAL Technologies",
    period: "2021 – 2023",
    description:
      "Designed and implemented a Backend For Frontend (BFF) architecture that reduced API response times from 1–2 minutes down to under 3 seconds — a 97% improvement. Supported 100,000+ active users across on-demand and pre-booking transit.",
    stack: ["Node.js", "Microservices", "REST APIs", "React.js", "Redux"],
    tags: ["Transit Tech", "Performance", "Scale"],
  },
  {
    title: "Zencity — Unified Publication System",
    role: "Senior Engineer @ ASAL Technologies",
    period: "2023 – 2024",
    description:
      "Consolidated 5 legacy notification services into a single unified delivery system for email and in-app communications across 300+ government clients. Eliminated cross-service inconsistencies and reduced maintenance overhead.",
    stack: ["Node.js", "TypeScript", "React.js", "Module Federation", "Storybook"],
    tags: ["GovTech", "Platform Engineering"],
  },
  {
    title: "Safarway — Microservices Migration",
    role: "Senior Engineer & Team Leader",
    period: "2018 – 2021",
    description:
      "Led the microservices migration for a global travel platform — scaling to ~1M users and 100,000+ property listings worldwide. Architected services for Social Engine, User Profiles, and Property Management.",
    stack: ["Node.js", "Microservices", "PostgreSQL", "MongoDB"],
    tags: ["Travel Tech", "Scale", "Team Lead"],
  },
  {
    title: "Ministry of Transport — Citizen Portal",
    role: "Senior Software Engineer",
    period: "2014 – 2018",
    description:
      "Built the Palestinian Ministry of Transport's public-facing website and citizen portal. Integrated systems across multiple government ministries for unified data access and service delivery.",
    stack: ["Web", "Government Systems Integration"],
    tags: ["GovTech", "Public Sector"],
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="section-padding bg-[#18181b]"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <SectionLabel>Projects &amp; Work</SectionLabel>
          <h2
            id="work-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white"
          >
            Selected work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-zinc-400">
            A selection of the systems I've built, led, or contributed to across
            healthcare, civic tech, transit, and travel.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map(({ title, role, period, description, stack, tags, featured, href }) => (
            <article
              key={title}
              className={`group flex flex-col rounded-2xl border p-6 transition-colors ${
                featured
                  ? "border-indigo-500/25 bg-indigo-500/5 hover:border-indigo-500/50"
                  : "border-white/5 bg-[#0f0f0f] hover:border-white/10"
              }`}
            >
              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      tag === "Founder"
                        ? "bg-purple-500/15 text-purple-300"
                        : "bg-white/5 text-zinc-400"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="mb-1 text-lg font-semibold text-white">{title}</h3>

              {/* Role + period */}
              <p className="mb-4 text-sm font-medium text-indigo-400">
                {role}
                <span className="mx-2 text-zinc-600">·</span>
                <span className="text-zinc-500">{period}</span>
              </p>

              {/* Description */}
              <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-400">
                {description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-white/5 px-2 py-0.5 font-mono text-xs text-zinc-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Optional link */}
              {href && (
                <a
                  href={href}
                  className="mt-5 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                  aria-label={`View ${title}`}
                >
                  View project →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
