'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import logoGold from '../../../public/logo-gold.png'
import logoWhite from '../../../public/logo-white.png'

const principles = [
  {
    number: '01',
    title: 'Analiza pre postupanja',
    text: 'Svaki predmet počinje razumevanjem činjenica, dokumentacije i pravnog položaja klijenta.',
  },
  {
    number: '02',
    title: 'Jasna strategija',
    text: 'Klijent dobija objašnjenje mogućih pravaca postupanja, njihovih prednosti i potencijalnih rizika.',
  },
  {
    number: '03',
    title: 'Direktna komunikacija',
    text: 'Važne odluke donose se uz potpuno razumevanje pravne situacije i mogućih posledica.',
  },
  {
    number: '04',
    title: 'Posvećenost predmetu',
    text: 'Svaki slučaj se sagledava individualno, bez šablonskog pristupa.',
  },
]

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="about-page">
      <div className="about-page-shell">
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
              <a href="mailto:office@andrejmitic.rs">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 3.24l-8 5-8-5V6l8 5 8-5v1.24z" />
                </svg>
                <span>office@andrejmitic.rs</span>
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
              <Link href="#">Usluge</Link>
              <Link href="/o-meni" className="is-current">O meni</Link>
              <Link href="#">Rezultati</Link>
              <Link href="#">Blog</Link>
              <Link href="/#kontakt">Kontakt</Link>
            </nav>
            <Link href="/#kontakt" className="book-btn">Besplatna konsultacija</Link>
            <button
              type="button"
              className="menu-btn"
              aria-label="Otvori meni"
              aria-expanded={mobileMenuOpen}
              aria-controls="about-mobile-nav"
              onClick={() => setMobileMenuOpen((previous) => !previous)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </header>

        <nav id="about-mobile-nav" className={mobileMenuOpen ? 'mobile-nav mobile-nav--open' : 'mobile-nav'} aria-label="Mobilna navigacija">
          <Link href="#">Usluge</Link>
          <Link href="/o-meni" onClick={() => setMobileMenuOpen(false)}>O meni</Link>
          <Link href="#">Rezultati</Link>
          <Link href="#">Blog</Link>
          <Link href="/#kontakt" onClick={() => setMobileMenuOpen(false)}>Kontakt</Link>
        </nav>

        <section className="about-page-hero">
          <div className="about-page-hero-copy">
            <p className="about-page-eyebrow">ADVOKAT · LESKOVAC</p>
            <h1>Advokat <em>Andrej Mitić</em></h1>
            <p className="about-page-lead">Pravna pomoć zasnovana na znanju, strategiji i posvećenosti</p>
          </div>
          <div className="about-page-hero-mark" aria-hidden="true">AM</div>
        </section>
      </div>

      <section className="about-page-story">
        <div className="about-page-story-grid">
          <div className="about-page-portrait-wrap">
            <div className="about-page-portrait-frame">
              <Image
                src="/andrej-2.png"
                alt="Advokat Andrej Mitić"
                width={600}
                height={800}
                className="about-page-portrait"
              />
            </div>
            <span className="about-page-portrait-caption">Advokat Andrej Mitić, Leskovac</span>
          </div>
          <div className="about-page-copy">
            <p>Pravo za mene nije samo pitanje poznavanja propisa. Svaki predmet predstavlja konkretnu životnu ili poslovnu situaciju u kojoj je potrebno razumeti činjenice, prepoznati rizike i odrediti pravac koji najbolje štiti interese klijenta.</p>
            <p>Diplomirao sam na Pravnom fakultetu Univerziteta u Beogradu, nakon čega sam profesionalno iskustvo sticao kroz advokatsku praksu. Nakon položenog pravosudnog i advokatskog ispita, profesionalni rad nastavio sam kao advokat u Leskovcu.</p>
            <p>U radu zastupam fizička i pravna lica i pružam pravnu pomoć u različitim oblastima prava, sa posebnim fokusom na rešavanje konkretnih problema i izgradnju dugoročnog odnosa poverenja sa klijentima.</p>
            <p>Svakom predmetu pristupam individualno. Pre preduzimanja pravnih koraka nastojim da utvrdim sve relevantne činjenice, analiziram dokumentaciju i objasnim klijentu njegovu pravnu poziciju, moguće pravce postupanja i rizike koji ih prate.</p>
            <p>Posebnu pažnju posvećujem jasnoj komunikaciji. Smatram da klijent treba da zna zbog čega se određena pravna radnja preduzima, šta se njome želi postići i šta može očekivati u narednoj fazi postupka.</p>
            <p>Kod pravnih lica fokus nije samo na rešavanju problema nakon što nastane. Cilj pravne podrške je i pravovremeno prepoznavanje rizika, kvalitetno uređivanje ugovornih odnosa i usklađivanje poslovanja sa propisima kako bi se mogućnost budućih sporova svela na najmanju moguću meru.</p>
            <p>Bez obzira na prirodu predmeta, osnovni principi mog rada ostaju isti: temeljna analiza, odgovornost, profesionalnost, poverljivost i strategija prilagođena konkretnim interesima klijenta.</p>
          </div>
        </div>
      </section>

      <section className="about-page-principles">
        <div className="about-page-section-heading">
          <p className="about-page-eyebrow">MOJ PRISTUP</p>
          <h2>Promišljen rad. Jasni koraci.</h2>
          <p>Svaki predmet zahteva pažnju, dobru procenu i pravac koji je razumljiv klijentu.</p>
        </div>
        <div className="about-page-principles-grid">
          {principles.map((principle) => (
            <article className="about-principle" key={principle.number}>
              <span>{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="about-page-footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo-wrap">
                <Image src={logoGold} alt="Andrej Mitić Advokat" className="brand-logo brand-logo--footer" />
              </div>
              <p>Advokat Andrej Mitić</p>
              <p>Pravna pomoć i zastupanje fizičkih i pravnih lica u Leskovcu i pred nadležnim organima u Republici Srbiji.</p>
            </div>
            <div className="footer-col">
              <h4>Brzi linkovi</h4>
              <ul>
                <li><Link href="/#usluge">Oblasti rada</Link></li>
                <li><Link href="/o-meni">O meni</Link></li>
                <li><Link href="/#kontakt">Kontakt</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Kontakt</h4>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.56 0 1 .44 1 1V20c0 .56-.44 1-1 1C10.85 21 3 13.15 3 3c0-.56.44-1 1-1h3.49c.56 0 1 .44 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.19 2.2z"/>
                  </svg>
                  <span>+381 65 229 2481</span>
                </div>
                <div className="footer-contact-item">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 3.24l-8 5-8-5V6l8 5 8-5v1.24z"/>
                  </svg>
                  <span>office@andrejmitic.rs</span>
                </div>
                <div className="footer-contact-item">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                  </svg>
                  <span>Đuke Dinić 7, Leskovac</span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Advokat Andrej Mitić. Sva prava zadržana.</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
