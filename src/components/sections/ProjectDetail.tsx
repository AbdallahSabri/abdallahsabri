import SectionLabel from "@/components/ui/SectionLabel";
import { Link } from "@/i18n/routing";

interface Feature {
  title: string;
  description: string;
}

interface TechGroup {
  category: string;
  items: string[];
}

interface Metric {
  value: string;
  label: string;
}

interface ArchDecision {
  title: string;
  body: string;
}

interface RelatedLink {
  label: string;
  href: string;
}

interface ProjectDetailProps {
  label: string;
  name: string;
  tagline: string;
  period: string;
  tags: string[];
  backLabel: string;
  problem: { heading: string; body: string };
  features: { heading: string; items: Feature[] };
  stack: { heading: string; groups: TechGroup[] };
  impact: { heading: string; metrics: Metric[] };
  cta: { visitLabel: string; href: string };
  intro?: string;
  statusBadge?: string;
  architecturePhilosophy?: string;
  architectureDecisions?: ArchDecision[];
  ctaBody?: string;
  related?: RelatedLink[];
}

export default function ProjectDetail({
  label,
  name,
  tagline,
  period,
  tags,
  backLabel,
  problem,
  features,
  stack,
  impact,
  cta,
  intro,
  statusBadge,
  architecturePhilosophy,
  architectureDecisions,
  ctaBody,
  related,
}: ProjectDetailProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-[#18181b] to-[#0f0f0f]" aria-labelledby="project-name">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
            <Link href="/projects" className="text-sm font-medium text-indigo-400 hover:text-indigo-300">
              {backLabel}
            </Link>
          </div>

          <div>
            <SectionLabel>{label}</SectionLabel>
            <h1 id="project-name" className="mt-4 text-5xl font-bold tracking-tight text-white">
              {name}
            </h1>
            <p className="mt-4 text-xl text-zinc-400">{tagline}</p>

            {intro && (
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-zinc-300">{intro}</p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="text-sm text-zinc-500">{period}</span>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-medium text-indigo-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Status Badge */}
      {statusBadge && (
        <section className="border-y border-white/5 bg-[#18181b] py-4">
          <div className="mx-auto max-w-6xl">
            <span className="rounded-full bg-indigo-500/20 px-4 py-1.5 text-xs font-semibold text-indigo-300">
              {statusBadge}
            </span>
          </div>
        </section>
      )}

      {/* Problem Section */}
      <section className="section-padding" aria-labelledby="problem-heading">
        <div className="mx-auto max-w-6xl">
          <h2 id="problem-heading" className="text-3xl font-bold tracking-tight text-white">
            {problem.heading}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">{problem.body}</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-[#18181b]" aria-labelledby="features-heading">
        <div className="mx-auto max-w-6xl">
          <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-white">
            {features.heading}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.items.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-white/5 bg-[#0f0f0f] p-6">
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding" aria-labelledby="stack-heading">
        <div className="mx-auto max-w-6xl">
          <h2 id="stack-heading" className="text-3xl font-bold tracking-tight text-white">
            {stack.heading}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stack.groups.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-white/5 px-2.5 py-1.5 font-mono text-xs text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {architecturePhilosophy && architectureDecisions && (
            <div className="mt-16">
              <p className="max-w-3xl text-base text-zinc-400">{architecturePhilosophy}</p>
              <ul className="mt-8 space-y-6">
                {architectureDecisions.map((d) => (
                  <li key={d.title} className="max-w-3xl text-sm leading-relaxed text-zinc-400">
                    <strong className="text-white">{d.title}</strong> — {d.body}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-[#18181b]" aria-labelledby="impact-heading">
        <div className="mx-auto max-w-6xl">
          <h2 id="impact-heading" className="text-3xl font-bold tracking-tight text-white">
            {impact.heading}
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {impact.metrics.map((metric) => (
              <div key={metric.value} className="rounded-2xl border border-white/5 bg-[#0f0f0f] p-6 text-center">
                <p className="text-3xl font-bold text-indigo-400">{metric.value}</p>
                <p className="mt-3 text-sm text-zinc-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="mx-auto max-w-6xl text-center">
          {ctaBody && (
            <p className="mb-8 max-w-xl mx-auto text-zinc-400">{ctaBody}</p>
          )}
          <a
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-500"
          >
            {cta.visitLabel}
          </a>
        </div>
      </section>

      {/* Related Links */}
      {related && related.length > 0 && (
        <section className="section-padding bg-[#18181b]" aria-labelledby="related-heading">
          <div className="mx-auto max-w-6xl">
            <h2 id="related-heading" className="text-xl font-semibold text-white">Related</h2>
            <ul className="mt-6 space-y-3">
              {related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="text-sm text-indigo-400 hover:text-indigo-300">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
