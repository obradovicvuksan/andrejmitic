import { NextResponse, type NextRequest } from 'next/server'

function unauthorizedResponse() {
  return new NextResponse('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Keystatic Admin"',
    },
  })
}

function isAuthorizedForKeystatic(request: NextRequest) {
  const username = process.env.KEYSTATIC_USERNAME
  const password = process.env.KEYSTATIC_PASSWORD

  // Lokalno (npm run dev) admin je otvoren ako lozinka nije podešena.
  if (!username || !password) {
    return process.env.NODE_ENV !== 'production'
  }

  const authHeader = request.headers.get('authorization')
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return false
  }

  try {
    const decoded = atob(authHeader.slice('Basic '.length).trim())
    const separatorIndex = decoded.indexOf(':')
    if (separatorIndex === -1) return false

    return (
      decoded.slice(0, separatorIndex) === username &&
      decoded.slice(separatorIndex + 1) === password
    )
  } catch {
    return false
  }
}

export default function middleware(request: NextRequest) {
  if (!isAuthorizedForKeystatic(request)) {
    return unauthorizedResponse()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/keystatic', '/keystatic/:path*'],
}
