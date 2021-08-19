const defaultFileLoaderOptionsGenerator =
  require("webpack-image-resize-loader/dist/index").defaultFileLoaderOptionsGenerator;

module.exports = {
  publicPath: ".",
  chainWebpack: (config) => {
    config.module
      .rule("images-resize")
      .test(/\.(png|jpe?g|webp|tiff?)$/i)
      .use("resize")
      .loader("webpack-image-resize-loader")
      .options({
        fileLoader: "url-loader",
        fileLoaderOptionsGenerator: (options, existingOptions) => ({
          ...existingOptions,
          fallback: {
            ...existingOptions.fallback,
            options: defaultFileLoaderOptionsGenerator(
              options,
              existingOptions.fallback.options
            ),
          },
        }),
      });
  },
};
