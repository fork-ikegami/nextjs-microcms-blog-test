module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
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
