import { getTranslations } from "next-intl/server";
import SectionLabel from "@/components/ui/SectionLabel";
import Accordion from "@/components/ui/Accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default async function FAQ({ items }: FAQProps) {
  const t = await getTranslations("FAQ");

  return (
    <section id="faq" className="section-padding" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <SectionLabel>{t("label")}</SectionLabel>
          <h1
            id="faq-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white"
          >
            {t("heading")}
          </h1>
          <p className="mt-4 leading-relaxed text-zinc-400">{t("description")}</p>
        </div>

        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <Accordion key={item.id} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
