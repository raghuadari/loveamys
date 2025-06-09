import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from '@/components/StructuredData';
import BackToTop from '@/components/BackToTop';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ec4899',
  colorScheme: 'light',
};

export const metadata: Metadata = {
  title: {
    default: "Love, Amy's Bakery | Home Bakery in Nallagandla, Hyderabad | Fresh Cakes & Pastries",
    template: "%s | Love, Amy's Bakery"
  },
  description: "Best home bakery in Nallagandla, Hyderabad. Fresh cakes, pastries, bread, and desserts made with love. Free delivery above ₹1000. Order custom cakes, cheesecakes, bombolinis, and more. Located in Aparna Cyberzon, Nallagandla.",
  keywords: [
    "home bakery", "Nallagandla", "Hyderabad", "custom cakes", "fresh pastries", 
    "bread", "desserts", "cheesecake", "bombolinis", "Korean cheese buns", 
    "sourdough bread", "wedding cakes", "birthday cakes", "local bakery", 
    "Aparna Cyberzon", "free delivery", "eggless cakes", "vegetarian bakery",
    "FSSAI registered bakery", "Hyderabad bakery", "Nallagandla bakery",
    "fresh baked goods", "homemade cakes", "bakery delivery"
  ],
  authors: [{ name: "Love, Amy's Bakery", url: "https://loveamys.netlify.app" }],
  creator: "Love, Amy's Bakery",
  publisher: "Love, Amy's Bakery",
  category: "Food & Beverage",
  classification: "Bakery",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://loveamys.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Love, Amy's Bakery | Home Bakery in Nallagandla, Hyderabad",
    description: "Best home bakery in Nallagandla, Hyderabad. Fresh cakes, pastries, bread, and desserts made with love. Free delivery above ₹1000. FSSAI registered bakery.",
    url: 'https://loveamys.netlify.app',
    siteName: "Love, Amy's Bakery",
    images: [
      {
        url: '/images/loveamys-logo.png',
        width: 300,
        height: 100,
        alt: "Love, Amy's Bakery Logo",
        type: 'image/png',
      },
      {
        url: '/images/amy-ghibli.png',
        width: 220,
        height: 180,
        alt: "Amy's Ghibli Picture",
        type: 'image/png',
      }
    ],
    locale: 'en_IN',
    type: 'website',
    countryName: 'India',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Love, Amy's Bakery | Home Bakery in Nallagandla, Hyderabad",
    description: "Best home bakery in Nallagandla, Hyderabad. Fresh cakes, pastries, bread, and desserts made with love. Free delivery above ₹1000.",
    images: ['/images/loveamys-logo.png'],
    creator: '@loveamysbakes',
    site: '@loveamysbakes',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/images/loveamys-logo.png', sizes: '300x100' }
    ],
    apple: [
      { url: '/images/loveamys-logo.png', sizes: '300x100' }
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Love, Amy's Bakery",
    startupImage: [
      {
        url: '/images/loveamys-logo.png',
        media: '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
      }
    ],
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': "Love, Amy's Bakery",
    'application-name': "Love, Amy's Bakery",
    'msapplication-TileColor': '#ec4899',
    'theme-color': '#ec4899',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
