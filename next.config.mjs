import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/tegaidogun.github.io",
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.svg'],
    unoptimized: true
  },
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve('.');
    return config;
  }
};

export default nextConfig;
