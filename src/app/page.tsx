"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import logoGold from '../../public/logo-gold.png'
import logoWhite from '../../public/logo-white.png'

const practiceAreas = [
  {
    title: 'Porodično pravo',
    desc: 'Razvod braka, starateljstvo nad decom, alimentacija i imovinsko-pravni odnosi supružnika.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
  },
  {
    title: 'Privredno pravo',
    desc: 'Osnivanje privrednih društava, poslovna dokumentacija, ugovori i zastupanje u privrednim sporovima.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
      </svg>
    ),
  },
  {
    title: 'Nasledno pravo',
    desc: 'Ostavinski postupci, sastavljanje testamenta, zaštita prava naslednika i nasledni sporovi.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    ),
  },
  {
    title: 'Nekretnine',
    desc: 'Kupoprodaja i zakup nepokretnosti, uknjižba u katastar, hipoteke i susedski sporovi.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    ),
  },
  {
    title: 'Krivično pravo',
    desc: 'Odbrana okrivljenog u svim fazama krivičnog postupka i zastupanje oštećenih lica.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
      </svg>
    ),
  },
  {
    title: 'Naknada štete',
    desc: 'Saobraćajne nezgode, nesreće na radu i naknada materijalne i nematerijalne štete.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      </svg>
    ),
  },
]

const processSteps = [
  {
    num: '01',
    title: 'Upoznavanje sa predmetom',
    desc: 'Besplatan uvodni razgovor u kome se upoznajemo sa vašom situacijom — bez obaveza i bez pritisaka.',
  },
  {
    num: '02',
    title: 'Pravna analiza',
    desc: 'Temeljno proučavamo dokumentaciju, relevantne propise i sudsku praksu da sagledamo sve opcije.',
  },
  {
    num: '03',
    title: 'Strategija',
    desc: 'Zajedno definišemo optimalan pristup — od pregovaranja i medijacije do pokretanja sudskog postupka.',
  },
  {
    num: '04',
    title: 'Zastupanje i realizacija',
    desc: 'Aktivno zastupamo vaše interese u svakoj fazi — od prve podneske do konačnog, izvršnog rešenja.',
  },
]

const individualServices = [
  'Razvod braka i starateljstvo nad decom',
  'Alimentacija i podela imovine supružnika',
  'Nasleđivanje i ostavinski postupak',
  'Krivična odbrana i postupci pred sudom',
  'Naknada štete iz saobraćajnih nezgoda',
  'Kupoprodaja i uknjižba nekretnina',
  'Radni sporovi i zaštita prava zaposlenih',
]

