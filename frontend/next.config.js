/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.CDN_DOMAIN,
      },
    ],
  },
  generateBuildId: () => new Date().getTime().toString(),
}

module.exports = nextConfig
