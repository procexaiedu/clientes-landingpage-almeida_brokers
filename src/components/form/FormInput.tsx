import React from 'react';
import { Input } from '../ui/Input';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

export function FormInput({ label, required, ...props }: FormInputProps) {
  return (
    <Input
      label={`${label}${required ? ' *' : ''}`}
      {...props}
    />
  );
}