import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/lib/unsplash-loader.ts",
  },
};

export default nextConfig;
