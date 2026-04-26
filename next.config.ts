import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  trailingSlash: false,
  async rewrites() {
    return [
      // Estonian locale aliases
      { source: "/tugi", destination: "/support" },
      { source: "/tugi/:path*", destination: "/support/:path*" },
      { source: "/privaatsus", destination: "/privacy" },
      { source: "/tingimused", destination: "/terms" },
      { source: "/kupsised", destination: "/cookies" },
    ];
  },
};

export default nextConfig;
