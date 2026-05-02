import SectionLabel from "@/components/ui/SectionLabel";

const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "40+", label: "Projects delivered" },
  { value: "20+", label: "Happy clients" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#18181b]" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <SectionLabel>About me</SectionLabel>
            <h2
              id="about-heading"
              className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white"
            >
              Passionate about clean code &amp; great UX
            </h2>
            <p className="mt-6 leading-relaxed text-zinc-400">
              I&apos;m a full-stack developer with a deep focus on building performant, accessible,
              and visually polished web applications. I care equally about developer experience and
              end-user experience.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              When I&apos;m not coding, you can find me exploring new design patterns, contributing
              to open-source projects, or writing about web development.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "PostgreSQL",
                "Tailwind CSS",
                "GraphQL",
                "Docker",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/5 bg-[#0f0f0f] p-6 text-center"
              >
                <p className="text-4xl font-bold text-indigo-400">{value}</p>
                <p className="mt-2 text-sm text-zinc-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
