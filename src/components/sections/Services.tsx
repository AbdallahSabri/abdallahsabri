import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    icon: "⚡",
    title: "Frontend Development",
    description:
      "Pixel-perfect UIs with React and Next.js — fast, accessible, and responsive across all devices.",
  },
  {
    icon: "🛠",
    title: "Backend Development",
    description:
      "Scalable APIs and server-side logic with Node.js, PostgreSQL, and cloud infrastructure.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Clean, intuitive interfaces designed in Figma and brought to life with meticulous attention to detail.",
  },
  {
    icon: "🚀",
    title: "Performance Optimization",
    description:
      "Auditing and optimizing Core Web Vitals, bundle size, and rendering strategies for maximum speed.",
  },
  {
    icon: "🔒",
    title: "Security & Auth",
    description:
      "Implementing robust authentication, authorization, and security best practices in every project.",
  },
  {
    icon: "📦",
    title: "DevOps & Deployment",
    description:
      "CI/CD pipelines, Docker containers, and zero-downtime deployments on Vercel, AWS, or GCP.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <SectionLabel>What I do</SectionLabel>
          <h2
            id="services-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white"
          >
            Services I offer
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            End-to-end development capabilities — from design systems to production deployments.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon, title, description }) => (
            <article
              key={title}
              className="group rounded-2xl border border-white/5 bg-[#18181b] p-6 transition-colors hover:border-indigo-500/30"
            >
              <div className="mb-4 text-3xl" aria-hidden="true">
                {icon}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
