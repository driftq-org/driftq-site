/** @type {import('next').NextConfig} */
const isGhPagesProject = process.env.GITHUB_PAGES_PROJECT === "true";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  // Only use /DriftQ-Site when deploying to driftq-org.github.io/DriftQ-Site
  ...(isGhPagesProject
    ? { basePath: "/DriftQ-Site", assetPrefix: "/DriftQ-Site" }
    : {})
};

export default nextConfig;
