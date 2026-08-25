/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.STANDALONE ? 'standalone' : undefined,
  webpack: (config) => {
    config.resolve.alias.canvas = false
    return config
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      // dev local
      { protocol: 'http', hostname: 'localhost', port: '9000', pathname: '/**' },
      // domínios de produção e homologação
      { protocol: 'https', hostname: '*.houseincorporacoes.com.br', pathname: '/**' },
      { protocol: 'https', hostname: '*.housein.com.br', pathname: '/**' },
      { protocol: 'https', hostname: '*.ykaromarques.com', pathname: '/**' },
      { protocol: 'https', hostname: 'storage.teste.ykaromarques.com', pathname: '/**' },
      { protocol: 'https', hostname: 'api.teste.ykaromarques.com', pathname: '/**' }
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/email',
        destination: 'https://mail.hostinger.com/auth/login',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
