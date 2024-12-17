import React from 'react';
import { Menu } from 'lucide-react';

export function MobileMenu() {
  return (
    <button className="md:hidden">
      <Menu className="w-6 h-6 text-gray-600" />
    </button>
  );
}