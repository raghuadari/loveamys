'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
=======
import Image from 'next/image';
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'gallery', 'menu', 'testimonials'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

<<<<<<< HEAD
    window.addEventListener('scroll', handleScroll);
=======
    window.addEventListener('scroll', handleScroll, { passive: true });
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#gallery', label: 'Gallery', id: 'gallery' },
    { href: '#menu', label: 'Menu', id: 'menu' },
<<<<<<< HEAD
    { href: '#testimonials', label: 'Testimonials', id: 'testimonials' }
=======
    { href: '#testimonials', label: 'Reviews', id: 'testimonials' }
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)
  ];

  const handleSmoothScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSmoothScroll(href);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
<<<<<<< HEAD
          {/* Brand Name */}
          <motion.a
            href="#home"
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-brand-primary' : 'text-brand-deep'
            }`}
=======
          {/* Brand Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-2"
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e: React.MouseEvent) => { e.preventDefault(); handleSmoothScroll('#home'); }}
            onKeyDown={(e: React.KeyboardEvent) => handleKeyDown(e, '#home')}
            tabIndex={0}
<<<<<<< HEAD
            role="button"
            aria-label="Go to home section"
          >
            Love, Amy's
=======
            aria-label="Go to home section"
          >
            <Image
              src="/icon-heart.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-brand-primary' : 'text-brand-deep'
            }`}>
              Love, Amy's
            </span>
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8" role="menubar">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-all duration-200 relative ${
                  isScrolled
                    ? activeSection === link.id
                      ? 'text-brand-primary'
                      : 'text-gray-900 hover:text-brand-primary'
                    : activeSection === link.id
                      ? 'text-brand-primary'
                      : 'text-brand-dark hover:text-brand-primary'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e: React.MouseEvent) => { e.preventDefault(); handleSmoothScroll(link.href); }}
                onKeyDown={(e: React.KeyboardEvent) => handleKeyDown(e, link.href)}
                tabIndex={0}
                role="menuitem"
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden text-2xl p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-900 hover:bg-brand-light' : 'text-brand-dark hover:bg-brand-light'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg"
            role="menu"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`block text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'text-brand-primary bg-brand-cream'
                      : 'text-gray-900 hover:text-brand-primary hover:bg-brand-light'
                  }`}
                  whileHover={{ x: 10 }}
                  onClick={(e: React.MouseEvent) => { e.preventDefault(); handleSmoothScroll(link.href); }}
                  onKeyDown={(e: React.KeyboardEvent) => handleKeyDown(e, link.href)}
                  tabIndex={0}
                  role="menuitem"
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
