import Image from "next/image";
import { getTranslations } from "next-intl/server";
import SectionLabel from "@/components/ui/SectionLabel";

const cardImages = [
  { src: "https://s3.eu-central-1.amazonaws.com/abdallahsabri.com/abdallah00001.jpg", icon: "🎤" },
  { src: "https://s3.eu-central-1.amazonaws.com/abdallahsabri.com/abdallah00008.JPG", icon: "🎓" },
];

function ImageSlot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <span className="text-4xl opacity-20">🖼</span>
      </div>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}

export default async function Volunteering() {
  const t = await getTranslations("Volunteering");
  const items = t.raw("items") as Array<{
    imageAlt: string;
    org: string;
    role: string;
    period: string;
    description: string;
  }>;

  const cards = items.map((item, i) => ({ ...item, ...cardImages[i] }));

  return (
    <section
      id="volunteering"
      className="section-padding"
      aria-labelledby="volunteering-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2
            id="volunteering-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white"
          >
            {t("heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-zinc-400">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {cards.map(({ src, imageAlt, icon, org, role, period, description }) => (
            <article
              key={org}
              className="overflow-hidden rounded-2xl border border-white/5 bg-[#18181b] transition-colors hover:border-white/10"
            >
              <ImageSlot src={src} alt={imageAlt} />

              <div className="p-6">
                <div className="mb-1 flex items-center gap-2">
                  <span aria-hidden="true">{icon}</span>
                  <h3 className="text-lg font-semibold text-white">{org}</h3>
                </div>

                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-indigo-500/10 px-3 py-0.5 text-xs font-medium text-indigo-400">
                    {role}
                  </span>
                  <span className="text-xs text-zinc-500">{period}</span>
                </div>

                <p className="text-sm leading-relaxed text-zinc-400">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
