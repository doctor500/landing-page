/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    images: {
        unoptimized: true
    },
    // Disable API routes and middleware for static export
    pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
    // For GitHub Pages deployment
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

module.exports = nextConfig
