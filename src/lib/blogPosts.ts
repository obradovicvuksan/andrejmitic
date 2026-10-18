import { createReader } from '@keystatic/core/reader'
import keystaticReaderConfig from './keystaticReaderConfig'

export const reader = createReader(process.cwd(), keystaticReaderConfig)

export type BlogPost = Awaited<ReturnType<typeof reader.collections.posts.all>>[number]

function timestamp(value?: string | null) {
  return value ? new Date(value).getTime() : 0
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const posts = await reader.collections.posts.all()
  return [...posts].sort((a, b) => timestamp(b.entry.publishedAt) - timestamp(a.entry.publishedAt))
}

export async function getBlogPost(slug: string) {
  return reader.collections.posts.read(slug)
}

export function formatBlogDate(value?: string | null, month: 'long' | 'short' = 'long') {
  if (!value) return null
  return new Date(value).toLocaleDateString('sr-Latn-RS', {
    year: 'numeric',
    month,
    day: 'numeric',
  })
}
