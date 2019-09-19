/* eslint-disable prettier/prettier */
// const express = require('express')
const path = require('path')
// const app = express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const userData = require('./mock/user.json')   // 用户信息

module.exports = {
  publicPath: '/',
  // useEslint: false,

  //去掉map
  productionSourceMap: false,

  devServer: {
    before(app) {
      // 用户登录验证
      app.get('/user/login', jsonParser, (req, res) => {
        res.json(userData);
		})
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

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/css/variable.less')]
    }
  },
};
