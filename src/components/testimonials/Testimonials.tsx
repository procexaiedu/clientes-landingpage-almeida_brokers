import React from 'react';
import { Section } from '../ui/Section';
import { TestimonialCard } from './TestimonialCard';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </Section>
  );
}