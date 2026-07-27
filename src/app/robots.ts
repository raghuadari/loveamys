import { MetadataRoute } from 'next'
<<<<<<< HEAD
=======
import { SITE_URL } from '@/lib/config'
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
<<<<<<< HEAD
      disallow: '/private/',
    },
    sitemap: 'https://loveamys.netlify.app/sitemap.xml',
  }
} 
=======
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)
