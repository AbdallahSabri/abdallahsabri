'use client';

import { useLocale, useTranslations } from 'next-intl';
import Image from "next/image";

const statValues = ['15+', '2', '8+'];
const statKeys = ['experience', 'saas', 'remote'] as const;

export default function HeroCard() {
  const locale = useLocale();
  const t = useTranslations('Hero');

  const stats = statValues.map((value, i) => ({
    value,
    label: t(`stats.${statKeys[i]}`),
  }));

  return (
    <div className="rounded-3xl p-px mb-5 bg-[linear-gradient(135deg,rgba(123,97,255,0.65)_0%,rgba(123,97,255,0.06)_45%,rgba(123,97,255,0.06)_55%,rgba(123,97,255,0.55)_100%)]">
      <div className="flex flex-col gap-5 rounded-3xl bg-[#1A1A20] p-5">
        {/* Photo area with radial glow */}
        <div className="relative flex h-[300px] items-end justify-center overflow-hidden rounded-2xl">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] bg-[#7B61FF]/50" />
          <Image
            src="https://d3l0mjyonoq4zj.cloudfront.net/abdallah00029.png"
            priority
            width={240}
            height={320}
            alt={
              locale === 'ar'
                ? 'عبدالله صبري — مهندس برمجيات أول ومؤسس تقني'
                : 'Abdallah Sabri — Senior Software Engineer and Founding Engineer'
            }
            className="relative z-10 h-80 w-[240px] max-w-none object-contain object-bottom"
          />
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/[0.05] bg-[#0F0F12] px-3 py-4 text-center"
            >
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-xs leading-snug text-zinc-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
