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
  // Don't generate source maps to reduce size
  productionBrowserSourceMaps: false,
  // Customize webpack config to reduce size
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    config.optimization.minimize = true;
    
    // Don't include webpack cache in output
    if (!isServer) {
      config.cache = false;
    }
    
    return config;
  },
}

module.exports = nextConfig
