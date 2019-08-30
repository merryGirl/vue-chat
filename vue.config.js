/* eslint-disable prettier/prettier */
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const userData = require('./mock/user.json')   // 用户信息

module.exports = {
  publicPath: '/',  
  productionSourceMap: false,        //去掉map
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
};