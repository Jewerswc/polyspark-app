/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'williambucket2.s3.amazonaws.com',
        // pathname: '/**',          // optional – defaults to /** 
        // port: '',                 // optional – defaults to '' (any)
      },
    ],
    // or simply:
    // domains: ['williambucket2.s3.amazonaws.com'],   // legacy shorthand
  },
};

export default nextConfig;

