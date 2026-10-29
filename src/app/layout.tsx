import type { Metadata, Viewport } from 'next'
import './globals.css'
import JsonLd from '@/components/JsonLd'
import { BUSINESS, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl, personJsonLd } from '@/lib/seo'

const defaultDescription =
  'Advokat Andrej Mitić iz Leskovca – pravna pomoć i zastupanje fizičkih i pravnih lica: porodično, privredno, nasledno i krivično pravo, nekretnine i naknada štete.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: '%s | Advokat Andrej Mitić',
    default: 'Advokat Andrej Mitić | Advokat u Leskovcu',
  },
  description: defaultDescription,
  applicationName: SITE_NAME,
  keywords: [
    'advokat Leskovac',
    'advokatska kancelarija Leskovac',
    'Andrej Mitić',
    'advokat Andrej Mitić',
    'porodično pravo',
    'razvod braka Leskovac',
    'privredno pravo',
    'nasledno pravo',
    'krivično pravo',
    'naknada štete',
    'nekretnine',
  ],
  authors: [{ name: 'Andrej Mitić', url: absoluteUrl('/o-meni') }],
  creator: 'Andrej Mitić',
  publisher: SITE_NAME,
  formatDetection: { telephone: true, email: true, address: true },
  icons: {
    icon: '/logo-gold.png',
    apple: '/logo-gold.png',
  },
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    siteName: SITE_NAME,
    url: SITE_URL,
    title: 'Advokat Andrej Mitić | Advokat u Leskovcu',
    description: defaultDescription,
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advokat Andrej Mitić | Advokat u Leskovcu',
    description: defaultDescription,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0c1a2d',
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LegalService', 'Attorney'],
      '@id': `${SITE_URL}/#kancelarija`,
      name: BUSINESS.name,
      url: SITE_URL,
      logo: absoluteUrl('/logo-gold.png'),
      image: absoluteUrl(DEFAULT_OG_IMAGE),
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.streetAddress,
        addressLocality: BUSINESS.addressLocality,
        postalCode: BUSINESS.postalCode,
        addressCountry: BUSINESS.addressCountry,
      },
      areaServed: [
        { '@type': 'City', name: 'Leskovac' },
        { '@type': 'Country', name: 'Srbija' },
      ],
      knowsLanguage: ['sr'],
      founder: { '@id': `${SITE_URL}/#andrej-mitic` },
    },
    personJsonLd,
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: 'sr-RS',
      publisher: { '@id': `${SITE_URL}/#kancelarija` },
    },
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sr-Latn-RS">
      <body>
        <JsonLd data={structuredData} />
        {children}
      </body>
    </html>
  )
}
