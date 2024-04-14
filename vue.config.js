const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    iconPaths: {
      faviconSVG: "icon.png",
      favicon32: "icon.png",
      favicon16: "icon.png",
      appleTouchIcon: "icon.png",
      maskIcon: "icon.png",
      msTileImage: "icon.png",
    },
    manifestOptions: {
      display: "standalone",
    },
    themeColor: "#fff",
    appleMobileWebAppCapable: "yes",
  },
  chainWebpack: (config) => {
    config.plugin("define").tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: "true",
        __VUE_PROD_DEVTOOLS__: "false",
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
      });
      return definitions;
    });
  },
});