const businessServices = [
  'Osnivanje i registracija privrednih društava',
  'Izrada, pregled i pregovaranje ugovora',
  'Zastupanje u privrednim i trgovinskim sporovima',
  'Radno pravo — ugovori i pravilnici',
  'Statusne promene i reorganizacija',
  'Naplata potraživanja i izvršni postupci',
  'Intelektualna svojina i IT pravo',
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 6)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    )

    document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
      revealObserver.observe(element)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      revealObserver.disconnect()
    }
  }, [])

  return (
    <main className={hasScrolled ? 'site-bg text-bone is-scrolled' : 'site-bg text-bone'}>
      <section className="hero-section">
        <div className="hero-shell">
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-watermark" aria-hidden="true" />

          <div className="top-contact-bar" aria-label="Kontakt i mreze">
            <div className="top-contact-inner">
              <div className="top-contact-left" aria-label="Drustvene mreze">
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
              <div className="logo-wrap">
                <Image
                  src={logoWhite}
                  alt="Andrej Mitić Advokat"
                  className="brand-logo brand-logo--header"
                  priority
                />
              </div>

              <nav className="nav-links" aria-label="Glavna navigacija">
                <a href="#">Usluge</a>
                <a href="/o-meni">O meni</a>
                <a href="#">Rezultati</a>
                <a href="#">Blog</a>
                <a href="#kontakt">Kontakt</a>
              </nav>

              <a href="#kontakt" className="book-btn">
                Besplatna konsultacija
              </a>

              <button
                type="button"
                className="menu-btn"
                aria-label="Otvori meni"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-nav"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </header>

          <div className="hero-inner">
            <nav
              id="mobile-nav"
              className={mobileMenuOpen ? 'mobile-nav mobile-nav--open' : 'mobile-nav'}
              aria-label="Mobilna navigacija"
            >
              <a href="/o-meni" onClick={() => setMobileMenuOpen(false)}>
                Usluge
              </a>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>
                O meni
              </a>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>
                Rezultati
              </a>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </a>
              <a href="#kontakt" onClick={() => setMobileMenuOpen(false)}>
                Kontakt
              </a>
            </nav>

            <div className="hero-grid">
              <div className="hero-copy">
                <p className="eyebrow">
                  ADVOKAT · LESKOVAC
                </p>
                <h1>
                  PRAVNA
                  <br />
                  STRATEGIJA
                  <br />
                  <span className="hero-gold">KOJA DONOSI</span>
                  <br />
                  <span className="hero-gold hero-gold--secondary">REZULTATE</span>
                </h1>
                <p>
                  Jasno postavljen cilj, precizna pravna analiza i strategija usmerena na zaštitu vaših prava i interesa – od prvog razgovora do završetka postupka.
                </p>
                <div className="hero-actions">
                  <a href="#kontakt" className="cta-main">
                    <span>Zakažite konsultaciju</span>
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M10.8 5.3L9.4 6.7l4.9 4.9H3v2h11.3l-4.9 4.9 1.4 1.4L18 12l-7.2-6.7z" />
                    </svg>
                  </a>
                  <a href="tel:+381652292481" className="cta-secondary">
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.56 0 1 .44 1 1V20c0 .56-.44 1-1 1C10.85 21 3 13.15 3 3c0-.56.44-1 1-1h3.49c.56 0 1 .44 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.19 2.2z" />
                    </svg>
                    <span>+381 65 229 2481</span>
                  </a>
                </div>

                <div className="hero-metrics" aria-label="Prednosti saradnje">
                  <article>
                    <strong>Individualan pristup</strong>
                    <span>svakom predmetu</span>
                  </article>
                  <article>
                    <strong>Jasna komunikacija</strong>
                    <span>tokom celog postupka</span>
                  </article>
                  <article>
                    <strong>Strateško zastupanje</strong>
                    <span>usmereno na rezultat</span>
                  </article>
                </div>
              </div>

              <div className="hero-portrait-wrap">
                <div className="portrait-panel">
                  <Image
                    src="/andrejmitic.png"
                    alt="Andrej Mitić, advokat"
                    width={900}
                    height={1125}
                    className="portrait"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OBLASTI RADA ── */}
      <section id="usluge" className="areas-section">
        <div className="sec-wrap">
          <div className="areas-header">
            <span className="sec-tag">Šta radim</span>
            <h2 className="sec-heading">Oblasti rada</h2>
            <p>Pravna pomoć fizičkim i pravnim licima, zasnovana na pažljivoj analizi konkretnog slučaja i izboru odgovarajuće pravne strategije.</p>
          </div>
          <div className="areas-grid">
            <article className="area-card">
              <div className="area-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3>Porodično pravo</h3>
              <p>Razvod braka, vršenje roditeljskog prava, izdržavanje, podela zajedničke imovine i drugi porodičnopravni odnosi.</p>
              <a href="#kontakt" className="area-link">Saznajte više →</a>
            </article>

            <article className="area-card">
              <div className="area-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
                </svg>
              </div>
              <h3>Privredno pravo</h3>
              <p>Pravna podrška pravnim licima, ugovorni odnosi, korporativna pitanja, naplata potraživanja i zastupanje u privrednim sporovima.</p>
              <a href="#kontakt" className="area-link">Saznajte više →</a>
            </article>

            <article className="area-card">
              <div className="area-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>
              <h3>Nasledno pravo</h3>
              <p>Ostavinski postupci, nasledni sporovi, testament, ugovori i zaštita prava naslednika.</p>
              <a href="#kontakt" className="area-link">Saznajte više →</a>
            </article>

            <article className="area-card">
              <div className="area-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
              <h3>Nekretnine</h3>
              <p>Kupoprodaja i zakup nepokretnosti, provera pravnog statusa, katastar, svojinski odnosi i sporovi u vezi sa nepokretnostima.</p>
              <a href="#kontakt" className="area-link">Saznajte više →</a>
            </article>

            <article className="area-card">
              <div className="area-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
              </div>
              <h3>Krivično pravo</h3>
              <p>Odbrana osumnjičenih i okrivljenih i zastupanje oštećenih u svim fazama krivičnog postupka.</p>
              <a href="#kontakt" className="area-link">Saznajte više →</a>
            </article>

            <article className="area-card">
              <div className="area-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
              <h3>Naknada štete</h3>
              <p>Naknada materijalne i nematerijalne štete nastale u saobraćajnim nezgodama, na radu i u drugim štetnim događajima.</p>
              <a href="#kontakt" className="area-link">Saznajte više →</a>
            </article>
          </div>
        </div>
      </section>

      {/* ── O MENI ── */}
      <section id="o-meni" className="about-section">
        <div className="sec-wrap about-grid">
          <div className="about-image-wrap">
            <div className="about-portrait-frame">
              <Image
                src="/andrej-2.png"
                alt="Andrej Mitić, advokat"
                width={600}
                height={800}
                className="about-portrait"
              />
            </div>
            <div className="about-badge">
              <strong>5+</strong>
              <span>godina iskustva</span>
            </div>
          </div>
          <div className="about-copy">
            <span className="sec-tag">O meni</span>
            <h2 className="sec-heading">Posvećenost svakom predmetu</h2>
            <p>
              Pravnu pomoć zasnivam na temeljnom sagledavanju činjenica, jasnom definisanju cilja i izboru pravne strategije prilagođene konkretnom slučaju. Svakom predmetu pristupam individualno, uz otvorenu komunikaciju sa klijentom tokom celog postupka.
            </p>
            <p>
              Cilj mi je da klijent razume svoju pravnu poziciju, raspoložive mogućnosti i rizike pre donošenja važnih odluka. Zastupanje ne posmatram samo kao preduzimanje pojedinačnih pravnih radnji, već kao proces usmeren ka zaštiti prava i ostvarivanju najboljeg mogućeg rezultata u konkretnim okolnostima.
            </p>
            <div className="about-values">
              {[
                'Individualan pristup svakom predmetu',
                'Jasno objašnjenje pravne situacije',
                'Transparentna komunikacija',
                'Strategija prilagođena ciljevima klijenta',
              ].map((v) => (
                <div className="about-value reveal-on-scroll" key={v}>
                  <span className="about-value-dot" aria-hidden="true" />
                  <p>{v}</p>
                </div>
              ))}
            </div>
            <a href="/o-meni" className="cta-text-link">Više o meni →</a>
          </div>
        </div>
      </section>

      {/* ── KAKO IZGLEDA SARADNJA ── */}
      <section className="process-section">
        <div className="sec-wrap">
          <div className="process-frame">
            <div className="process-header">
              <span className="sec-tag">Proces rada</span>
              <h2 className="sec-heading process-heading">Kako izgleda saradnja</h2>
            </div>
            <div className="process-steps">
              <article className="process-step reveal-on-scroll">
                <div className="step-num-badge">
                  <span>01</span>
                </div>
                <h3>Upoznavanje sa predmetom</h3>
                <p>Prvi razgovor služi upoznavanju sa činjenicama, dokumentacijom i ciljevima klijenta, kako bi se sagledala priroda pravnog problema.</p>
              </article>

              <article className="process-step reveal-on-scroll">
                <div className="step-num-badge">
                  <span>02</span>
                </div>
                <h3>Pravna analiza</h3>
                <p>Analiziram dokumentaciju, relevantne propise i, kada je potrebno, odgovarajuću sudsku praksu radi utvrđivanja pravne pozicije i raspoloživih mogućnosti.</p>
              </article>

              <article className="process-step reveal-on-scroll">
                <div className="step-num-badge">
                  <span>03</span>
                </div>
                <h3>Strategija</h3>
                <p>Na osnovu analize određuje se odgovarajući pravni pristup – od pregovora i vansudskog rešavanja spora do pokretanja ili vođenja odgovarajućeg postupka.</p>
              </article>

              <article className="process-step reveal-on-scroll">
                <div className="step-num-badge">
                  <span>04</span>
                </div>
                <h3>Zastupanje i realizacija</h3>
                <p>Preduzimam potrebne pravne radnje i zastupam interese klijenta tokom postupka, uz redovno informisanje o njegovom toku i narednim koracima.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ── FIZIČKA LICA / PRIVREDA ── */}
      <section className="clients-section">
        <div className="sec-wrap">
          <div className="clients-header">
            <span className="sec-tag">Pravna podrška</span>
            <h2 className="sec-heading clients-heading">Pravna podrška fizičkim i pravnim licima</h2>
          </div>
          <div className="clients-grid">
            <div className="client-panel client-panel--individual reveal-on-scroll">
              <div className="client-panel-head">
                <div className="client-panel-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="8" r="3.2" />
                    <path d="M5 18.2c0-3 2.9-5.2 7-5.2s7 2.2 7 5.2" />
                  </svg>
                </div>
                <h3>Fizička lica</h3>
              </div>
              <ul className="client-service-list">
                <li>Razvod braka i vršenje roditeljskog prava</li>
                <li>Izdržavanje i podela zajedničke imovine</li>
                <li>Nasleđivanje i ostavinski postupci</li>
                <li>Krivična odbrana i zastupanje oštećenih</li>
                <li>Naknada materijalne i nematerijalne štete</li>
                <li>Kupoprodaja i pravna pitanja u vezi sa nepokretnostima</li>
                <li>Radni sporovi i zaštita prava zaposlenih</li>
                <li>Naplata potraživanja i izvršni postupci</li>
              </ul>
            </div>

            <div className="client-panel client-panel--business reveal-on-scroll">
              <div className="client-panel-head">
                <div className="client-panel-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="4" y="7.5" width="16" height="10.5" rx="2.2" />
                    <path d="M9 7.5V6a1.8 1.8 0 011.8-1.8h2.4A1.8 1.8 0 0115 6v1.5" />
                    <path d="M4 11.5h16" />
                  </svg>
                </div>
                <h3>Pravna lica</h3>
              </div>
              <ul className="client-service-list">
                <li>Izrada, pregled i pregovaranje ugovora</li>
                <li>Pravna podrška u poslovanju</li>
                <li>Korporativno i privredno pravo</li>
                <li>Usklađivanje poslovanja sa propisima</li>
                <li>Radnopravna dokumentacija</li>
                <li>Naplata potraživanja</li>
                <li>Izvršni postupci</li>
                <li>Zastupanje u privrednim sporovima</li>
                <li>Statusna i korporativna pitanja</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-footer-section">
        {/* ── KONTAKT ── */}
        <section id="kontakt" className="contact-section">
          <div className="sec-wrap">
          <div className="contact-section-header">
            <span className="sec-tag">Kontakt</span>
            <h2 className="sec-heading">Stupite u kontakt</h2>
            <p>Za zakazivanje konsultacije ili dodatne informacije možete me kontaktirati telefonom, elektronskom poštom ili putem kontakt forme.</p>
          </div>
          <div className="contact-top-info">
            <a href="tel:+381652292481" className="contact-info-item reveal-on-scroll">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.56 0 1 .44 1 1V20c0 .56-.44 1-1 1C10.85 21 3 13.15 3 3c0-.56.44-1 1-1h3.49c.56 0 1 .44 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.19 2.2z"/>
                </svg>
              </div>
              <div>
                <span className="contact-info-label">Telefon</span>
                <span className="contact-info-val">+381 65 229 2481</span>
              </div>
            </a>
            <a href="mailto:office@andrejmitic.rs" className="contact-info-item reveal-on-scroll">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 3.24l-8 5-8-5V6l8 5 8-5v1.24z"/>
                </svg>
              </div>
              <div>
                <span className="contact-info-label">E-mail</span>
                <span className="contact-info-val">office@andrejmitic.rs</span>
              </div>
            </a>
            <div className="contact-info-item reveal-on-scroll">
              <div className="contact-info-icon">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
              </div>
              <div>
                <span className="contact-info-label">Adresa</span>
                <span className="contact-info-val">Đuke Dinić 7, Leskovac</span>
              </div>
            </div>
          </div>
          <div className="contact-main-grid">
            <form className="contact-form-card reveal-on-scroll" action="#" method="post">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cf-name">Ime i prezime</label>
                  <input id="cf-name" name="name" type="text" placeholder="Vaše ime" />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-phone">Telefon</label>
                  <input id="cf-phone" name="phone" type="tel" placeholder="+381 ..." />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="cf-email">Email adresa</label>
                <input id="cf-email" name="email" type="email" placeholder="ime@email.com" />
              </div>
              <div className="form-group">
                <label htmlFor="cf-subject">Oblast prava</label>
                <select id="cf-subject" name="subject">
                  <option value="">Izaberite oblast...</option>
                  <option>Porodično pravo</option>
                  <option>Privredno pravo</option>
                  <option>Nasledno pravo</option>
                  <option>Nekretnine</option>
                  <option>Krivično pravo</option>
                  <option>Naknada štete</option>
                  <option>Ostalo</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="cf-message">Kratki opis situacije</label>
                <textarea id="cf-message" name="message" rows={5} placeholder="Opišite ukratko vaš slučaj..." />
              </div>
              <button type="submit" className="form-submit">Pošaljite poruku</button>
            </form>
            <div className="contact-map-card reveal-on-scroll">
              <iframe
                title="Advokat Andrej Mitić — mapa"
                src="https://www.google.com/maps?q=Leskovac+Serbia&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="site-footer">
          <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo-wrap">
                <Image
                  src={logoGold}
                  alt="Andrej Mitić Advokat"
                  className="brand-logo brand-logo--footer"
                />
              </div>
              <p>
                Advokat Andrej Mitić
              </p>
              <p>Pravna pomoć i zastupanje fizičkih i pravnih lica u Leskovcu i pred nadležnim organima u Republici Srbiji.</p>
            </div>
            <div className="footer-col">
              <h4>Brzi linkovi</h4>
              <ul>
                <li><a href="#usluge">Oblasti rada</a></li>
                <li><a href="/o-meni">O meni</a></li>
                <li><a href="#kontakt">Kontakt</a></li>
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
      </section>
    </main>
  )
}
