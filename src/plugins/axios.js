/* eslint-disable prettier/prettier */
"use strict";

// import Vue from 'vue';
// import router from '../router.js';
import axios from 'axios';

let config = {
  timeout: 13 * 1000, // Timeout
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

_axios.interceptors.response.use(
  function(response) {
    
    if (response.status === 200 && response.data.code === 200) {

      // 若接口调取成功，判断passed字段是否为true
      response.data.passed = true;
      return response;
     } else {
      return response;
    }
  },
  function(error) {
    console.log('链接服务器失败！');
    return Promise.reject(error);
  }
);

export default _axios;
