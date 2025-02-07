/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['i3.ytimg.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig; 