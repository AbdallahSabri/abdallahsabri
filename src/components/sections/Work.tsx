import SectionLabel from "@/components/ui/SectionLabel";

const projects = [
  {
    title: "SaaS Dashboard",
    description:
      "A multi-tenant analytics dashboard with real-time data visualization, role-based access control, and a custom design system.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Recharts"],
    href: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce store with product management, Stripe payments, inventory tracking, and admin portal.",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    href: "#",
  },
  {
    title: "API Gateway Service",
    description:
      "High-throughput API gateway handling rate limiting, authentication, request routing, and observability at scale.",
    tags: ["Node.js", "Redis", "Docker", "Kubernetes"],
    href: "#",
  },
];

export default function Work() {
  return (
    <section id="work" className="section-padding bg-[#18181b]" aria-labelledby="work-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <SectionLabel>Portfolio</SectionLabel>
          <h2 id="work-heading" className="mt-4 text-4xl font-bold tracking-tight text-white">
            Selected work
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            A curated selection of projects that showcase my approach to building products.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, tags, href }) => (
            <article
              key={title}
              className="flex flex-col rounded-2xl border border-white/5 bg-[#0f0f0f] p-6 transition-colors hover:border-indigo-500/30"
            >
              <div className="mb-4 h-40 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/10" />
              <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">{description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 px-2.5 py-0.5 text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={href}
                className="text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                aria-label={`View ${title} project`}
              >
                View project →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
