import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Serve modern formats; the optimizer picks AVIF/WebP when supported,
    // falling back to the original otherwise.
    formats: ['image/avif', 'image/webp'],
    // Cache optimized images for 31 days (improves "efficient cache policy").
    minimumCacheTTL: 60 * 60 * 24 * 31,
    qualities: [70, 75],
  },
  experimental: {
    // The root layout lives under the dynamic [lang] segment, so unmatched
    // URLs need a 404 page that doesn't depend on any layout.
    globalNotFound: true,
  },
}

export default nextConfig
