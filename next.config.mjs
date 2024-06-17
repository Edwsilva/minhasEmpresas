/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },

  env: {
    api: 'http://localhost:3001',
  },
};

export default nextConfig;
