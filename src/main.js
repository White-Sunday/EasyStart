import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router"

Vue.use(ElementUI)
Vue.config.productionTip = false

import axios from 'axios'

Vue.prototype.$axios = axios

axios.defaults.baseURL = 'http://localhost:8000';//后端开发环境地址
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头信息。
// axios.defaults.headers.common['accessToken'] = 'FA4C308D5E8F6409E01344ADDAEB4C71';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
