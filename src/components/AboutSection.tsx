'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { BUSINESS } from '@/lib/business';
import type { ComponentType } from 'react';

const WhatsAppIcon = FaWhatsapp as ComponentType<{ className?: string }>;

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-deep mb-8">
            Baked with Love, by Amy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <p className="text-lg text-brand-dark mb-6">
                Welcome to Love, Amy's — a home bakery in Nallagandla, Hyderabad where
                everything is baked fresh, just for you.
              </p>
              <p className="text-lg text-brand-dark mb-6">
                We're FSSAI registered and love what we do: from custom celebration cakes and
                Korean cream cheese buns to cheesecakes, sourdough bread, and bombolinis.
                Every item is made to order with the best ingredients we can find.
              </p>
              <p className="text-lg text-brand-dark">
                Whether you're celebrating something big or just want to treat yourself on a
                Tuesday — we're here for it. Free delivery on orders above{' '}
                {BUSINESS.delivery.freeAbove} across Hyderabad.
              </p>
              <motion.a
                href={BUSINESS.whatsappGroup}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <WhatsAppIcon className="w-5 h-5" />
                Get updates &amp; deals on WhatsApp
              </motion.a>
            </div>
            <div className="bg-brand-cream rounded-2xl p-6 flex items-center justify-center">
              <Image
                src="/images/amy-ghibli.png"
                alt="Amy's Ghibli Picture"
                width={400}
                height={400}
                className="rounded-lg object-contain w-full max-w-sm"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
