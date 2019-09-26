/* eslint-disable prettier/prettier */
const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const userData = require('./mock/user.json')   // 用户信息

module.exports = {
  publicPath: '/',
  productionSourceMap: false,

  devServer: {
    before(app) {
      function rewriteJson(req, res, jsonUrl, objData, resMsg) {
        fs.readFile(path.resolve(__dirname, jsonUrl), (err, data) => {
          let flag = false

          if (err) {
            throw err
          } else {
            let fileData = JSON.parse(data)
            let id = fileData.length ? (parseInt(fileData[fileData.length - 1].id) + 1) : 0
            let userNew = objData
            userNew.id = id;
            fileData.push(userNew)
            let userDataStr = JSON.stringify(fileData)
    
            fs.writeFile(path.resolve(__dirname, jsonUrl), userDataStr, err => {
              if (err) console.error(err)
              else {
                flag = true
                console.log('write success')
              }

              res.json({
                code: flag == true ? 200 : 201,
                result: flag == true ? 'success' : 'fail',
                message: flag == true ? `${resMsg}成功` : `${resMsg}失败`
              })
            })
            
          }
  
        })
      }

      // 登录
      app.post('/user/login', jsonParser, (req, res) => {
        let val = false

        userData.filter(userItem => {
          if (userItem.email == req.body.email && userItem.pass == req.body.pass) {
            val = true
          }	
        })

        res.json({
          code: val == true ? 200 : 201,
          result: val == true ? 'success' : 'fail',
          message: val == true ? '登录成功！' : '登录失败,用户名或密码错误！'
        })
      })

      // 注册
      app.post('/user/registered', jsonParser, (req, res) => {
        let jsonUrl = './mock/user.json'
        let objData = {
              name: req.body.name,
              email: req.body.email,
              pass: req.body.pass,
              auth: 'member',
              position: '',
              company: '',
              introduction: '',
              starArticleIds: []  
            }
        let resMsg = '注册'

        rewriteJson(req, res, jsonUrl, objData, resMsg)
      })


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
        res.json(data)
      })

      // 发布文章
      app.post('/publish', jsonParser, (req, res) => {
        let jsonUrl = './mock/blog.json'
        let objData = {
            title: req.body.title,
            content: req.body.content,
            publishUser: req.body.publishUser,
            publishTime: req.body.publishTime,
            starIds: [],
            collectIds: []
          }
        let resMsg = '博客发布'

        rewriteJson(req, res, jsonUrl, objData, resMsg)
      })

      // 返回所有博客信息
      app.get('/blogs', jsonParser, (req, res) => {
        let flag
        fs.readFile(path.resolve(__dirname, './mock/blog.json'), (err, data) => {
          if (err) flag = false
          else {
            flag = true
          }

          res.json({
            code: flag == true ? 200 : 201,
            result: flag == true ? JSON.parse(data) : 'fail',
            message: flag == true ? '获取博客数据成功' : '获取博客数据失败'
          })
        })
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
