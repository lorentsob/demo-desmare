/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    // This makes Next.js optimize the images in public directory too
    unoptimized: false,
  },
}

module.exports = nextConfig