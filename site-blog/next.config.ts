import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  turbopack: {}, // 👈 necessário para Next 16
  output: 'standalone', // 👈 necessário para Vercel
};

export default withContentlayer(nextConfig);
