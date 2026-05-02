import SectionLabel from "@/components/ui/SectionLabel";

const tiles = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Custom Software Development",
    hook: "Got a business problem? I'll build the solution.",
    description:
      "From customer portals to internal operations tools — I design and build custom web software tailored to your workflow. No templates. No bloated agency retainers. Direct work with you from brief to launch.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
    title: "Tech Stack Audit & Optimization",
    hook: "Is your current tech slowing your team down?",
    description:
      "I'll review your existing systems, identify bottlenecks, and give you a clear roadmap for improvement. Whether it's a slow website, a clunky internal tool, or an integration problem — I'll tell you exactly what needs to change and why.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Digital Presence & Reputation Management",
    hook: "Powered by Level Feedback — my own product.",
    description:
      "For businesses that rely on Google reviews and local visibility: automated review request campaigns, Google Business Profile management, and customer feedback workflows. Built specifically for SMBs that don't have a marketing team.",
  },
];

export default function SMBServices() {
  return (
    <section
      id="smb"
      className="section-padding bg-[#18181b]"
      aria-labelledby="smb-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <SectionLabel>For SMBs</SectionLabel>
          <h2
            id="smb-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white"
          >
            For Small &amp; Medium Businesses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-zinc-400">
            Running a business and need tech that actually works for you —
            without the agency overhead or the risk of hiring the wrong team? I
            work directly with SMB owners and operators who need results, not
            presentations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiles.map(({ icon, title, hook, description }) => (
            <article
              key={title}
              className="group flex flex-col rounded-2xl border border-white/5 bg-[#0f0f0f] p-6 transition-colors hover:border-indigo-500/30"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 transition-colors group-hover:bg-indigo-500/20">
                {icon}
              </div>
              <h3 className="mb-1 text-base font-semibold text-white">
                {title}
              </h3>
              <p className="mb-3 text-xs font-medium text-indigo-400">{hook}</p>
              <p className="flex-1 text-sm leading-relaxed text-zinc-400">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-sm text-zinc-400">
            Not sure which service fits your situation?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-6 py-3 text-sm font-medium text-indigo-300 transition-colors hover:border-indigo-500/70 hover:bg-indigo-500/20 hover:text-indigo-200"
          >
            Book a free 30-minute consultation →
          </a>
        </div>
      </div>
    </section>
  );
}
