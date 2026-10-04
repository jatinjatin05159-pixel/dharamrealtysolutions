/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: '.',
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/home/index.html' },
      ],
    };
  },
}

export default nextConfig
