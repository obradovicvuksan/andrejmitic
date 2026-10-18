import type { Metadata } from 'next'
import HomePage from '@/components/HomePage'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  path: '/',
  title: 'Advokat Andrej Mitić | Advokat u Leskovcu',
  absoluteTitle: true,
  description:
    'Advokat Andrej Mitić iz Leskovca – pravna pomoć i zastupanje fizičkih i pravnih lica: porodično, privredno, nasledno i krivično pravo, nekretnine i naknada štete.',
})

export default function Page() {
  return <HomePage />
}
