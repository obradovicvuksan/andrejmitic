import type { Metadata } from 'next'
import { Bodoni_Moda, Manrope } from 'next/font/google'
import './globals.css'

const serif = Bodoni_Moda({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

const sans = Manrope({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Advokat Andrej Mitić',
  description: 'Moderna početna stranica advokata Andreja Mitića.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sr">
      <body className={`${serif.variable} ${sans.variable}`}>{children}</body>
    </html>
  )
}
