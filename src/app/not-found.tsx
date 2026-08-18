import Link from 'next/link'

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#0c1a2d', color: '#f5f1e9', fontFamily: 'sans-serif' }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p style={{ margin: 0, color: '#d5ae67', letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: '0.72rem' }}>404</p>
        <h1 style={{ margin: '1rem 0', fontSize: 'clamp(2rem, 5vw, 4rem)' }}>Stranica nije pronađena</h1>
        <Link href="/" style={{ display: 'inline-flex', padding: '0.8rem 1.1rem', border: '1px solid rgba(213, 174, 103, 0.5)', color: '#fff7ea', background: 'rgba(213, 174, 103, 0.08)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, textDecoration: 'none' }}>
          Povratak na početnu
        </Link>
      </div>
    </main>
  )
}
