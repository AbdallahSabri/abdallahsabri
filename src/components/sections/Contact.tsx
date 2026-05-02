"use client";

import SectionLabel from "@/components/ui/SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="section-padding" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-2xl text-center">
        <SectionLabel>Contact</SectionLabel>
        <h2 id="contact-heading" className="mt-4 text-4xl font-bold tracking-tight text-white">
          Let&apos;s work together
        </h2>
        <p className="mx-auto mt-4 max-w-md text-zinc-400">
          Have a project in mind or want to explore possibilities? I&apos;d love to hear from you.
        </p>

        <form
          className="mt-10 space-y-4 text-left"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-zinc-400">
                Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Jane Smith"
                className="w-full rounded-xl border border-white/10 bg-[#18181b] px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-zinc-400">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                placeholder="jane@example.com"
                className="w-full rounded-xl border border-white/10 bg-[#18181b] px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-1.5 block text-sm text-zinc-400">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              required
              placeholder="Project inquiry"
              className="w-full rounded-xl border border-white/10 bg-[#18181b] px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm text-zinc-400">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              required
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-xl border border-white/10 bg-[#18181b] px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-500 py-3.5 font-medium text-white transition-colors hover:bg-indigo-600"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
