/* eslint-disable prettier/prettier */
"use strict";

import Vue from 'vue';
import router from '../router.js';
import axios from 'axios';

let config = {
  baseURL: process.env.NODE_ENV === 'production' ? 'http://192.168.1.56/api' : '/dev',
  timeout: 13 * 1000, // Timeout
  withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // config.url = config.url + (config.url.indexOf('?') > 0 ? '&' : '?') + `cb=${new Date().getTime()}`;

    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    
    let codes = [200, 201, 204];   
    if (response.status === 200 && response.data.code === 558) {

      // 用户登录态失效
      router.push({path: '/'})
      return response;
    }else if (codes.indexOf(response.data.code) > -1) {

      // 若接口调取成功，判断passed字段是否为true
      response.data.passed = true;
      return response;
    } else {
      return response;
    }
  },
  function(error) {
    Vue.prototype.$message.warning('链接服务器失败！');
    return Promise.reject(error);
  }
);

export default _axios;
