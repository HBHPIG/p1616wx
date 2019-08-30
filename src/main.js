// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'we-vue/lib/style.css'
import WeVue from 'we-vue'
import axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false

Vue.use(WeVue)

/* eslint-disable no-new */
/* new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}) */

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  alert('错误的传参')
  return Promise.reject(error)
})

Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  created () {
    var devieWidth = Math.min(640, document.documentElement.clientWidth, document.documentElement.clientHeight)
    alert(devieWidth)
    var fonSize = devieWidth > 1080 ? 144 : devieWidth / 6.4
    document.documentElement.style.fontSize = fonSize + 'px'
  },
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
