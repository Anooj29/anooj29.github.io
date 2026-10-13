import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (anooj29.com).
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true },
  experimental: { optimizePackageImports: ["motion", "three"] },
};

export default nextConfig;
