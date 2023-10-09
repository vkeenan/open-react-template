/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: new URL(process.env.NEXT_PUBLIC_IMAGE_URL).hostname,
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
