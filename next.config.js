/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx'],
  images: {
    domains: ['raw.githubusercontent.com'],
  },
}

module.exports = nextConfig;
