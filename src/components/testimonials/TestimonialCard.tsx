import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
  propertyType: string;
  result: string;
}

export function TestimonialCard({
  name,
  role,
  image,
  content,
  propertyType,
  result
}: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="ml-4">
          <div className="font-semibold text-lg">{name}</div>
          <div className="text-gray-600">{role}</div>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <p className="text-gray-700 mb-4">{content}</p>
      
      <div className="border-t pt-4">
        <div className="text-sm text-gray-600">Property Type: {propertyType}</div>
        <div className="text-sm font-semibold text-indigo-600">{result}</div>
      </div>
    </div>
  );
}