'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Wedding Client',
    image: '/images/testimonial-1.jpg',
    text: "Amy created the most beautiful wedding cake for our special day! The design was exactly what we wanted, and it tasted even better than it looked. Our guests couldn't stop raving about it!",
    rating: 5,
    date: 'March 2024'
  },
  {
    id: 2,
    name: 'Mike Chen',
    role: 'Regular Customer',
    image: '/images/testimonial-2.jpg',
    text: "I've been getting my weekly sourdough bread from Love Amy's for over a year now. The quality is consistently amazing, and the staff is always friendly. It's become a staple in our household!",
    rating: 5,
    date: 'February 2024'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Birthday Party Host',
    image: '/images/testimonial-3.jpg',
    text: "The birthday cupcakes were a huge hit at my daughter's party! Not only were they adorable, but they were delicious too. Amy went above and beyond to make them special.",
    rating: 5,
    date: 'January 2024'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Corporate Client',
    image: '/images/testimonial-4.jpg',
    text: "We order Love Amy's cookies for our office meetings every month. They're always fresh, delicious, and beautifully packaged. The team loves them!",
    rating: 5,
    date: 'December 2023'
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Don't just take our word for it - hear what our happy customers have to say about their experience with Love Amy's Bakery.
          </p>

          {/* Testimonials Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center text-2xl mb-6">
                    👤
                  </div>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">★</span>
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-600 mb-6">
                    "{testimonials[activeIndex].text}"
                  </blockquote>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900">{testimonials[activeIndex].name}</p>
                    <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                    <p className="text-sm text-gray-500 mt-2">{testimonials[activeIndex].date}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-pink-50 transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-pink-50 transition-colors"
            >
              →
            </button>

            {/* Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-pink-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 