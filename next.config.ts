import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.pixabay.com"], // ✅ Allow images from Pixabay
  },
};

export default nextConfig;
