import React from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'px-4 py-2 rounded-lg transition-colors',
        {
          'bg-indigo-600 text-white hover:bg-indigo-700': variant === 'primary',
          'bg-white text-gray-900 hover:bg-gray-50': variant === 'secondary',
          'border-2 border-white text-white hover:bg-white/10': variant === 'outline',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}