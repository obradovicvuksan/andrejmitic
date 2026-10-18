import Image from 'next/image'
import Link from 'next/link'
import { DocumentRenderer } from '@keystatic/core/renderer'
import type { ReactNode } from 'react'

type HeadingItem = {
  id: string
  level: number
  text: string
}

type BlogPostLayoutProps = {
  title: string
  excerpt?: string | null
  publishedLabel?: string | null
  publishedAt?: string | null
  coverImage?: string | null
  document: unknown
  shareUrl: string
  related?: { slug: string; title: string; dateLabel?: string | null }[]
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/đ/g, 'dj')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function extractText(nodes: unknown): string {
  if (typeof nodes === 'string' || typeof nodes === 'number') return String(nodes)
  if (Array.isArray(nodes)) return nodes.map(extractText).join('')
  if (nodes && typeof nodes === 'object') {
    const record = nodes as { text?: unknown; props?: { children?: unknown }; children?: unknown }
    if (typeof record.text === 'string') return record.text
    if (record.props?.children) return extractText(record.props.children)
    if (record.children) return extractText(record.children)
  }
  return ''
}

function extractHeadings(document: unknown): HeadingItem[] {
  const headings: HeadingItem[] = []
  const counts = new Map<string, number>()

  const walk = (node: unknown) => {
    if (Array.isArray(node)) {
      node.forEach(walk)
      return
    }
    if (!node || typeof node !== 'object') return
    const current = node as { type?: string; level?: number; children?: unknown }

    if (current.type === 'heading') {
      const text = extractText(current.children ?? [])
      const base = slugify(text || 'sekcija') || 'sekcija'
      const count = counts.get(base) ?? 0
      counts.set(base, count + 1)
      headings.push({ id: count === 0 ? base : `${base}-${count + 1}`, level: current.level ?? 2, text })
      return
    }

    if (current.children) walk(current.children)
  }

  walk(document)
  return headings
}

function normalizeContentHref(href: string) {
  const value = href.trim()
  const internal = value
    .replace(/^https?:\/\/localhost:3000/i, '')
    .replace(/^https?:\/\/(www\.)?andrejmitic\.rs/i, '')
  if (internal === '' ) return '/'
  if (/^\/?kontakt\/?$/i.test(internal)) return '/#kontakt'
  return internal
}

export default function BlogPostLayout({
  title,
  excerpt,
  publishedLabel,
  publishedAt,
  coverImage,
  document,
  shareUrl,
  related = [],
}: BlogPostLayoutProps) {
  const allHeadings = extractHeadings(document)
  const minLevel = allHeadings.length ? Math.min(...allHeadings.map((h) => h.level)) : 2
  const tocHeadings = allHeadings.filter((h) => h.level <= minLevel + 1)
  let headingIndex = 0

  const renderers = {
    inline: {
      link: ({ href, children }: { href: string; children: ReactNode }) => {
        const normalizedHref = normalizeContentHref(href)
        const isExternal = /^https?:\/\//i.test(normalizedHref)
        return (
          <a
            href={normalizedHref}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
          >
            {children}
          </a>
        )
      },
    },
    block: {
      heading: ({ level, children }: { level: 1 | 2 | 3 | 4 | 5 | 6; children: ReactNode }) => {
        const heading = allHeadings[headingIndex]
        headingIndex += 1
        const id = heading?.id ?? slugify(extractText(children))
        // H1 je rezervisan za naslov objave (SEO), pa sadržaj počinje od H2.
        const Tag = (level <= 2 ? 'h2' : level === 3 ? 'h3' : 'h4') as 'h2' | 'h3' | 'h4'
        return <Tag id={id}>{children}</Tag>
      },
    },
  }

  const linkedinShareHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
  const facebookShareHref = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`

  return (
    <>
      <section className="blog-hero blog-hero--post">
        {coverImage && (
          <div className="blog-hero-cover" aria-hidden="true">
            <img src={coverImage} alt="" />
          </div>
        )}
        <div className="blog-hero-inner">
          <nav className="blog-breadcrumbs" aria-label="Putanja">
            <Link href="/">Početna</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog">Blog</Link>
          </nav>
          <p className="practice-eyebrow">Pravni tekst</p>
          <h1>{title}</h1>
          {excerpt && <p className="blog-hero-lead">{excerpt}</p>}
          <div className="blog-hero-meta">
            <Link href="/blog" className="blog-back-link">
              <span aria-hidden="true">←</span> Nazad na blog
            </Link>
            {publishedLabel && (
              <time dateTime={publishedAt ?? undefined} className="blog-date">
                <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="4" width="18" height="17" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                {publishedLabel}
              </time>
            )}
          </div>
        </div>
      </section>

      <section className="blog-post-section">
        <div className="blog-post-grid">
          <div className="blog-post-main">
            {tocHeadings.length > 0 && (
              <details className="blog-toc blog-toc--mobile">
                <summary>Sadržaj</summary>
                <ol>
                  {tocHeadings.map((heading) => (
                    <li key={`m-${heading.id}`} className={heading.level > minLevel ? 'is-sub' : undefined}>
                      <a href={`#${heading.id}`}>{heading.text}</a>
                    </li>
                  ))}
                </ol>
              </details>
            )}

            <article className="blog-article">
              <DocumentRenderer document={document as any} renderers={renderers} />
            </article>

            <div className="blog-share">
              <span>Podelite tekst:</span>
              <a href={linkedinShareHref} target="_blank" rel="noopener noreferrer" className="blog-share-btn">
                LinkedIn
              </a>
              <a href={facebookShareHref} target="_blank" rel="noopener noreferrer" className="blog-share-btn">
                Facebook
              </a>
            </div>
          </div>

          <aside className="blog-sidebar">
            <div className="blog-author-card">
              <div className="blog-author-photo">
                <Image src="/andrej-2.png" alt="Advokat Andrej Mitić" width={600} height={800} />
              </div>
              <p className="blog-author-name">Andrej Mitić</p>
              <p className="blog-author-role">Advokat · Leskovac</p>
              <p className="blog-author-bio">
                Pravna pomoć i zastupanje fizičkih i pravnih lica, uz individualan pristup i jasnu komunikaciju tokom celog postupka.
              </p>
              <Link href="/o-meni" className="cta-text-link">Biografija autora →</Link>
            </div>

            {tocHeadings.length > 0 && (
              <nav className="blog-toc blog-toc--desktop" aria-label="Sadržaj">
                <p>Sadržaj</p>
                <ol>
                  {tocHeadings.map((heading) => (
                    <li key={heading.id} className={heading.level > minLevel ? 'is-sub' : undefined}>
                      <a href={`#${heading.id}`}>{heading.text}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
          </aside>
        </div>

        {related.length > 0 && (
          <div className="blog-related">
            <h2>Pročitajte i</h2>
            <div className="blog-related-grid">
              {related.map((item) => (
                <Link key={item.slug} href={`/blog/${item.slug}`} className="blog-related-card">
                  {item.dateLabel && <span>{item.dateLabel}</span>}
                  <strong>{item.title}</strong>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="blog-cta">
        <div className="blog-cta-inner">
          <h2>Potrebna vam je pravna pomoć u vezi sa ovom temom?</h2>
          <Link href="/#kontakt" className="cta-main">
            <span>Zakažite konsultaciju</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M10.8 5.3L9.4 6.7l4.9 4.9H3v2h11.3l-4.9 4.9 1.4 1.4L18 12l-7.2-6.7z" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  )
}
