import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    // Enable if needed
    // serverActions: true,
  },
};

export default nextConfig;
