// Server component — no 'use client' needed (no hooks, no interactivity)
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { BUSINESS } from '@/lib/business';
import type { ComponentType } from 'react';

type FaIcon = ComponentType<{ className?: string }>;

const socialLinks: { href: string; label: string; Icon: FaIcon }[] = [
  { href: BUSINESS.social.instagram, label: 'Instagram',  Icon: FaInstagram as FaIcon },
  { href: BUSINESS.social.facebook,  label: 'Facebook',   Icon: FaFacebook  as FaIcon },
  { href: BUSINESS.social.youtube,   label: 'YouTube',    Icon: FaYoutube   as FaIcon },
  { href: BUSINESS.social.twitter,   label: 'Twitter',    Icon: FaTwitter   as FaIcon },
  { href: `https://wa.me/${BUSINESS.phone.wa}`, label: 'WhatsApp', Icon: FaWhatsapp as FaIcon },
];

export default function Footer() {
  return (
    <footer className="bg-brand-deep text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand + Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">{BUSINESS.name}</h3>
            <p className="text-brand-gold mb-4">Freshly baked with love, just for you.</p>
            <div className="flex gap-4">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-brand-gold hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Find Us</h3>
            <p className="text-brand-gold">
              Email: {BUSINESS.email}<br />
              Phone: {BUSINESS.phone.display}<br />
              Hours: {BUSINESS.hours.display}<br />
              Address: {BUSINESS.address.full}
            </p>
          </div>

          {/* Delivery */}
          <div>
            <h3 className="text-xl font-bold mb-4">Getting Your Order</h3>
            <p className="text-brand-gold">
              🚚 Free delivery on orders above {BUSINESS.delivery.freeAbove}<br />
              Small delivery fee for orders under {BUSINESS.delivery.freeAbove}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-dark text-center text-brand-gold">
          <p>&copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
