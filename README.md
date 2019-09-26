# vue-chat-blog

为了验证+巩固vue，搭建可聊天版社区vue-chat-blog(简称vcBlog)

### 项目环境

`vue + express + websocket + editor`

### 概要

> 社区博客+聊天功能，数据本地mock，

### 预实现需求


## 初始化

* [ ] 网站主题颜色切换
* [ ] vue-i18n（中英文）
* [ ] 验证码


#### 1.个人主页

* [ ] 用户信息
* [ ] 可修改
* [ ] 登录通知
* [ ] 退出通知
* [ ] 自己所发博客合集
* [ ] 收藏博客合集
* [ ] three.js编辑的一个小功能

#### 2.聊天

* [ ] 一对一聊天
* [ ] 管理员群发消息
* [ ] 聊天表情包发送

#### 3.博客编辑

* [ ] 富文本编辑器
* [ ] markdown编辑器
* [ ] 可上传图片
* [ ] 文本形式有markdown
  
#### 4.社群

* [ ] 博客流
* [ ] 点赞、评论、收藏博客
* [ ] 针对谋篇博客的查看数据图表

#### 5.error

* [ ] 报错页面
* [ ] 平滑过渡动画

#### 6.细节

* [ ] 左下角的svg可爱的动画
* [ ] 右下角置顶
* [ ] 全局搜索关键字

## json表

> 博客表

字段 | 意义
---|---
id | 博客id
title | 博客题
content | 博客体
publishUser | 发布者
publishTime | 发布时间
starIds | 点赞者id数组
collectIds | 收藏者id数组

***

> 评论

* id | 评论id(与博客id对应)
* result
 
result字段 | 意义
---|---
name | 评论者昵称
time | 评论时间
content | 评论内容
