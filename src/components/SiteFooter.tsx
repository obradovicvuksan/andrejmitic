import Image from 'next/image'
import Link from 'next/link'

import logoGold from '../../public/logo-gold.png'

export default function SiteFooter() {
  return (
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
              <li><Link href="/oblasti-rada">Oblasti rada</Link></li>
              <li><Link href="/o-meni">O meni</Link></li>
              <li><Link href="/blog">Blog</Link></li>
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
                <span>advokat@andrejmitic.rs</span>
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
  )
}
