import React from 'react';

export function HeroBackground() {
  return (
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80"
        alt="Luxury Property"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
    </div>
  );
}