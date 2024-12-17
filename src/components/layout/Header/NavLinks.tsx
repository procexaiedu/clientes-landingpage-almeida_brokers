import React from 'react';
import { NavLink } from './NavLink';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#properties', label: 'Properties' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' }
];

export function NavLinks() {
  return (
    <nav className="flex items-center space-x-6">
      {links.map(({ href, label }) => (
        <NavLink key={href} href={href}>{label}</NavLink>
      ))}
    </nav>
  );
}