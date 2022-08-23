/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@rrios-dev/styled',
])

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withTM(nextConfig)
