import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import { breadcrumbJsonLd, buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  path: '/o-meni',
  title: 'O meni – Advokat Andrej Mitić, Leskovac',
  absoluteTitle: true,
  description:
    'Advokat Andrej Mitić iz Leskovca – diplomirani pravnik Pravnog fakulteta u Beogradu. Individualan pristup, jasna komunikacija i strategija prilagođena klijentu.',
  image: '/andrej-2.png',
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Početna', path: '/' },
          { name: 'O meni', path: '/o-meni' },
        ])}
      />
      {children}
    </>
  )
}
