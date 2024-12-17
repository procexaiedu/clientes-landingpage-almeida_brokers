import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Anderson',
    role: 'Property Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    content: 'Since partnering with LuxEstate, my rental income has increased by 15%. Their attention to detail and premium tenant screening process is unmatched.',
    propertyType: 'Luxury Apartment Complex',
    result: '15% increase in rental income'
  },
  {
    name: 'Michael Chen',
    role: 'Investment Property Owner',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    content: 'The professional management and 24/7 support have made my life so much easier. My properties have never been in better hands.',
    propertyType: 'Multi-Family Units',
    result: '97% occupancy rate maintained'
  },
  {
    name: 'Emma Thompson',
    role: 'Property Investor',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    content: 'Their market expertise and property optimization strategies have significantly improved my portfolio's performance.',
    propertyType: 'Luxury Villas',
    result: '20% property value increase'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              
              <div className="border-t pt-4">
                <div className="text-sm text-gray-600">Property Type: {testimonial.propertyType}</div>
                <div className="text-sm font-semibold text-indigo-600">{testimonial.result}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}