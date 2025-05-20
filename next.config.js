/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    // This makes Next.js optimize the images in public directory too
    unoptimized: false,
  },
  webpack: (config, { isServer }) => {
    // Fix per "TypeError: Cannot read properties of undefined (reading 'call')"
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react': path.resolve(__dirname, 'node_modules', 'react'),
        'react/jsx-runtime': path.resolve(__dirname, 'node_modules', 'react/jsx-runtime'),
        'react/jsx-dev-runtime': path.resolve(__dirname, 'node_modules', 'react/jsx-dev-runtime'),
        'react-dom': path.resolve(__dirname, 'node_modules', 'react-dom')
      };
    }
    return config;
  },
}

module.exports = nextConfig