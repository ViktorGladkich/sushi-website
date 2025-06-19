/** @type {import('next').NextConfig} */
const nextConfig = {
  // Добавляем этот блок
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig