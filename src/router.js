/* eslint-disable prettier/prettier */
import Vue from "vue";
import Router from "vue-router";

const login = () => import('@/views/login');
const userInfo = () => import('@/views/user/info')
const blog = () => import('@/views/blog/index')

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      component: userInfo
    },
    {
      path: '/',
      name: 'blog',
      component: blog
    },
  ]
});
