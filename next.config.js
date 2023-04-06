/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    emotion: true,
    styledComponents: true
  }
}

module.exports = nextConfig
