/** @type {import('next').NextConfig} */

const nextConfig = {
    output: "export",
    images: {unoptimized: true}
}


module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'static.namava.ir',
          port: '',
          pathname: '/Content/**',
        },
      ],
    },
  }

