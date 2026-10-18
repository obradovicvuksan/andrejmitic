import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import BlogPostLayout from '@/components/BlogPostLayout'
import JsonLd from '@/components/JsonLd'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import { formatBlogDate, getBlogPost, getBlogPosts } from '@/lib/blogPosts'
import { SITE_URL, absoluteUrl, breadcrumbJsonLd, buildPageMetadata, normalizeMetaDescription } from '@/lib/seo'

export const revalidate = 60

type Props = { params: Promise<{ slug: string }> }

function metaDescription(excerpt: string | null | undefined, title: string) {
  const compact = excerpt?.replace(/\s+/g, ' ').trim()
  return normalizeMetaDescription(
    compact || `${title} – pravni tekst advokata Andreja Mitića iz Leskovca.`,
  )
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) return {}

  return buildPageMetadata({
    path: `/blog/${slug}`,
    title: post.seoTitle || post.title,
    description: metaDescription(post.excerpt, post.title),
    type: 'article',
    image: post.coverImage,
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) notFound()

  const document = await post.content()
  const canonical = absoluteUrl(`/blog/${slug}`)
  const description = metaDescription(post.excerpt, post.title)

  const allPosts = await getBlogPosts()
  const related = allPosts
    .filter((item) => item.slug !== slug)
    .slice(0, 3)
    .map((item) => ({
      slug: item.slug,
      title: item.entry.title,
      dateLabel: formatBlogDate(item.entry.publishedAt, 'short'),
    }))

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description,
    image: absoluteUrl(post.coverImage || '/andrejmitic.png'),
    datePublished: post.publishedAt ?? undefined,
    dateModified: post.updatedAt || post.publishedAt || undefined,
    inLanguage: 'sr-RS',
    author: {
      '@type': 'Person',
      '@id': `${SITE_URL}/#andrej-mitic`,
      name: 'Andrej Mitić',
      url: absoluteUrl('/o-meni'),
    },
    publisher: {
      '@type': 'LegalService',
      '@id': `${SITE_URL}/#kancelarija`,
      name: 'Advokat Andrej Mitić',
      logo: { '@type': 'ImageObject', url: absoluteUrl('/logo-gold.png') },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  }

  return (
    <main className="practice-page blog-page">
      <JsonLd data={articleLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Početna', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${slug}` },
        ])}
      />
      <div className="practice-shell">
        <SiteHeader current="blog" />
      </div>
      <BlogPostLayout
        title={post.title}
        excerpt={post.excerpt}
        publishedAt={post.publishedAt}
        publishedLabel={formatBlogDate(post.publishedAt)}
        coverImage={post.coverImage}
        document={document}
        shareUrl={canonical}
        related={related}
      />
      <SiteFooter />
    </main>
  )
}
