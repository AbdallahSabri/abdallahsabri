"use client";

import { useState } from "react";

interface AccordionProps {
  question: string;
  answer: string;
}

export default function Accordion({ question, answer }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#18181b]">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-6 py-5 text-left font-medium text-white transition-colors hover:bg-white/5"
      >
        <span>{question}</span>
        <svg
          className={`ml-4 h-5 w-5 flex-shrink-0 text-indigo-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${open ? "max-h-[600px]" : "max-h-0"}`}
      >
        <p className="px-6 py-5 text-sm leading-relaxed text-zinc-400 border-t">{answer}</p>
      </div>
    </div>
  );
}
