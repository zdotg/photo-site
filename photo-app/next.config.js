/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DROPBOX_ACCESS_TOKEN: process.env.DROPBOX_ACCESS_TOKEN,
    },
    images: {
        domains: ['dl.dropboxusercontent.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dl.dropboxusercontent.com',  
                port: '',
                pathname: '/**',  
            },
        ],
    },
}


module.exports = nextConfig;
