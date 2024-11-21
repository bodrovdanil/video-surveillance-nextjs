const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    output: 'export',
    basePath: '/video-surveillance-nextjs',
    assetPrefix: isProd ? '/video-surveillance-nextjs/' : '',
};

export default nextConfig;