'use client';

import Navigation from '@/components/Navigation';
import MenuSection from '@/components/MenuSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GalleryCarousel from '@/components/GalleryCarousel';
import ErrorBoundary from '@/components/ErrorBoundary';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FaIcons from 'react-icons/fa';
import Image from 'next/image';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import GallerySection from '@/components/GallerySection';

export default function Home() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <main className="min-h-screen">
        <Navigation />
        
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={heroInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <Image
                src="/images/loveamys-logo.png"
                alt="Love Amy's Bakery Logo"
                width={300}
                height={100}
                className="mx-auto"
                priority
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-4"
            >
              Freshly baked with love
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 mb-4"
            >
              Just for you 💖
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-8"
            >
              <p className="text-lg text-pink-600 font-medium">
                ✨ All items are made fresh to order with a minimum 24-hour notice ✨
              </p>
              <p className="text-lg text-green-600 font-medium mt-2">
                🚚 Free delivery on orders above ₹1000 | 💰 Delivery charges apply below ₹1000
              </p>
            </motion.div>
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-pink-700 transition-colors"
            >
              View Our Menu
            </motion.a>
            
            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 flex justify-center space-x-6"
            >
              <motion.a
                href="https://instagram.com/loveamys.bakes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-full p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Follow us on Instagram"
              >
                {FaIcons.FaInstagram({ className: "w-6 h-6" })}
              </motion.a>
              <motion.a
                href="https://facebook.com/loveamys.bakes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-full p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Follow us on Facebook"
              >
                {FaIcons.FaFacebook({ className: "w-6 h-6" })}
              </motion.a>
              <motion.a
                href="https://youtube.com/@loveamysbakes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-full p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Subscribe to our YouTube channel"
              >
                {FaIcons.FaYoutube({ className: "w-6 h-6" })}
              </motion.a>
              <motion.a
                href="https://twitter.com/loveamysbakes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-full p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Follow us on Twitter"
              >
                {FaIcons.FaTwitter({ className: "w-6 h-6" })}
              </motion.a>
              <motion.a
                href="https://wa.me/919059888990"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-full p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Contact us on WhatsApp"
              >
                {FaIcons.FaWhatsapp({ className: "w-6 h-6" })}
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                About Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <p className="text-lg text-gray-600 mb-6">
                    Welcome to Love Amy's Bakery, the best home bakery in Nallagandla, Hyderabad! We're an FSSAI registered bakery
                    dedicated to creating delicious treats that bring joy to your special moments.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    Located in Aparna Cyberzon, Nallagandla, we serve the entire Hyderabad area with fresh, homemade cakes, 
                    pastries, bread, and desserts. Every item is baked with love and the finest ingredients, just for you.
                  </p>
                  <p className="text-lg text-gray-600 mb-6">
                    Whether you're celebrating a special occasion or just treating yourself, we're here
                    to make your day a little sweeter. We offer free delivery for orders above ₹1000 across Hyderabad.
                  </p>
                  <p className="text-lg text-gray-600">
                    From custom wedding cakes to daily bread, from Korean cheese buns to classic cheesecakes - 
                    we're your trusted FSSAI registered local bakery in Nallagandla, Hyderabad.
                  </p>
                  <motion.a
                    href="https://chat.whatsapp.com/GbR024obUrW5SYHoTLrobA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-green-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join Our WhatsApp Group 📱
                  </motion.a>
                </div>
                <div className="bg-pink-50 rounded-2xl p-8">
                  <Image
                    src="/images/amy-ghibli.png"
                    alt="Amy's Ghibli Picture"
                    width={220}
                    height={180}
                    className="rounded-lg object-contain mx-auto"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <GalleryCarousel />
        <MenuSection />
        <TestimonialsSection />

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Love, Amy's Bakery</h3>
                <p className="text-gray-400">
                  Freshly baked with love, just for you.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="text-gray-400">
                  Email: loveamys.bakes@gmail.com<br />
                  Phone: +91 90598 88990<br />
                  Hours: Tue-Sun 11am-5pm<br />
                  Address: Shop no 8, M Block Basement, Aparna Cyberzon, Nallagandla, Hyderabad - 500019
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Delivery Information</h3>
                <p className="text-gray-400">
                  🚚 Free delivery on orders above ₹1000<br />
                  💰 Delivery charges apply for orders below ₹1000
                </p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Love, Amy's Bakery. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </ErrorBoundary>
  );
}
