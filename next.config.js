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
    domains: [
      'daily-kurly.s3.ap-northeast-2.amazonaws.com',
      'www.foodiesfeed.com',
    ],
  },
}

module.exports = nextConfig
