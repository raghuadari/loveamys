import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Hash fragment URLs (#about, #menu, etc.) are not valid sitemap entries —
    // Google ignores fragment identifiers. Add real page URLs here as the site grows.
  ]
}
