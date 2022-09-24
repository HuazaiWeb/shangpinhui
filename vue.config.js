const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 去除map文件
  productionSourceMap:false,
  transpileDependencies: true,
  // 关闭eslint校验工具
  lintOnSave: false,
  // 代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
        // pathRewrite: { "^/api": "" },
      },
    },
  },
});
