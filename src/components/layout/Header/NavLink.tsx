import React from 'react';
import { cn } from '@/utils/cn';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <a 
      href={href} 
      className={cn(
        "text-gray-600 hover:text-gray-900 transition-colors",
        className
      )}
    >
      {children}
    </a>
  );
}