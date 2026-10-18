import type { MetadataRoute } from 'next'
import { practiceAreas } from '@/data/practiceAreas'
import { getBlogPosts } from '@/lib/blogPosts'
import { absoluteUrl } from '@/lib/seo'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const posts = await getBlogPosts()

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/oblasti-rada'), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/o-meni'), lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: absoluteUrl('/blog'), lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ]

  const practicePages: MetadataRoute.Sitemap = practiceAreas.map((area) => ({
    url: absoluteUrl(`/oblasti-rada/${area.slug}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.entry.updatedAt || post.entry.publishedAt || now),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...practicePages, ...blogPages]
}
