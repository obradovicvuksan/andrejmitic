import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

// Metapodaci za /oblasti-rada (pojedinačne oblasti ih prepisuju u [slug]/layout.tsx).
export const metadata: Metadata = buildPageMetadata({
  path: '/oblasti-rada',
  title: 'Oblasti rada – advokat u Leskovcu',
  description:
    'Porodično, privredno, nasledno i krivično pravo, nekretnine i naknada štete – pregled oblasti u kojima advokat Andrej Mitić pruža pravnu pomoć u Leskovcu.',
})

export default function PracticeAreasLayout({ children }: { children: React.ReactNode }) {
  return children
}
