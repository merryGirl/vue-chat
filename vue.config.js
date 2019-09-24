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
      // 登录
      app.post('/user/login', jsonParser, (req, res) => {
        let Val = false

        userData.result.filter(userItem => {
          if (userItem.email == req.body.email && userItem.pass == req.body.pass) {
            Val = true
          }	
        })
  
        let code = Val == true ? 200 : 201
        let msg =  Val == true ? '登录成功！' : '登录失败,用户名或密码错误！'

        res.json({
          "code": code,
          "result": Val,
          "message": msg
        })
      })

      // 注册
      app.post('/user/registered', jsonParser, (req, res) => {
        fs.readFile(path.resolve(__dirname, './mock/user.json'), (err, data) => {
          let flag = false

          if (err) {
            throw err
          } else {
            let fileData = JSON.parse(data)
            let id = parseInt(fileData[fileData.length - 1].id) + 1
            let userNew = {
              id: id,
              name: req.body.name,
              email: req.body.email,
              pass: req.body.pass,
              auth: 'member',
              position: '',
              company: '',
              introduction: '',
              starArticleIds: []  
            }
            fileData.push(userNew)
            let userDataStr = JSON.stringify(fileData)
    
            fs.writeFile(path.resolve(__dirname, './mock/user.json'), userDataStr, err => {
              if (err) console.error(err)
              else {
                flag = true
                console.log('write success')
              }

              res.json({
                "code": flag == true ? 200 : 201,
                "result": flag == true ? 'success' : 'fail',
                "message": flag == true ? '注册成功！' : '注册失败！'
              })
            })
            
          }
  
        })
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
