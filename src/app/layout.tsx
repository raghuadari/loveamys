import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from '@/components/StructuredData';

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Love, Amy's Bakery | Home Bakery in Nallagandla, Hyderabad | Fresh Cakes & Pastries",
  description: "Best home bakery in Nallagandla, Hyderabad. Fresh cakes, pastries, bread, and desserts made with love. Free delivery above ₹1000. Order custom cakes, cheesecakes, bombolinis, and more. Located in Aparna Cyberzon, Nallagandla.",
  keywords: "home bakery, Nallagandla, Hyderabad, custom cakes, fresh pastries, bread, desserts, cheesecake, bombolinis, Korean cheese buns, sourdough bread, wedding cakes, birthday cakes, local bakery, Aparna Cyberzon, free delivery, eggless cakes, vegetarian bakery",
  authors: [{ name: "Love, Amy's Bakery" }],
  creator: "Love, Amy's Bakery",
  publisher: "Love, Amy's Bakery",
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
    description: "Best home bakery in Nallagandla, Hyderabad. Fresh cakes, pastries, bread, and desserts made with love. Free delivery above ₹1000.",
    url: 'https://loveamys.netlify.app',
    siteName: "Love, Amy's Bakery",
    images: [
      {
        url: '/images/loveamys-logo.png',
        width: 300,
        height: 100,
        alt: "Love, Amy's Bakery Logo",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Love, Amy's Bakery | Home Bakery in Nallagandla, Hyderabad",
    description: "Best home bakery in Nallagandla, Hyderabad. Fresh cakes, pastries, bread, and desserts made with love.",
    images: ['/images/loveamys-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/loveamys-logo.png',
    apple: '/images/loveamys-logo.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Love, Amy's Bakery",
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
      </body>
    </html>
  );
}
