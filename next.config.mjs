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
      'cdn-images-1.medium.com',
      'cdn-images-2.medium.com',
      'www.pngitem.com',
      'images.unsplash.com',
      'www.freepik.com',
      'storage.googleapis.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.medium.com',
      },
    ],
  },
};

export default nextConfig;
