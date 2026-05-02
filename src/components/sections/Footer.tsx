import { siteConfig } from "@/lib/metadata";

const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <a href="#hero" className="text-lg font-bold tracking-tight text-white">
              AS<span className="text-indigo-400">.</span>
            </a>
            <p className="mt-1 text-sm text-zinc-500">{siteConfig.description}</p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-sm text-zinc-500 transition-colors hover:text-white">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-4">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 transition-colors hover:text-white"
                aria-label={`${label} profile`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
