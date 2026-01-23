import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://backend.ligadecapitanes.com.ar/mansa/images/**"),
    ],
  },
};

export default nextConfig;
