import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import SiteFooter from '@/components/SiteFooter'
import SiteHeader from '@/components/SiteHeader'
import { formatBlogDate, getBlogPosts } from '@/lib/blogPosts'
import { SITE_URL, absoluteUrl, breadcrumbJsonLd, buildPageMetadata } from '@/lib/seo'

export const revalidate = 60

export const metadata: Metadata = buildPageMetadata({
  path: '/blog',
  title: 'Blog – pravni saveti i analize',
  description:
    'Blog advokata Andreja Mitića: razumljivo objašnjena pravna pitanja iz porodičnog, privrednog, naslednog i krivičnog prava, nekretnina i naknade štete.',
})

export default async function BlogPage() {
  const posts = await getBlogPosts()

  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/blog#blog`,
    name: 'Blog – Advokat Andrej Mitić',
    url: absoluteUrl('/blog'),
    inLanguage: 'sr-RS',
    publisher: { '@id': `${SITE_URL}/#kancelarija` },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.entry.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.entry.publishedAt ?? undefined,
    })),
  }

  return (
    <main className="practice-page blog-page">
      <JsonLd data={blogLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Početna', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
      />
      <div className="practice-shell">
        <SiteHeader current="blog" />
        <section className="blog-hero">
          <div className="blog-hero-inner">
            <p className="practice-eyebrow">Pravni tekstovi</p>
            <h1>Blog</h1>
            <p className="blog-hero-lead">
              Analize, komentari i praktični saveti o pravnim pitanjima sa kojima se građani i privreda najčešće susreću.
            </p>
          </div>
        </section>
      </div>

      <section className="blog-list-section">
        <div className="blog-list-wrap">
          {posts.length === 0 ? (
            <div className="blog-empty">
              <span className="sec-tag">Uskoro</span>
              <p>Novi tekstovi su u pripremi – pratite nas.</p>
            </div>
          ) : (
            <div className="blog-grid">
              {posts.map((post, index) => (
                <article key={post.slug} className="blog-card">
                  <Link href={`/blog/${post.slug}`} className="blog-card-link">
                    <div className="blog-card-media">
                      {post.entry.coverImage ? (
                        <img src={post.entry.coverImage} alt={post.entry.title} loading="lazy" />
                      ) : (
                        <span className="blog-card-media-fallback" aria-hidden="true">AM</span>
                      )}
                    </div>
                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        {post.entry.publishedAt && (
                          <time dateTime={post.entry.publishedAt}>{formatBlogDate(post.entry.publishedAt, 'short')}</time>
                        )}
                      </div>
                      <h2>{post.entry.title}</h2>
                      {post.entry.excerpt && <p>{post.entry.excerpt}</p>}
                      <span className="blog-card-more">
                        Pročitajte <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
