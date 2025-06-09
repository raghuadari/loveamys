'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Add your actual image paths here
const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/vanilla cake.JPG',
    alt: 'Vanilla Cake'
  },
  {
    id: 2,
    src: '/images/gallery/strawberry cake.JPG',
    alt: 'Strawberry Cake'
  },
  {
    id: 3,
    src: '/images/gallery/purple cake.JPG',
    alt: 'Purple Cake'
  },
  {
    id: 4,
    src: '/images/gallery/chocolate cake.JPG',
    alt: 'Chocolate Cake'
  },
  {
    id: 5,
    src: '/images/gallery/chocolate mango cake.jpg',
    alt: 'Chocolate Mango Cake'
  },
  {
    id: 6,
    src: '/images/gallery/Gems Cake.JPG',
    alt: 'Gems Cake'
  },
  {
    id: 7,
    src: '/images/gallery/plain cheese cake.JPG',
    alt: 'Plain Cheesecake'
  },
  {
    id: 8,
    src: '/images/gallery/nutella cheese cake.JPG',
    alt: 'Nutella Cheesecake'
  },
  {
    id: 9,
    src: '/images/gallery/mango cheesecake.JPG',
    alt: 'Mango Cheesecake'
  },
  {
    id: 10,
    src: '/images/gallery/mango tres leches.JPG',
    alt: 'Mango Tres Leches'
  },
  {
    id: 11,
    src: '/images/gallery/mango cc.JPG',
    alt: 'Mango CC'
  },
  {
    id: 12,
    src: '/images/gallery/bombolinis.JPG',
    alt: 'Bombolinis'
  },
  {
    id: 13,
    src: '/images/gallery/breads.JPG',
    alt: 'Breads'
  },
  {
    id: 14,
    src: '/images/gallery/Chocolate loaf.JPG',
    alt: 'Chocolate Loaf'
  },
  {
    id: 15,
    src: '/images/gallery/babka.JPG',
    alt: 'Babka'
  },
  {
    id: 16,
    src: '/images/gallery/Muffins.JPG',
    alt: 'Muffins'
  },
  {
    id: 17,
    src: '/images/gallery/whole wheat muffins.jpg',
    alt: 'Whole Wheat Muffins'
  },
  {
    id: 18,
    src: '/images/gallery/cookies.JPG',
    alt: 'Cookies'
  },
  {
    id: 19,
    src: '/images/gallery/Chocochip Cookies.JPG',
    alt: 'Chocochip Cookies'
  },
  {
    id: 20,
    src: '/images/gallery/Double Chocolate Cookies.JPG',
    alt: 'Double Chocolate Cookies'
  },
  {
    id: 21,
    src: '/images/gallery/ragi biscuits.JPG',
    alt: 'Ragi Biscuits'
  },
  {
    id: 22,
    src: '/images/gallery/macaroons.JPG',
    alt: 'Macaroons'
  },
  {
    id: 23,
    src: '/images/gallery/assorted macaroons.JPG',
    alt: 'Assorted Macaroons'
  },
  {
    id: 24,
    src: '/images/gallery/assorted.JPG',
    alt: 'Assorted Items'
  },
  {
    id: 25,
    src: '/images/gallery/Products.jpg',
    alt: 'Products'
  }
];

export default function GalleryCarousel() {
  return (
    <section id="gallery" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Creations
          </h2>
        </motion.div>

        {/* Scrolling Carousel */}
        <div className="relative">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Carousel Container */}
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 text-sm">
            ← Scroll to see more →
          </p>
        </motion.div>
      </div>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
} 