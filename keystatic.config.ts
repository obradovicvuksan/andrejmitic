import { config, collection, fields } from '@keystatic/core'

const repo =
  process.env.KEYSTATIC_GITHUB_REPOSITORY ??
  process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_REPOSITORY ??
  process.env.GITHUB_REPOSITORY ??
  'obradovicvuksan/andrejmitic'
const hasGitHubAuthConfig = Boolean(
  process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
    process.env.KEYSTATIC_GITHUB_CLIENT_SECRET &&
    process.env.KEYSTATIC_SECRET
)

const isBrowser = typeof window !== 'undefined'
// NEXT_PUBLIC_ varijabla se ugrađuje i u server i u browser build, pa je storage isti na obe strane.
// Lokalno (bez .env) Keystatic čuva objave direktno u content/blog folderu.
const shouldUseGitHubStorage = Boolean(repo) && process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE === 'github'

if (!isBrowser && process.env.NETLIFY && (!shouldUseGitHubStorage || !hasGitHubAuthConfig)) {
  // Ne prekidamo build: sajt i blog rade i bez ovoga, samo admin (/keystatic) ne može da snima
  // objave dok se ne podese GitHub env varijable (vidi .env.example).
  console.warn(
    '[keystatic] GitHub storage nije podešen – /keystatic u produkciji neće moći da snima objave. Podesite NEXT_PUBLIC_KEYSTATIC_STORAGE=github, KEYSTATIC_GITHUB_REPOSITORY, KEYSTATIC_GITHUB_CLIENT_ID, KEYSTATIC_GITHUB_CLIENT_SECRET i KEYSTATIC_SECRET.'
  )
}

const storage = shouldUseGitHubStorage
  ? {
      kind: 'github' as const,
      repo: repo as `${string}/${string}`,
    }
  : {
      kind: 'local' as const,
    }

export default config({
  storage,
  ui: {
    brand: { name: 'Advokat Andrej Mitić' },
    navigation: ['posts'],
  },
  collections: {
    posts: collection({
      label: 'Blog objave',
      slugField: 'title',
      path: 'content/blog/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({
          name: { label: 'Naslov', validation: { isRequired: true } },
          slug: {
            label: 'URL (slug)',
            description: 'Deo adrese posle /blog/. Koristite mala slova, bez kvačica, reči odvojene crticom.',
          },
        }),
        publishedAt: fields.date({
          label: 'Datum objave',
          defaultValue: { kind: 'today' },
        }),
        updatedAt: fields.date({
          label: 'Datum poslednje izmene',
          description: 'Opciono. Koristi se za SEO (dateModified).',
        }),
        excerpt: fields.text({
          label: 'Kratak opis',
          description: 'Prikazuje se na listi tekstova i kao meta opis za Google (idealno do 160 karaktera).',
          multiline: true,
          validation: { isRequired: true },
        }),
        seoTitle: fields.text({
          label: 'SEO naslov (opciono)',
          description: 'Ako je prazno, koristi se naslov objave.',
        }),
        coverImage: fields.image({
          label: 'Naslovna slika',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        content: fields.document({
          label: 'Sadržaj',
          description: 'Koristite naslove, liste, citate, slike, tabele i linkove.',
          formatting: {
            inlineMarks: {
              bold: true,
              italic: true,
              underline: true,
              strikethrough: true,
              code: true,
            },
            listTypes: {
              ordered: true,
              unordered: true,
            },
            headingLevels: [2, 3, 4],
            blockTypes: {
              blockquote: true,
              code: true,
            },
            softBreaks: true,
          },
          dividers: true,
          links: true,
          tables: true,
          images: {
            directory: 'public/images/blog',
            publicPath: '/images/blog/',
          },
        }),
      },
    }),
  },
})
