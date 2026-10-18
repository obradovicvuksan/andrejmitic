import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
}

export default function KeystaticLayout({ children }: { children: React.ReactNode }) {
  return <div className="keystatic-admin">{children}</div>
}
