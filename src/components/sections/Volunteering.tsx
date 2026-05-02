import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";

type VolunteerCard = {
  image: string;
  imageAlt: string;
  icon: string;
  org: string;
  role: string;
  period: string;
  description: string;
};

const cards: VolunteerCard[] = [
  {
    image: "/volunteering/afaq-toastmasters.jpg",
    imageAlt: "Afaq Toastmasters Club meeting",
    icon: "🎤",
    org: "Afaq Toastmasters Club",
    role: "President",
    period: "Jan 2025 – Jul 2026",
    description:
      "Leading the club's operations, weekly meetings, and member development programs with a focus on public speaking and leadership development. Responsible for setting the club's strategic direction and fostering an environment where members build communication confidence.",
  },
  {
    image: "/volunteering/afaq-students.jpg",
    imageAlt: "Afaq University Students Association",
    icon: "🎓",
    org: "Afaq University Students Association",
    role: "Secretary",
    period: "Jul 2024 – Jul 2026",
    description:
      "Managing administrative operations and communications for the student association. Supporting university community initiatives and student affairs — ensuring the association runs efficiently and that student voices are heard and acted upon.",
  },
];

function ImageSlot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-48 w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
      {/* Placeholder sits beneath — covered by the image once it loads */}
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

export default function Volunteering() {
  return (
    <section
      id="volunteering"
      className="section-padding"
      aria-labelledby="volunteering-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <SectionLabel>Community</SectionLabel>
          <h2
            id="volunteering-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white"
          >
            Volunteering &amp; Community
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-zinc-400">
            Beyond the code, I believe in investing in people — helping them
            communicate better, lead with confidence, and grow in their
            communities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {cards.map(({ image, imageAlt, icon, org, role, period, description }) => (
            <article
              key={org}
              className="overflow-hidden rounded-2xl border border-white/5 bg-[#18181b] transition-colors hover:border-white/10"
            >
              <ImageSlot src={image} alt={imageAlt} />

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
