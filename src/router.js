/* eslint-disable prettier/prettier */
import Vue from "vue";
import Router from "vue-router";

const login = () => import('@/views/login')
const userHomepage = () => import('@/views/user/index')
const userInfo = () => import('@/views/user/info-card')
const blog = () => import('@/views/blog/index')
const blogDetail = () => import('@/views/blog/detail')
const hotBlog = () => import('@/views/hotBlog/index')
const community = () => import('@/views/chat/index')
const notifications = () => import('@/views/notifications/index')
const edit = () => import('@/views/edit/index')

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
      component: userInfo,
      meta: {
        headTile: '',
      }
    },
    {
      path: '/userHomepage',
      name: 'userHomepage',
      component: userHomepage
    },
    {
      path: '/',
      name: 'blog',
      component: blog
    },
    {
      path: '/blogDetail/:detailId',
      name: 'blogDetail',
      component: blogDetail
    },
    {
      path: '/hotBlog',
      name: 'hotBlog',
      component: hotBlog
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: notifications
    },
    {
      path: '/community',
      name: 'community',
      component: community
    },
    {
      path: '/edit',
      name: 'edit',
      component: edit
    },
  ]
});
