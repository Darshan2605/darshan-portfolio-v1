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
      'c4.wallpaperflare.com',
      'miro.medium.com',
      'www.pngitem.com',
      'images.unsplash.com',
      'www.freepik.com',
      'storage.googleapis.com',
    ],
  },
};

export default nextConfig;
