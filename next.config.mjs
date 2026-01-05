/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // IMPORTANT for https://driftq-org.github.io/DriftQ-Site/
  basePath: "/DriftQ-Site",
  assetPrefix: "/DriftQ-Site/",
};

export default nextConfig;
