/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponents: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};
module.exports = nextConfig;
