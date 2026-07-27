'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

<<<<<<< HEAD
    window.addEventListener('scroll', toggleVisibility);
=======
    window.addEventListener('scroll', toggleVisibility, { passive: true });
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          onClick={scrollToTop}
<<<<<<< HEAD
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 group"
=======
          className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-brand-primary hover:bg-brand-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 group"
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)
          aria-label="Back to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg 
            className="w-6 h-6 mx-auto transition-transform duration-300 group-hover:-translate-y-0.5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
} 