/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'wallpaperaccess.com',
      'th.bing.com',
      'dz2cdn3.dzone.com',
    ],
  },
};

export default nextConfig;
