/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    // This makes Next.js optimize the images in public directory too
    unoptimized: false,
  },
  webpack: (config, { dev, isServer }) => {
    // Limita la dimensione della cache webpack
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename]
      },
      cacheDirectory: path.resolve(__dirname, '.next/cache'),
      maxAge: 1000 * 60 * 60 * 24 * 7 // 1 settimana
    };
    return config;
  },
}

module.exports = nextConfig