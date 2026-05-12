const authorSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  author: {
    "@type": "Person",
    "@id": "https://abdallahsabri.com/about#person",
    name: "Abdallah Sabri",
  },
};

export default function AuthorBio() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
    <aside className="mt-14 border-t border-white/10 pt-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
        <div className="min-w-0 flex-1">
          <p className="text-base font-semibold text-white">Abdallah Sabri</p>
          <p className="text-sm text-zinc-400">Senior Software Engineer &amp; Founder</p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            15+ years building distributed systems in Node.js, TypeScript, and AWS. Founded Clincura
            and Level Feedback. Previously led engineering at Safarway, Ride With Via, and Zencity.
          </p>
          <ul className="mt-4 flex flex-col gap-1.5 text-sm">
            <li>
              <a
                href="https://abdallahsabri.com/about"
                className="text-indigo-400 transition-colors hover:text-indigo-300"
              >
                → abdallahsabri.com/about
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/abdallah-sabri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 transition-colors hover:text-indigo-300"
              >
                → linkedin.com/in/abdallah-sabri
              </a>
            </li>
            <li>
              <a
                href="https://github.com/AbdallahSabri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 transition-colors hover:text-indigo-300"
              >
                → github.com/AbdallahSabri
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
    </>
  );
}
