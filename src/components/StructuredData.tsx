export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Love, Amy's Bakery",
    "description": "Best home bakery in Nallagandla, Hyderabad. Fresh cakes, pastries, bread, and desserts made with love. Free delivery above ₹1000.",
    "url": "https://loveamys.netlify.app",
    "logo": "https://loveamys.netlify.app/images/loveamys-logo.png",
    "image": "https://loveamys.netlify.app/images/loveamys-logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop no 8, M Block Basement, Aparna Cyberzon",
      "addressLocality": "Nallagandla",
      "addressRegion": "Hyderabad",
      "postalCode": "500019",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.3850",
      "longitude": "78.4867"
    },
    "telephone": "+91-90598-88990",
    "email": "loveamys.bakes@gmail.com",
    "openingHours": [
      "Tu-Su 11:00-17:00"
    ],
    "priceRange": "₹₹",
    "servesCuisine": ["Bakery", "Desserts", "Pastries", "Bread"],
    "hasMenu": "https://loveamys.netlify.app/#menu",
    "sameAs": [
      "https://instagram.com/loveamys.bakes",
      "https://facebook.com/loveamys.bakes",
      "https://youtube.com/@loveamysbakes",
      "https://twitter.com/loveamysbakes"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Hyderabad",
      "containsPlace": {
        "@type": "Place",
        "name": "Nallagandla"
      }
    },
    "serviceArea": {
      "@type": "City",
      "name": "Hyderabad"
    },
    "deliveryAvailable": true,
    "paymentAccepted": ["Cash", "Digital Payment"],
    "currenciesAccepted": "INR",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "5",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Prachi"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Hello Dear, the cheesecake was so yumm, Heavenly!"
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Vidya"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "The Korean bun was yummy. Came home with a knee injury; it was wonderful comfort food😊"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 