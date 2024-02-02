/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/blog",
  env: {
    APP_URL: process.env.APP_URL,
  },
};

module.exports = nextConfig;
