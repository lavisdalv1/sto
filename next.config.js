const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
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
