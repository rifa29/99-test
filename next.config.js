/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "external-preview.redd.it",
      },
    ],
  },
};

module.exports = nextConfig;
