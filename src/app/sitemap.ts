import { MetadataRoute } from 'next'
<<<<<<< HEAD
=======
import { SITE_URL } from '@/lib/config'
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
<<<<<<< HEAD
      url: 'https://loveamys.netlify.app',
=======
      url: SITE_URL,
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Hash fragment URLs (#about, #menu, etc.) are not valid sitemap entries —
    // Google ignores fragment identifiers. Add real page URLs here as the site grows.
  ]
<<<<<<< HEAD
} 
=======
}
>>>>>>> 97d1e2c (refactor: tech debt cleanup — server components, single source of truth (business.ts, config.ts, data/menu.ts), dead file removal, aria labels, magic number constants)
