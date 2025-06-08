/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/loveamys',
  assetPrefix: '/loveamys/',
};

module.exports = nextConfig; 