import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './vuex/store' // 引入store
import router from "./router"

Vue.use(ElementUI)
Vue.config.productionTip = false

import axios from 'axios'

Vue.prototype.$axios = axios

axios.defaults.baseURL = 'http://localhost:8080';//后端开发环境地址——不用设置代理，写死交互的服务器；本机服务器地址的话，遇到/api/会启动代理
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头信息。
// axios.defaults.headers.common['accessToken'] = 'FA4C308D5E8F6409E01344ADDAEB4C71';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
