const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `/api/:path*`,
      },
    ];
  },
  images: {
    domains: ['images.unsplash.com'],
  },

}

module.exports = nextConfig