module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/nextjs-microcms-blog-test' : '',
  images: {
    domains: ['images.microcms-assets.io'],
    disableStaticImages: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  },
}
