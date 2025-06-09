'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayInterval = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !selectedImage) {
      autoPlayInterval.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
        scrollToImage((currentIndex + 1) % galleryImages.length);
      }, 3000);
    }

    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [isAutoPlaying, selectedImage, currentIndex, galleryImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'Escape') {
          setSelectedImage(null);
        } else if (e.key === 'ArrowLeft') {
          const currentIdx = galleryImages.findIndex(img => img.id === selectedImage.id);
          const prevIdx = (currentIdx - 1 + galleryImages.length) % galleryImages.length;
          setSelectedImage(galleryImages[prevIdx]);
        } else if (e.key === 'ArrowRight') {
          const currentIdx = galleryImages.findIndex(img => img.id === selectedImage.id);
          const nextIdx = (currentIdx + 1) % galleryImages.length;
          setSelectedImage(galleryImages[nextIdx]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, galleryImages]);

  const scrollToImage = (index: number) => {
    if (carouselRef.current) {
      const imageWidth = 320 + 24; // image width + gap
      carouselRef.current.scrollTo({
        left: index * imageWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleImageClick = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    setIsAutoPlaying(false);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
    setIsAutoPlaying(true);
  };

  const navigateModal = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const currentIdx = galleryImages.findIndex(img => img.id === selectedImage.id);
    const newIdx = direction === 'prev' 
      ? (currentIdx - 1 + galleryImages.length) % galleryImages.length
      : (currentIdx + 1) % galleryImages.length;
    setSelectedImage(galleryImages[newIdx]);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

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
          
          {/* Auto-play toggle */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isAutoPlaying 
                  ? 'bg-pink-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>
            
            {/* Progress indicator */}
            <div className="flex gap-1">
              {galleryImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-pink-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scrolling Carousel */}
        <div className="relative">
          {/* Gradient Overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Navigation Arrows */}
          <button
            onClick={() => {
              const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
              setCurrentIndex(newIndex);
              scrollToImage(newIndex);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
            aria-label="Previous image"
          >
            ←
          </button>
          
          <button
            onClick={() => {
              const newIndex = (currentIndex + 1) % galleryImages.length;
              setCurrentIndex(newIndex);
              scrollToImage(newIndex);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all hover:scale-110"
            aria-label="Next image"
          >
            →
          </button>
          
          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            onScroll={(e: React.UIEvent<HTMLDivElement>) => {
              const target = e.target as HTMLDivElement;
              const scrollLeft = target.scrollLeft;
              const imageWidth = 320 + 24; // image width + gap
              const newIndex = Math.round(scrollLeft / imageWidth);
              setCurrentIndex(newIndex);
            }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-80 h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 snap-start cursor-pointer hover:scale-105"
                onClick={() => handleImageClick(image)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Loading skeleton */}
                {isLoading && (
                  <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="text-gray-400">Loading...</div>
                  </div>
                )}
                
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  onLoad={handleImageLoad}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
            ← Scroll or use arrows to navigate • Click to zoom →
          </p>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={handleModalClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Navigation */}
              <button
                onClick={() => navigateModal('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-all hover:scale-110"
                aria-label="Previous image"
              >
                ←
              </button>
              
              <button
                onClick={() => navigateModal('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-all hover:scale-110"
                aria-label="Next image"
              >
                →
              </button>
              
              {/* Close button */}
              <button
                onClick={handleModalClose}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white transition-all hover:scale-110"
                aria-label="Close modal"
              >
                ✕
              </button>
              
              {/* Image */}
              <div className="relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                
                {/* Image info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-xl font-semibold">{selectedImage.alt}</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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