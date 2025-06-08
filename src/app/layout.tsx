import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  title: "Love Amy's Bakery | Home Bakery",
  description: "A modern home bakery offering delicious treats made with love. Freshly baked goods, custom orders, and more!",
  keywords: "bakery, home bakery, custom cakes, pastries, bread, desserts, Gen Z bakery",
  icons: {
    icon: '/images/loveamys-logo.png',
    apple: '/images/loveamys-logo.png',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Love Amy's Bakery",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
