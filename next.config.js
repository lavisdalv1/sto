const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com'],
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'media.graphassets.com',
  //       port: '',
  //       // pathname: '/my-bucket/**',
  //     },
  //   ],
  // },
});
