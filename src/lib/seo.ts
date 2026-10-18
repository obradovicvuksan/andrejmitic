import type { Metadata } from 'next'

export const SITE_URL = 'https://andrejmitic.rs'
export const SITE_NAME = 'Advokat Andrej Mitić'
export const DEFAULT_OG_IMAGE = '/andrejmitic.png'

export const BUSINESS = {
  name: 'Advokat Andrej Mitić',
  phone: '+381652292481',
  email: 'advokat@andrejmitic.rs',
  streetAddress: 'Đuke Dinić 7',
  addressLocality: 'Leskovac',
  postalCode: '16000',
  addressCountry: 'RS',
}

export function absoluteUrl(path = '/') {
  if (/^https?:\/\//i.test(path)) return path
  const normalized = path.startsWith('/') ? path : `/${path}`
  return normalized === '/' ? SITE_URL : `${SITE_URL}${normalized}`
}

export function normalizeMetaDescription(description: string, maxLength = 160): string {
  const compact = description.replace(/\s+/g, ' ').trim()
  if (compact.length <= maxLength) return compact
  return `${compact.slice(0, Math.max(0, maxLength - 3)).trimEnd()}...`
}

type PageMetadataArgs = {
  path: string
  title: string
  description: string
  type?: 'website' | 'article'
  image?: string | null
  /** Ako je true, naslov se ne dopunjuje šablonom "| Advokat Andrej Mitić". */
  absoluteTitle?: boolean
  publishedTime?: string | null
  modifiedTime?: string | null
}

export function buildPageMetadata({
  path,
  title,
  description,
  type = 'website',
  image,
  absoluteTitle = false,
  publishedTime,
  modifiedTime,
}: PageMetadataArgs): Metadata {
  const canonical = absoluteUrl(path)
  const normalizedDescription = normalizeMetaDescription(description)
  const ogImage = absoluteUrl(image || DEFAULT_OG_IMAGE)

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description: normalizedDescription,
    alternates: { canonical },
    openGraph: {
      type,
      url: canonical,
      title,
      description: normalizedDescription,
      siteName: SITE_NAME,
      locale: 'sr_RS',
      images: [{ url: ogImage }],
      ...(type === 'article'
        ? {
            publishedTime: publishedTime ?? undefined,
            modifiedTime: modifiedTime ?? publishedTime ?? undefined,
            authors: [absoluteUrl('/o-meni')],
          }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: normalizedDescription,
      images: [ogImage],
    },
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export const personJsonLd = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#andrej-mitic`,
  name: 'Andrej Mitić',
  jobTitle: 'Advokat',
  url: absoluteUrl('/o-meni'),
  image: absoluteUrl('/andrej-2.png'),
  worksFor: { '@id': `${SITE_URL}/#kancelarija` },
}
