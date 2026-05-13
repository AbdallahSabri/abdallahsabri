'use client';

import { useIsMobile } from '@/hooks/useIsMobile';
import { ReactNode } from 'react';

type Props = {
  position: 'mobile' | 'desktop';
  children: ReactNode;
};

export default function HeroCardSlot({ position, children }: Props) {
  const isMobile = useIsMobile();
  if (position === 'mobile' && !isMobile) return null;
  if (position === 'desktop' && isMobile) return null;
  return <>{children}</>;
}
