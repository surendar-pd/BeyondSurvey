/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    // disableStaticImages: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ltfs.com",
        pathname: "/**",
      },
    ],
  },
}

module.exports = nextConfig
