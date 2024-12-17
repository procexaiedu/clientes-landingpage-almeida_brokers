import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ContactInfo() {
  return (
    <div className="flex items-center space-x-4">
      <a href="tel:+1234567890" className="flex items-center text-gray-600 hover:text-gray-900">
        <Phone className="w-4 h-4 mr-2" />
        <span>(123) 456-7890</span>
      </a>
      <Button variant="primary">Book Consultation</Button>
    </div>
  );
}