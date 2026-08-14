import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        night: '#09162B',
        steel: '#0D213F',
        bone: '#F5EFE3',
        sand: '#C7A469',
        mist: '#B7C5DD',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(4, 13, 27, 0.3)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
