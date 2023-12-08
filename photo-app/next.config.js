/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DROPBOX_ACCESS_TOKEN: process.env.DROPBOX_ACCESS_TOKEN,
    },
}


module.exports = nextConfig;
