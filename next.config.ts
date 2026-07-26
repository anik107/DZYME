import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 95 keeps the dense template screenshots legible; required to be declared from Next 16.
    qualities: [75, 95],
  },
};

export default nextConfig;
