export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center"
      aria-label="Hero"
    >
      <p className="mb-4 text-sm font-medium tracking-widest text-indigo-400 uppercase">
        Available for work
      </p>

      <h1 className="mb-6 max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
        Building digital{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          experiences
        </span>{" "}
        that matter
      </h1>

      <p className="mb-10 max-w-xl text-lg leading-relaxed text-zinc-400">
        Full-stack developer crafting fast, scalable, and accessible web applications with modern
        technologies.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="#work"
          className="rounded-full bg-indigo-500 px-7 py-3 font-medium text-white transition-colors hover:bg-indigo-600"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/10 px-7 py-3 font-medium text-zinc-300 transition-colors hover:border-white/30 hover:text-white"
        >
          Get in touch
        </a>
      </div>

      <div className="mt-20 flex flex-wrap items-center justify-center gap-10 text-zinc-500">
        {["React", "Next.js", "TypeScript", "Node.js", "Tailwind"].map((tech) => (
          <span key={tech} className="text-sm font-medium">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
