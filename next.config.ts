import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    '/*': ['./content/blog/**/*'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.andrejmitic.rs' }],
        destination: 'https://andrejmitic.rs/:path*',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
