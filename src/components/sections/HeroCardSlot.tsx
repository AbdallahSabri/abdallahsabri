'use client';

import { useIsMobile } from '@/hooks/useIsMobile';
import HeroCard from './HeroCard';

type Props = {
  position: 'mobile' | 'desktop';
};

export default function HeroCardSlot({ position }: Props) {
  const isMobile = useIsMobile();
  if (position === 'mobile' && !isMobile) return null;
  if (position === 'desktop' && isMobile) return null;
  return <HeroCard />;
}
