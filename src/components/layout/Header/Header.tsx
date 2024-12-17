import React from 'react';
import { Menu, Phone } from 'lucide-react';
import { NavLinks } from './NavLinks';
import { ContactInfo } from './ContactInfo';
import { MobileMenu } from './MobileMenu';
import { Logo } from './Logo';

export function Header() {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <ContactInfo />
          </div>
          
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}