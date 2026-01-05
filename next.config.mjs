/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },

  // Only set these when basePath is non-empty
  ...(basePath ? { basePath, assetPrefix: `${basePath}/` } : {}),

  // Expose to client code (so your logo fix can use it)
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "",
  },
};

export default nextConfig;
