"use client";

import SectionLabel from "@/components/ui/SectionLabel";

const contactDetails = [
  {
    label: "Email",
    icon: "📧",
    display: "abdallah.silwad@gmail.com",
    href: "mailto:abdallah.silwad@gmail.com",
  },
  {
    label: "Phone — MENA",
    icon: "📞",
    display: "+970 592 090 780",
    href: "tel:+970592090780",
  },
  {
    label: "WhatsApp — MENA",
    icon: "💬",
    display: "+970 592 090 780",
    href: "https://wa.me/970592090780",
  },
  {
    label: "Phone — Outside MENA",
    icon: "📞",
    display: "+1 225 446 5588",
    href: "tel:+12254465588",
  },
  {
    label: "LinkedIn",
    icon: "🔗",
    display: "linkedin.com/in/abdallah-sabri",
    href: "https://linkedin.com/in/abdallah-sabri",
  },
  {
    label: "Location",
    icon: "📍",
    display: "Ramallah, Palestine — Open to Remote Worldwide & Relocation",
    href: null,
  },
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-[#18181b] px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500";

const labelClass = "mb-1.5 block text-sm text-zinc-400";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-[#18181b]"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <SectionLabel>Get In Touch</SectionLabel>
          <h2
            id="contact-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white"
          >
            Let&apos;s talk
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-zinc-400">
            Whether you&apos;re looking to hire, collaborate, or explore a consulting
            engagement — I&apos;d love to hear what you&apos;re working on.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          {/* Left: Contact details */}
          <div>
            <h3 className="mb-6 text-sm font-semibold tracking-widest text-zinc-500 uppercase">
              Contact Details
            </h3>
            <ul className="space-y-4">
              {contactDetails.map(({ label, icon, display, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 text-base" aria-hidden="true">
                    {icon}
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
              ))}
            </ul>
          </div>

          {/* Right: Intake form */}
          <form
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="full-name" className={labelClass}>
                  Full Name <span className="text-indigo-400">*</span>
                </label>
                <input
                  id="full-name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Jane Smith"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address <span className="text-indigo-400">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="jane@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className={labelClass}>
                Company / Organization{" "}
                <span className="text-zinc-600">(optional)</span>
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
                I&apos;m reaching out about… <span className="text-indigo-400">*</span>
              </label>
              <select
                id="topic"
                required
                defaultValue=""
                className={`${inputClass} cursor-pointer appearance-none`}
              >
                <option value="" disabled>
                  Select a topic
                </option>
                <option value="job">Job Opportunity</option>
                <option value="consulting">Consulting / Project</option>
                <option value="smb">SMB Services</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Tell me more
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Brief description of what you're working on or what you need…"
                className={`${inputClass} resize-none`}
              />
            </div>

            <fieldset>
              <legend className={labelClass}>Preferred contact method</legend>
              <div className="mt-2 flex flex-wrap gap-5">
                {(["Email", "WhatsApp", "Phone Call"] as const).map((method) => (
                  <label
                    key={method}
                    className="flex cursor-pointer items-center gap-2 text-sm text-zinc-300"
                  >
                    <input
                      type="radio"
                      name="contact-method"
                      value={method.toLowerCase().replace(" ", "-")}
                      className="accent-indigo-500"
                    />
                    {method}
                  </label>
                ))}
              </div>
            </fieldset>

            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-500 py-3.5 font-medium text-white transition-colors hover:bg-indigo-600"
            >
              Send Message
            </button>

            <p className="text-center text-xs text-zinc-600">
              I typically respond within 24–48 hours. For urgent enquiries,{" "}
              <a
                href="https://wa.me/970592090780"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 underline underline-offset-2 hover:text-zinc-300"
              >
                WhatsApp
              </a>{" "}
              is the fastest way to reach me.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
