const nextConfig = {
  eslint: {
    // ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow images from any domain
      },
      {
        protocol: "http",
        hostname: "**", // Allow images from any HTTP domain (optional)
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
