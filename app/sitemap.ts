import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://rumisense.com', lastModified: new Date() },
    { url: 'https://rumisense.com/service', lastModified: new Date() },
    { url: 'https://rumisense.com/flow', lastModified: new Date() },
    { url: 'https://rumisense.com/about', lastModified: new Date() },
    { url: 'https://rumisense.com/blog', lastModified: new Date() },
    { url: 'https://rumisense.com/contact', lastModified: new Date() },
  ]
}
