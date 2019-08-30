/* eslint-disable prettier/prettier */
/**
 * 配置axios代理
 * /dev 开发环境
 */
module.exports = {
  publicPath: '/',  
  productionSourceMap: false,        //去掉map
  devServer: {
    proxy: {
      '/dev': {
        target: 'http://192.168.1.140:1818',       //后端本地
        changeOrigin: true, 
        ws: true,
        pathRewrite: {
          '^/dev': '/' 
        }
      },
    }
  },
  configureWebpack: {
    performance: {
      maxEntrypointSize: 788480,
      maxAssetSize: 788480
    }
  },

  chainWebpack: config => {
    config.module.rules.delete('eslint');
    config.entry.app = ['babel-polyfill', './src/main.js'];
  },
};