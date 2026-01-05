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
  basePath,
  assetPrefix: `${basePath}/`,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  }
};

export default nextConfig;
