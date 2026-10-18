# Advokat Andrej Mitić – andrejmitic.rs

Next.js 15 + React 19 + Tailwind + Keystatic (blog).

## Lokalni razvoj

1. `npm install`
2. `npm run dev`
3. Otvorite http://localhost:3000

## Blog

- Lista tekstova: `/blog`, pojedinačan tekst: `/blog/<slug>`
- Admin za pisanje tekstova: `/keystatic` (lokalno radi bez lozinke, objave se snimaju u `content/blog`, slike u `public/images/blog`)
- Svaka objava ima: naslov, URL (slug), datum objave, datum izmene, kratak opis (meta opis), opcioni SEO naslov, naslovnu sliku i sadržaj (naslovi, liste, citati, tabele, slike, linkovi).
- Stranica objave automatski pravi sadržaj (TOC) iz naslova, prikazuje autora, deljenje na LinkedIn/Facebook i povezane tekstove.

### Produkcija (npr. Netlify)

1. Napravite Keystatic GitHub App za repozitorijum `obradovicvuksan/andrejmitic` (prvi put otvorite `/keystatic` lokalno sa podešenim `NEXT_PUBLIC_KEYSTATIC_STORAGE=github` – Keystatic vodi kroz pravljenje aplikacije).
2. U hosting env varijable unesite vrednosti iz `.env.example`.
3. Posle deploy-a otvorite `https://andrejmitic.rs/keystatic`.

## SEO

- Domen: `https://andrejmitic.rs` (podešava se na jednom mestu: `src/lib/seo.ts`)
- `sitemap.xml` (sve stranice, oblasti rada i blog objave) i `robots.txt` se generišu automatski
- Svaka stranica ima naslov, opis, canonical URL, Open Graph i Twitter kartice
- Strukturisani podaci (JSON-LD): LegalService/Attorney sa adresom i kontaktom, Person, WebSite, Service za oblasti rada, Blog/BlogPosting i BreadcrumbList
- `www.andrejmitic.rs` se trajno preusmerava na `andrejmitic.rs`
