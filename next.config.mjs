/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/apresentacao-pet-fy',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
