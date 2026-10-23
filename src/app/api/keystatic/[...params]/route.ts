import { makeRouteHandler } from '@keystatic/next/route-handler'
import { type NextRequest } from 'next/server'
import config from '../../../../../keystatic.config'

// Handler se pravi tek na prvi zahtev: makeRouteHandler baca grešku ako GitHub env varijable
// nisu podešene, a to ne sme da obori Netlify build (sajt i blog rade i bez admina).
let routeHandler: ReturnType<typeof makeRouteHandler> | undefined

function getRouteHandler() {
	routeHandler ??= makeRouteHandler({ config })
	return routeHandler
}

function notConfiguredResponse() {
	return new Response(
		'Keystatic nije podešen: dodajte KEYSTATIC_GITHUB_CLIENT_ID, KEYSTATIC_GITHUB_CLIENT_SECRET i KEYSTATIC_SECRET u Netlify env varijable.',
		{ status: 503 }
	)
}

function withCanonicalOrigin(request: NextRequest) {
	const configuredOrigin =
		process.env.KEYSTATIC_PUBLIC_ORIGIN ??
		process.env.NEXT_PUBLIC_SITE_URL ??
		process.env.URL

	if (!configuredOrigin) {
		return request
	}

	try {
		const sourceUrl = new URL(request.url)
		const canonicalOrigin = new URL(configuredOrigin)
		const rewrittenUrl = new URL(request.url)

		if (sourceUrl.origin === canonicalOrigin.origin) {
			return request
		}

		rewrittenUrl.protocol = canonicalOrigin.protocol
		rewrittenUrl.host = canonicalOrigin.host

		return new Request(rewrittenUrl.toString(), request)
	} catch {
		return request
	}
}

export async function GET(request: NextRequest) {
	try {
		return await getRouteHandler().GET(withCanonicalOrigin(request))
	} catch {
		return notConfiguredResponse()
	}
}

export async function POST(request: NextRequest) {
	try {
		return await getRouteHandler().POST(withCanonicalOrigin(request))
	} catch {
		return notConfiguredResponse()
	}
}
