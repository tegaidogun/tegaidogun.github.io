/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["placeholder.com"],
    unoptimized: true,
  },
  // Reduce output size for Cloudflare Pages
  output: 'export',
  distDir: process.env.CF_PAGES ? '.vercel/output/static' : '.next',
  // Don't generate source maps to reduce size
  productionBrowserSourceMaps: false,
  // Do not include cache in output
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
}

module.exports = nextConfig
