'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { practiceAreas } from '@/data/practiceAreas'
import logoWhite from '../../public/logo-white.png'

export default function SiteHeader({ current }: { current?: 'blog' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="top-contact-bar" aria-label="Kontakt i mreže">
        <div className="top-contact-inner">
          <div className="top-contact-left" aria-label="Društvene mreže">
            <a href="#" className="social-icon social-icon--linkedin" aria-label="LinkedIn profil">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M6.62 9.05V19H3.31V9.05h3.31zM4.97 3.75a1.92 1.92 0 110 3.84 1.92 1.92 0 010-3.84zM20.69 13.28V19h-3.31v-5.1c0-1.28-.46-2.15-1.61-2.15-.88 0-1.4.59-1.63 1.16-.08.21-.1.5-.1.79V19h-3.31s.04-8.93 0-9.95h3.31v1.41c.44-.68 1.22-1.65 2.98-1.65 2.17 0 3.8 1.42 3.8 4.47z" />
              </svg>
            </a>
            <a href="#" className="social-icon social-icon--google" aria-label="Google profil">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M21.8 12.23c0-.76-.07-1.49-.2-2.2H12v4.16h5.49a4.7 4.7 0 01-2.04 3.08v2.55h3.3c1.93-1.78 3.05-4.4 3.05-7.59z" fill="#4285F4" />
                <path d="M12 22c2.76 0 5.08-.91 6.77-2.47l-3.3-2.55c-.92.62-2.09.99-3.47.99-2.67 0-4.92-1.8-5.72-4.23H2.88v2.64A10 10 0 0012 22z" fill="#34A853" />
                <path d="M6.28 13.74A6 6 0 016 12c0-.6.1-1.17.28-1.74V7.62H2.88A10 10 0 002 12c0 1.61.38 3.14.88 4.38l3.4-2.64z" fill="#FBBC05" />
                <path d="M12 6.02c1.5 0 2.84.52 3.9 1.53l2.93-2.93C17.07 2.98 14.75 2 12 2A10 10 0 002.88 7.62l3.4 2.64C7.08 7.82 9.33 6.02 12 6.02z" fill="#EA4335" />
              </svg>
            </a>
          </div>
          <div className="top-contact-right" aria-label="Brzi kontakt">
            <a href="tel:+381652292481">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.56 0 1 .44 1 1V20c0 .56-.44 1-1 1C10.85 21 3 13.15 3 3c0-.56.44-1 1-1h3.49c.56 0 1 .44 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.19 2.2z" />
              </svg>
              <span>+381 65 229 2481</span>
            </a>
            <a href="mailto:advokat@andrejmitic.rs">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 3.24l-8 5-8-5V6l8 5 8-5v1.24z" />
              </svg>
              <span>advokat@andrejmitic.rs</span>
            </a>
          </div>
        </div>
      </div>

      <header className="top-nav">
        <div className="top-nav-inner">
          <Link href="/" className="logo-wrap" aria-label="Početna stranica">
            <Image src={logoWhite} alt="Andrej Mitić Advokat" className="brand-logo brand-logo--header" priority />
          </Link>

          <nav className="nav-links" aria-label="Glavna navigacija">
            <div className="nav-item nav-item--dropdown">
              <Link href="/oblasti-rada" className="nav-link nav-link--gold">Oblasti rada</Link>
              <div className="dropdown-menu" aria-label="Lista oblasti rada">
                {practiceAreas.map((area) => (
                  <Link key={area.slug} href={`/oblasti-rada/${area.slug}`} className="dropdown-item">
                    {area.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/o-meni">O meni</Link>
            <Link href="/blog" className={current === 'blog' ? 'is-current' : undefined}>Blog</Link>
            <Link href="/#kontakt">Kontakt</Link>
          </nav>

          <Link href="/#kontakt" className="book-btn">
            Besplatna konsultacija
          </Link>

          <button
            type="button"
            className="menu-btn"
            aria-label="Otvori meni"
            aria-expanded={mobileMenuOpen}
            aria-controls="site-mobile-nav"
            onClick={() => setMobileMenuOpen((previous) => !previous)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <nav id="site-mobile-nav" className={mobileMenuOpen ? 'mobile-nav mobile-nav--open' : 'mobile-nav'} aria-label="Mobilna navigacija">
        <Link href="/oblasti-rada" onClick={() => setMobileMenuOpen(false)}>Oblasti rada</Link>
        <Link href="/o-meni" onClick={() => setMobileMenuOpen(false)}>O meni</Link>
        <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
        <Link href="/#kontakt" onClick={() => setMobileMenuOpen(false)}>Kontakt</Link>
      </nav>
    </>
  )
}
