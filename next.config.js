/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')

module.exports = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'vi'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
})
