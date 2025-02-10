const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['i3.ytimg.com'],
    unoptimized: true,
  },
  experimental: {
    mdxRs: true,
  },
  // Optimize for production
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Handle MDX
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
}

module.exports = withMDX(nextConfig)