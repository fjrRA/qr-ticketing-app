/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'yourdomain.com'],
  },
};

module.exports = nextConfig;
