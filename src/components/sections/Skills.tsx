import { getTranslations } from "next-intl/server";
import SectionLabel from "@/components/ui/SectionLabel";

export default async function Skills() {
  const t = await getTranslations("Skills");
  const groups = t.raw("groups") as Array<{ category: string; skills: string[] }>;

  return (
    <section
      id="skills"
      className="section-padding bg-[#18181b]"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2
            id="skills-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white"
          >
            {t("heading")}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {groups.map(({ category, skills }) => (
            <div
              key={category}
              className="rounded-2xl border border-white/5 bg-[#0f0f0f] p-5"
            >
              <p className="mb-4 text-xs font-semibold tracking-widest text-indigo-400 uppercase">
                {category}
              </p>
              <ul role="list" className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
