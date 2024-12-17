import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { HeroContent } from './HeroContent';
import { HeroBackground } from './HeroBackground';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <HeroBackground />
      <HeroContent />
    </div>
  );
}