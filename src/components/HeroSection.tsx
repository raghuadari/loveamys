'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { BUSINESS } from '@/lib/business';
import type { ComponentType } from 'react';

type FaIcon = ComponentType<{ className?: string }>;

const socialLinks: { href: string; label: string; Icon: FaIcon }[] = [
  { href: BUSINESS.social.instagram, label: 'Follow us on Instagram',           Icon: FaInstagram as FaIcon },
  { href: BUSINESS.social.facebook,  label: 'Follow us on Facebook',            Icon: FaFacebook  as FaIcon },
  { href: BUSINESS.social.youtube,   label: 'Subscribe to our YouTube channel', Icon: FaYoutube   as FaIcon },
  { href: BUSINESS.social.twitter,   label: 'Follow us on Twitter',             Icon: FaTwitter   as FaIcon },
  { href: `https://wa.me/${BUSINESS.phone.wa}`, label: 'Contact us on WhatsApp', Icon: FaWhatsapp as FaIcon },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gradient-to-b from-brand-cream to-white pt-[84px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <Image
            src="/images/loveamys-logo-tight.png"
            alt="Love Amy's Bakery Logo"
            width={753}
            height={380}
            className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg"
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold text-brand-deep mb-4"
        >
          Freshly baked with love
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-brand-dark mb-8"
        >
          Just for you 💖
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#menu"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-brand-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-brand-dark transition-colors"
        >
          See What's Baking
        </motion.a>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex justify-center space-x-6"
        >
          {socialLinks.map(({ href, label, Icon }) => (
            <motion.a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-dark hover:text-brand-primary transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 rounded-full p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={label}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
