import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { FormInput } from './FormInput';
import { Select } from './Select';
import { Textarea } from './Textarea';
import { Checkbox } from './Checkbox';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  propertyCount: string;
  contactMethod: string;
  message: string;
  consent: boolean;
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  address: '',
  propertyCount: '1',
  contactMethod: 'email',
  message: '',
  consent: false
};

const propertyCountOptions = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6+', label: '6 or more' }
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('success');
    // Handle form submission logic here
  };

  return (
    <Section id="contact" className="bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Let's Discuss Your Property</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Full Name"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            />
            
            <FormInput
              label="Email Address"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            
            <Select
              label="Number of Properties"
              options={propertyCountOptions}
              value={formData.propertyCount}
              onChange={(e) => setFormData({...formData, propertyCount: e.target.value})}
            />
          </div>

          <FormInput
            label="Property Address"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
          />

          <Textarea
            label="Message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />

          <Checkbox
            required
            checked={formData.consent}
            onChange={(e) => setFormData({...formData, consent: e.target.checked})}
            label={
              <>
                I consent to having this website store my submitted information so they can respond
                to my inquiry. View our privacy policy for more information.
              </>
            }
          />

          <Button type="submit" className="w-full py-3">
            Submit Inquiry
          </Button>
        </form>

        {status === 'success' && (
          <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
            Thank you for your inquiry. We'll be in touch shortly.
          </div>
        )}

        {status === 'error' && (
          <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
            An error occurred. Please try again later.
          </div>
        )}
      </div>
    </Section>
  );
}