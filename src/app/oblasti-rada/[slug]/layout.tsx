import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import { practiceAreas } from '@/data/practiceAreas'
import { SITE_URL, absoluteUrl, breadcrumbJsonLd, buildPageMetadata } from '@/lib/seo'

type Props = { children: React.ReactNode; params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Omit<Props, 'children'>): Promise<Metadata> {
  const { slug } = await params
  const area = practiceAreas.find((item) => item.slug === slug)
  if (!area) return {}

  return buildPageMetadata({
    path: `/oblasti-rada/${area.slug}`,
    title: `${area.title} – advokat Leskovac`,
    description: area.summary,
  })
}

export default async function PracticeAreaLayout({ children, params }: Props) {
  const { slug } = await params
  const area = practiceAreas.find((item) => item.slug === slug)
  if (!area) notFound()

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: area.title,
    serviceType: area.title,
    description: area.summary,
    url: absoluteUrl(`/oblasti-rada/${area.slug}`),
    provider: { '@id': `${SITE_URL}/#kancelarija` },
    areaServed: { '@type': 'City', name: 'Leskovac' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: area.title,
      itemListElement: area.services.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service },
      })),
    },
  }

  return (
    <>
      <JsonLd data={serviceLd} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Početna', path: '/' },
          { name: 'Oblasti rada', path: '/oblasti-rada' },
          { name: area.title, path: `/oblasti-rada/${area.slug}` },
        ])}
      />
      {children}
    </>
  )
}
