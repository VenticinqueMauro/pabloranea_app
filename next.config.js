/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern formats; the optimizer picks AVIF/WebP when supported,
    // falling back to the original otherwise.
    formats: ['image/avif', 'image/webp'],
    // Cache optimized images for 31 days (improves "efficient cache policy").
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },
}

module.exports = nextConfig
