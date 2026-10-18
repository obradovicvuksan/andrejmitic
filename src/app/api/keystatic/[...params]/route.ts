import { makeRouteHandler } from '@keystatic/next/route-handler'
import { type NextRequest } from 'next/server'
import config from '../../../../../keystatic.config'

const routeHandler = makeRouteHandler({ config })

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
	return routeHandler.GET(withCanonicalOrigin(request))
}

export async function POST(request: NextRequest) {
	return routeHandler.POST(withCanonicalOrigin(request))
}
