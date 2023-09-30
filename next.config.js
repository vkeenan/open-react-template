/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/landing",
        permanent: false, // Redirect only the first time.
      },
    ];
  },
};

module.exports = nextConfig;
