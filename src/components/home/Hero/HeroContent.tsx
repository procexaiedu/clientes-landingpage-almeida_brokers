import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function HeroContent() {
  return (
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          Transform Your Property Investment Into Passive Income
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Join the elite circle of property owners who trust us with their premium real estate investments. Experience unparalleled property management services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" className="flex items-center justify-center">
            Schedule a Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline">View Our Portfolio</Button>
        </div>
      </div>
    </div>
  );
}