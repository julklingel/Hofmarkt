const withImages = require('next-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-domain.com'],
  },
};

module.exports = withImages(nextConfig);
