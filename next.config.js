/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/landing",
        permanent: false, // Redirect only the first time.
      },
    ];
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
