import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/login',
      component: resolve => require(['../views/login.vue'], resolve) // 登录
    }
  ]
})
