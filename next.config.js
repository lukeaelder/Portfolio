/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  }
}

const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['gsap']);

module.exports = withPlugins([withTM], nextConfig)
