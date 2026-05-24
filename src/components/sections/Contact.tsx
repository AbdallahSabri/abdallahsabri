"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import {WhatsAppIcon, LinkedInIcon, GoogleMeetIcon} from "@/components/ui/icons";

const contactHrefs = [
  "mailto:info@abdallahsabri.com",
  "https://calendly.com/abdallah-sabri",
  "https://linkedin.com/in/abdallah-sabri",
  null,
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-[#18181b] px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500";

const labelClass = "mb-1.5 block text-sm text-zinc-400";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const t = useTranslations("Contact");
  const contactItems = t.raw("contactItems") as Array<{
    label: string;
    display: string;
  }>;
  const methods = t.raw("form.methods") as string[];

  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      fullName: (form.elements.namedItem("full-name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      topic: (form.elements.namedItem("topic") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      contactMethod: (form.querySelector('input[name="contact-method"]:checked') as HTMLInputElement | null)?.value ?? "",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="section-padding bg-[#18181b]"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <SectionLabel>{t("label")}</SectionLabel>
          <h2
            id="contact-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white"
          >
            {t("heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-zinc-400">
            {t("description")}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          {/* Left: Contact details */}
          <div>
            <h3 className="mb-6 text-sm font-semibold tracking-widest text-zinc-500 uppercase">
              {t("detailsHeading")}
            </h3>
            <ul className="space-y-4">
              {contactItems.map(({ label, display }, i) => {
                const href = contactHrefs[i];
                const icons = [
                  "📧",
                  <GoogleMeetIcon key="whatsapp" className="h-4 w-4 text-[#25D366]" />,
                  <LinkedInIcon key="linkedin" className="h-4 w-4 text-[#0A66C2]" />,
                  "📍",
                ];
                return (
                  <li key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex items-center text-base" aria-hidden="true">
                      {icons[i]}
                    </span>
                    <div>
                      <p className="text-xs text-zinc-600">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm text-zinc-300 transition-colors hover:text-indigo-400"
                        >
                          {display}
                        </a>
                      ) : (
                        <p className="text-sm text-zinc-300">{display}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: Intake form */}
          <form
            className="space-y-5"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="full-name" className={labelClass}>
                  {t("form.fullName")} <span className="text-indigo-400" aria-hidden="true">*</span>
                </label>
                <input
                  id="full-name"
                  type="text"
                  autoComplete="name"
                  required
                  aria-required="true"
                  placeholder="Jane Smith"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  {t("form.emailAddress")} <span className="text-indigo-400" aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  aria-required="true"
                  placeholder="jane@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className={labelClass}>
                {t("form.company")}{" "}
                <span className="text-zinc-600">({t("form.companyOptional")})</span>
              </label>
              <input
                id="company"
                type="text"
                autoComplete="organization"
                placeholder="Acme Corp"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="topic" className={labelClass}>
                {t("form.topic")} <span className="text-indigo-400" aria-hidden="true">*</span>
              </label>
              <select
                id="topic"
                required
                aria-required="true"
                defaultValue=""
                className={`${inputClass} cursor-pointer appearance-none`}
              >
                <option value="" disabled>
                  {t("form.topicPlaceholder")}
                </option>
                <option value="job">{t("form.topics.job")}</option>
                <option value="consulting">{t("form.topics.consulting")}</option>
                <option value="smb">{t("form.topics.smb")}</option>
                <option value="partnership">{t("form.topics.partnership")}</option>
                <option value="other">{t("form.topics.other")}</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                {t("form.message")}
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder={t("form.messagePlaceholder")}
                className={`${inputClass} resize-none`}
              />
            </div>

            <fieldset>
              <legend className={labelClass}>{t("form.contactMethod")}</legend>
              <div className="mt-2 flex flex-wrap gap-5">
                {methods.map((method) => (
                  <label
                    key={method}
                    className="flex cursor-pointer items-center gap-2 text-sm text-zinc-300"
                  >
                    <input
                      type="radio"
                      name="contact-method"
                      value={method.toLowerCase().replace(/\s+/g, "-")}
                      className="accent-indigo-500"
                    />
                    {method}
                  </label>
                ))}
              </div>
            </fieldset>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-xl bg-indigo-500 py-3.5 font-medium text-white transition-colors hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? t("form.submitting") : t("form.submit")}
            </button>

            {status === "success" && (
              <p className="text-center text-sm text-emerald-400">{t("form.successMessage")}</p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-red-400">{t("form.errorMessage")}</p>
            )}

            <p className="text-center text-xs text-zinc-600">
              {t("form.responseNote")}{" "}
              <a
                href="https://wa.me/970592090780"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 underline underline-offset-2 hover:text-zinc-300"
              >
                {t("form.responseNoteWhatsApp")}
              </a>{" "}
              {t("form.responseNoteEnd")}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
