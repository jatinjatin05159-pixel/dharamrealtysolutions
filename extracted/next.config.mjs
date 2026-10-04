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
        { source: '/about', destination: '/site/about.html' },
        { source: '/services', destination: '/site/services.html' },
        { source: '/testimonials', destination: '/site/testimonials.html' },
        { source: '/contact', destination: '/site/contact.html' },
        { source: '/privacy', destination: '/site/privacy.html' },
        { source: '/terms', destination: '/site/terms.html' },
      ],
    };
  },
}

export default nextConfig
