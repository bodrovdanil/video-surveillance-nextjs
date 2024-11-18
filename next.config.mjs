const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/video-surveillance-nextjs',
    assetPrefix: isProd ? '/video-surveillance-nextjs/' : '', 
};

export default nextConfig;

