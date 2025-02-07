/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    NEXT_PUBLIC_OPENAI_API_KEY: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  },
  images: {
    domains: ['your-image-domain.com'], // Add domains for your video thumbnails
    unoptimized: true,
  },
};

module.exports = nextConfig; 