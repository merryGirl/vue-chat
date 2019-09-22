/* eslint-disable prettier/prettier */
const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const userData = require('./mock/user.json')   // 用户信息

module.exports = {
  publicPath: '/',
  productionSourceMap: false,

  devServer: {
    before(app) {
      // 用户登录验证
      app.get('/user/login', jsonParser, (req, res) => {
        res.json(userData);
      });

      // 当前登录用户信息
      app.get('/currentUser', jsonParser, (req, res) => {
        let data = {
          code: 200,
          result: {
            name: "admin",
            position: '前端', 
            company: '公司',
            introduction: '我是蓝色一只蓝精灵'
          },
        }
        res.json(data);
      });
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
