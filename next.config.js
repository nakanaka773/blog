/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// next.config.js
module.exports = {
  images: {
    domains: ['images.microcms-assets.io'],  // microCMSの画像ホストドメインを追加（実際のドメインはあなたの環境に合わせてください）
  },
}
