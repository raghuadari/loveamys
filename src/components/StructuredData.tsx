import Script from 'next/script';
import { BUSINESS } from '@/lib/business';
import { SITE_URL } from '@/lib/config';

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${SITE_URL}/#localbusiness`,
        name: BUSINESS.name,
        description:
          'Best home bakery in Nallagandla, Hyderabad. Fresh cakes, pastries, bread, and desserts made with love. Free delivery above ₹1000.',
        url: SITE_URL,
        telephone: BUSINESS.phone.display,
        email: BUSINESS.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: BUSINESS.address.street,
          addressLocality: BUSINESS.address.locality,
          addressRegion: BUSINESS.address.city,
          addressCountry: 'IN',
          postalCode: BUSINESS.address.pincode,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: BUSINESS.geo.latitude,
          longitude: BUSINESS.geo.longitude,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: BUSINESS.hours.days,
            opens: BUSINESS.hours.opens,
            closes: BUSINESS.hours.closes,
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: '5',
          bestRating: '5',
          worstRating: '1',
        },
        priceRange: '₹₹',
        paymentAccepted: ['Cash', 'UPI', 'Bank Transfer'],
        currenciesAccepted: 'INR',
        areaServed: { '@type': 'City', name: BUSINESS.address.city },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Bakery Menu',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'FoodEstablishment', name: 'Custom Cakes', description: 'Fresh custom cakes for all occasions' } },
            { '@type': 'Offer', itemOffered: { '@type': 'FoodEstablishment', name: 'Pastries',     description: 'Fresh pastries and desserts' } },
            { '@type': 'Offer', itemOffered: { '@type': 'FoodEstablishment', name: 'Bread',        description: 'Fresh bread and baked goods' } },
          ],
        },
        sameAs: Object.values(BUSINESS.social),
        image: [
          `${SITE_URL}/images/loveamys-logo.png`,
          `${SITE_URL}/images/amy-ghibli.png`,
        ],
        logo: `${SITE_URL}/images/loveamys-logo.png`,
        foundingDate: '2023',
        foundingLocation: { '@type': 'Place', name: `${BUSINESS.address.locality}, ${BUSINESS.address.city}` },
        knowsAbout: ['Baking', 'Cake Making', 'Pastry Making', 'Bread Making', 'Custom Cakes', 'Wedding Cakes', 'Birthday Cakes'],
        hasCredential: 'FSSAI Registered',
        deliveryArea: { '@type': 'City', name: BUSINESS.address.city },
        deliveryCharge: BUSINESS.delivery.note,
        minimumOrderAmount: '₹100',
      },
      {
        '@type': 'FoodEstablishment',
        '@id': `${SITE_URL}/#foodestablishment`,
        name: BUSINESS.name,
        servesCuisine: ['Bakery', 'Desserts', 'Cakes', 'Pastries', 'Bread'],
        menu: `${SITE_URL}/#menu`,
        acceptsReservations: false,
        takeout: true,
        delivery: true,
        priceRange: '₹₹',
        paymentAccepted: ['Cash', 'UPI', 'Bank Transfer'],
        currenciesAccepted: 'INR',
        hasMenu: {
          '@type': 'Menu',
          name: "Love Amy's Bakery Menu",
          url: `${SITE_URL}/#menu`,
          hasMenuSection: [
            {
              '@type': 'MenuSection',
              name: 'Cakes',
              hasMenuItem: [
                { '@type': 'MenuItem', name: 'Classic Vanilla Cake', description: 'Fresh vanilla cake made to order', offers: { '@type': 'Offer', price: 'Contact for pricing', priceCurrency: 'INR' } },
                { '@type': 'MenuItem', name: 'Chocolate Cake',       description: 'Rich chocolate cake made to order', offers: { '@type': 'Offer', price: 'Contact for pricing', priceCurrency: 'INR' } },
              ],
            },
            {
              '@type': 'MenuSection',
              name: 'Cheesecakes',
              hasMenuItem: [
                { '@type': 'MenuItem', name: 'Plain Cheesecake', description: 'Classic New York style cheesecake', offers: { '@type': 'Offer', price: 'Contact for pricing', priceCurrency: 'INR' } },
              ],
            },
            {
              '@type': 'MenuSection',
              name: 'Breads',
              hasMenuItem: [
                { '@type': 'MenuItem', name: 'Sourdough Bread', description: 'Fresh sourdough bread', offers: { '@type': 'Offer', price: 'Contact for pricing', priceCurrency: 'INR' } },
              ],
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BUSINESS.name,
        description: 'Best home bakery in Nallagandla, Hyderabad. Fresh cakes, pastries, bread, and desserts made with love.',
        publisher: { '@id': `${SITE_URL}/#localbusiness` },
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/#menu` },
            'query-input': 'required name=search_term_string',
          },
        ],
        inLanguage: 'en-IN',
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: BUSINESS.name,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/loveamys-logo.png`,
          width: 1000,
          height: 680,
        },
        sameAs: Object.values(BUSINESS.social),
      },
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
