import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewContact from '@/components/NewContact'
//新添加，之后在下方的component: NewContact才会生效
//vueCLI2 build/webpack.base.conf.js文件中@是配置的，默认代表src
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/newcontact',//和router-link to相呼应，导航到/newcontact
            name: 'NewContact',
            component: NewContact
        }
    ]
})
