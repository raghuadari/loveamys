'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const galleryItems = [
  {
    id: 1,
    type: 'image',
    title: 'Birthday Cake Collection',
    description: 'Our most popular birthday cake designs',
    placeholder: '🎂 Birthday Cakes'
  },
  {
    id: 2,
    type: 'video',
    title: 'Baking Process',
    description: 'Watch how we make our signature sourdough bread',
    placeholder: '🎥 Baking Process'
  },
  {
    id: 3,
    type: 'image',
    title: 'Cookie Assortment',
    description: 'Our daily selection of freshly baked cookies',
    placeholder: '🍪 Cookie Collection'
  },
  {
    id: 4,
    type: 'image',
    title: 'Wedding Cakes',
    description: 'Elegant wedding cake designs for your special day',
    placeholder: '💒 Wedding Cakes'
  },
  {
    id: 5,
    type: 'video',
    title: 'Cupcake Decorating',
    description: 'Behind the scenes of our cupcake decoration process',
    placeholder: '🎥 Cupcake Decorating'
  },
  {
    id: 6,
    type: 'image',
    title: 'Bread Collection',
    description: 'Our artisan bread selection',
    placeholder: '🍞 Bread Collection'
  }
];

export default function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Take a peek at our delicious creations and behind-the-scenes moments.
            Every item is crafted with love and attention to detail.
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedItem(item)}
                className="relative cursor-pointer group"
              >
                <div className="aspect-w-16 aspect-h-9 bg-pink-50 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl">
                    {item.placeholder}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to view
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Modal */}
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-white rounded-lg max-w-4xl w-full p-6"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                <div className="aspect-w-16 aspect-h-9 bg-pink-50 rounded-lg mb-4">
                  <div className="flex items-center justify-center text-4xl">
                    {selectedItem.placeholder}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedItem.title}</h3>
                <p className="text-gray-600">{selectedItem.description}</p>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
} 