/**
 * Single source of truth for all business data.
 * Update here when hours, contact info, or social handles change.
 */
export const BUSINESS = {
  name: "Love, Amy's Bakery",

  phone: {
    display: '+91 90598 88990',
    /** Used in WhatsApp wa.me links */
    wa: '919059888990',
  },

  email: 'loveamys.bakes@gmail.com',

  address: {
    street: 'Shop no 8, M Block Basement, Aparna Cyberzon',
    locality: 'Nallagandla',
    city: 'Hyderabad',
    pincode: '500019',
    /** Full single-line version for display */
    full: 'Shop no 8, M Block Basement, Aparna Cyberzon, Nallagandla, Hyderabad - 500019',
  },

  hours: {
    display: 'Tue-Sun 11am-5pm',
    /** Schema.org day names */
    days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const,
    opens: '11:00',
    closes: '17:00',
  },

  geo: {
    latitude: 17.385,
    longitude: 78.4867,
  },

  delivery: {
    freeAbove: '₹1000',
    note: 'Free delivery on orders above ₹1000',
  },

  /** WhatsApp community group invite link */
  whatsappGroup: 'https://chat.whatsapp.com/GbR024obUrW5SYHoTLrobA',

  social: {
    instagram: 'https://instagram.com/loveamys.bakes',
    facebook: 'https://facebook.com/loveamys.bakes',
    youtube: 'https://youtube.com/@loveamysbakes',
    twitter: 'https://twitter.com/loveamysbakes',
  },
} as const;
