/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_AWS_S3_URL, 'www.foodiesfeed.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://www.kurlynity.cz:3010/:path*',
      },
    ]
  },
}

module.exports = nextConfig
