import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  allowedDevOrigins: ['192.168.1.3', '192.168.1.2', '192.168.1.4', '10.181.78.65', '10.216.236.65'],
};

export default nextConfig;
