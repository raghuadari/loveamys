import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://loveamys.netlify.app/#localbusiness",
        "name": "Love, Amy's Bakery",
        "description": "Best home bakery in Nallagandla, Hyderabad. Fresh cakes, pastries, bread, and desserts made with love. Free delivery above ₹1000.",
        "url": "https://loveamys.netlify.app",
        "telephone": "+91-9059888990",
        "email": "contact@loveamys.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Aparna Cyberzon",
          "addressLocality": "Nallagandla",
          "addressRegion": "Hyderabad",
          "addressCountry": "IN",
          "postalCode": "500019"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 17.3850,
          "longitude": 78.4867
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "20:00"
          }
        ],
        "priceRange": "₹₹",
        "paymentAccepted": ["Cash", "UPI", "Bank Transfer"],
        "currenciesAccepted": "INR",
        "areaServed": {
          "@type": "City",
          "name": "Hyderabad"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Bakery Menu",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "FoodEstablishment",
                "name": "Custom Cakes",
                "description": "Fresh custom cakes for all occasions"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "FoodEstablishment",
                "name": "Pastries",
                "description": "Fresh pastries and desserts"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "FoodEstablishment",
                "name": "Bread",
                "description": "Fresh bread and baked goods"
              }
            }
          ]
        },
        "sameAs": [
          "https://instagram.com/loveamys.bakes",
          "https://facebook.com/loveamys.bakes",
          "https://youtube.com/@loveamysbakes",
          "https://twitter.com/loveamysbakes"
        ],
        "image": [
          "https://loveamys.netlify.app/images/loveamys-logo.png",
          "https://loveamys.netlify.app/images/amy-ghibli.png"
        ],
        "logo": "https://loveamys.netlify.app/images/loveamys-logo.png",
        "foundingDate": "2023",
        "foundingLocation": {
          "@type": "Place",
          "name": "Nallagandla, Hyderabad"
        },
        "knowsAbout": [
          "Baking",
          "Cake Making",
          "Pastry Making",
          "Bread Making",
          "Custom Cakes",
          "Wedding Cakes",
          "Birthday Cakes"
        ],
        "hasCredential": "FSSAI Registered",
        "deliveryArea": {
          "@type": "City",
          "name": "Hyderabad"
        },
        "deliveryCharge": "Free delivery above ₹1000",
        "minimumOrderAmount": "₹100"
      },
      {
        "@type": "FoodEstablishment",
        "@id": "https://loveamys.netlify.app/#foodestablishment",
        "name": "Love, Amy's Bakery",
        "servesCuisine": ["Bakery", "Desserts", "Cakes", "Pastries", "Bread"],
        "menu": "https://loveamys.netlify.app/#menu",
        "acceptsReservations": false,
        "takeout": true,
        "delivery": true,
        "priceRange": "₹₹",
        "paymentAccepted": ["Cash", "UPI", "Bank Transfer"],
        "currenciesAccepted": "INR",
        "hasMenu": {
          "@type": "Menu",
          "name": "Love Amy's Bakery Menu",
          "url": "https://loveamys.netlify.app/#menu",
          "hasMenuSection": [
            {
              "@type": "MenuSection",
              "name": "Cakes",
              "hasMenuItem": [
                {
                  "@type": "MenuItem",
                  "name": "Classic Vanilla Cake",
                  "description": "Fresh vanilla cake made to order",
                  "offers": {
                    "@type": "Offer",
                    "price": "Contact for pricing",
                    "priceCurrency": "INR"
                  }
                },
                {
                  "@type": "MenuItem",
                  "name": "Chocolate Cake",
                  "description": "Rich chocolate cake made to order",
                  "offers": {
                    "@type": "Offer",
                    "price": "Contact for pricing",
                    "priceCurrency": "INR"
                  }
                }
              ]
            },
            {
              "@type": "MenuSection",
              "name": "Cheesecakes",
              "hasMenuItem": [
                {
                  "@type": "MenuItem",
                  "name": "Plain Cheesecake",
                  "description": "Classic New York style cheesecake",
                  "offers": {
                    "@type": "Offer",
                    "price": "Contact for pricing",
                    "priceCurrency": "INR"
                  }
                }
              ]
            },
            {
              "@type": "MenuSection",
              "name": "Breads",
              "hasMenuItem": [
                {
                  "@type": "MenuItem",
                  "name": "Sourdough Bread",
                  "description": "Fresh sourdough bread",
                  "offers": {
                    "@type": "Offer",
                    "price": "Contact for pricing",
                    "priceCurrency": "INR"
                  }
                }
              ]
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://loveamys.netlify.app/#website",
        "url": "https://loveamys.netlify.app",
        "name": "Love, Amy's Bakery",
        "description": "Best home bakery in Nallagandla, Hyderabad. Fresh cakes, pastries, bread, and desserts made with love.",
        "publisher": {
          "@id": "https://loveamys.netlify.app/#localbusiness"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://loveamys.netlify.app/#menu"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-IN"
      },
      {
        "@type": "Organization",
        "@id": "https://loveamys.netlify.app/#organization",
        "name": "Love, Amy's Bakery",
        "url": "https://loveamys.netlify.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://loveamys.netlify.app/images/loveamys-logo.png",
          "width": 300,
          "height": 100
        },
        "sameAs": [
          "https://instagram.com/loveamys.bakes",
          "https://facebook.com/loveamys.bakes",
          "https://youtube.com/@loveamysbakes",
          "https://twitter.com/loveamysbakes"
        ]
      }
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 