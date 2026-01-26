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
      'lh3.googleusercontent.com',
      'sdmntprwestus.oaiusercontent.com',
      'user-gen-media-assets.s3.amazonaws.com',
      'www.pngitem.com',
      'images.unsplash.com',
      'www.freepik.com',
      'storage.googleapis.com',
      'images.credly.com',
      'drive.google.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: '*.oaiusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'user-gen-media-assets.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'images.credly.com',
      },
      {
        protocol: 'https',
        hostname: '*.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
    ],
  },
};

export default nextConfig;
