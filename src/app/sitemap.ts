import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://loveamys.netlify.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Hash fragment URLs (#about, #menu, etc.) are not valid sitemap entries —
    // Google ignores fragment identifiers. Add real page URLs here as the site grows.
  ]
} 