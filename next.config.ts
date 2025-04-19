import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/my-portfolio",
  assetPrefix: "/my-portfolio/",
  output: "export", // enables static exports
  reactStrictMode: true,
  /* config options here */
};

export default nextConfig;
