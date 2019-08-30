/* eslint-disable prettier/prettier */
import Vue from "vue";
import Router from "vue-router";

const login = () => import('@/views/login')

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
  ]
});
