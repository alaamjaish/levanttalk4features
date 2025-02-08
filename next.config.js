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
}

module.exports = withMDX(nextConfig)