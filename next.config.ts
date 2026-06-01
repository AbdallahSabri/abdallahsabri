import type { NextConfig } from "next";
import path from "path";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  outputFileTracingRoot: path.join(__dirname),
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3l0mjyonoq4zj.cloudfront.net",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
