/** @type {import('next').NextConfig} */

const nextConfig = {

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

