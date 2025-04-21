import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Aldin's technical expertise and leadership skills have been instrumental in our team's success. His ability to mentor others while delivering high-quality code is exceptional.",
      author: "Sarah Chen",
      role: "Engineering Director",
      company: "TechCorp"
    },
    {
      quote: "Working with Aldin has been transformative for our frontend architecture. His deep knowledge of Vue.js and component design patterns elevated our entire development process.",
      author: "Marcus Rodriguez",
      role: "CTO",
      company: "StartupHub"
    }
  ];

  return (
    <section className="mb-8">
      <h2 className="section-title">What People Say</h2>
      
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 relative"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200 dark:text-blue-900" />
            <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
              "{testimonial.quote}"
            </blockquote>
            <div className="mt-4">
              <cite className="not-italic font-medium text-gray-900 dark:text-white">
                {testimonial.author}
              </cite>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {testimonial.role} at {testimonial.company}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;