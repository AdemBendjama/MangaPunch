/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 's4.anilist.co',
                port: '',
                pathname: '/file/anilistcdn/**',
            },
            {
                protocol: 'https',
                hostname: 'drive.usercontent.google.com',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
