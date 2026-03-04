import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  turbopack: {
    // ensure Next.js uses the correct workspace root
    root: __dirname, // or './' since this file lives in the project directory
  },
};

export default nextConfig;
