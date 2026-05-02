import { getTranslations } from "next-intl/server";
import SectionLabel from "@/components/ui/SectionLabel";

type ProjectData = {
  title: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
  tags: string[];
  featured?: boolean;
  href?: string;
};

export default async function Work() {
  const t = await getTranslations("Work");
  const items = t.raw("items") as ProjectData[];

  return (
    <section
      id="work"
      className="section-padding bg-[#18181b]"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2
            id="work-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white"
          >
            {t("heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-zinc-400">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map(({ title, role, period, description, stack, tags, featured, href }) => (
            <article
              key={title}
              className={`group flex flex-col rounded-2xl border p-6 transition-colors ${
                featured
                  ? "border-indigo-500/25 bg-indigo-500/5 hover:border-indigo-500/50"
                  : "border-white/5 bg-[#0f0f0f] hover:border-white/10"
              }`}
            >
              <div className="mb-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      tag === "Founder" || tag === "مؤسّس"
                        ? "bg-purple-500/15 text-purple-300"
                        : "bg-white/5 text-zinc-400"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="mb-1 text-lg font-semibold text-white">{title}</h3>

              <p className="mb-4 text-sm font-medium text-indigo-400">
                {role}
                <span className="mx-2 text-zinc-600">·</span>
                <span className="text-zinc-500">{period}</span>
              </p>

              <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-400">
                {description}
              </p>

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

              {href && (
                <a
                  href={href}
                  className="mt-5 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                  aria-label={`View ${title}`}
                >
                  {t("viewProject")}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
