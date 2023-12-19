/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    trailingSlash: true,
    output: 'export',
    reactStrictMode: true,

 // Add basePath
  basePath: '/github-pages',

    }
    module.exports = nextConfig