// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from  'axios'
import qs from 'qs'
import store from './store'
import jQuery from 'jquery'
import VueFroala from 'vue-froala-wysiwyg'
// Require Froala Editor js file.
require('froala-editor/js/froala_editor.pkgd.min')
// Require Froala Editor css files.
require('froala-editor/css/froala_editor.pkgd.min.css')
require('font-awesome/css/font-awesome.css')
require('froala-editor/js/languages/zh_cn')
require('froala-editor/css/froala_style.min.css')

import {Loading,Button,Input,Form,FormItem,Icon,Menu,Submenu,Table,TableColumn,MenuItemGroup} from 'element-ui'
import {Container,Header,Aside,Main,MenuItem,Dropdown,DropdownMenu,DropdownItem,MessageBox} from 'element-ui'
import {Alert,Message,Breadcrumb,BreadcrumbItem,Row,Col,Pagination,Option,OptionGroup,Select} from 'element-ui'
import {DatePicker,TimePicker,TimeSelect,Tabs,TabPane,} from 'element-ui'

import '../theme/index.css'
import { Storage } from './util/Storage.js'

Vue.use(DropdownItem);Vue.use(DropdownMenu);Vue.use(MenuItemGroup);Vue.use(Icon);Vue.use(Main);
Vue.use(Input);Vue.use(Button);Vue.use(Form);Vue.use(FormItem);Vue.use(Menu);Vue.use(Container);
Vue.use(Submenu);Vue.use(TableColumn);Vue.use(MenuItem);Vue.use(Aside);Vue.use(Loading.directive);
Vue.use(Table);Vue.use(Dropdown);Vue.use(Alert);Vue.use(Breadcrumb);Vue.use(BreadcrumbItem);
Vue.use(Row);Vue.use(Col);Vue.use(Pagination);Vue.use(Option);Vue.use(OptionGroup);Vue.use(Select);
Vue.use(DatePicker);Vue.use(TimePicker);Vue.use(TimeSelect);Vue.use(VueFroala);Vue.use(Tabs);
Vue.use(TabPane);
window.$ = jQuery
Vue.prototype.$axios = Axios;
Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;


// 超时时间
Axios.defaults.timeout = 5000
var loadinginstace
// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
  loadinginstace = Loading.service({  fullscreen: true ,
                                      text:"拼命加载中",
                                      spinner:"el-icon-loading",
                                      background:"rgba(0, 0, 0, 0.8)",
                                      lock:false,
                                    })

  // 在发送请求之前做些什么
if (config.method=='post'){
    config.data= qs.stringify(config.data)
}if (store.state.token) {  
        // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = `token ${store.state.token}`
    }
    return config;
}, function (error) {
  // 对请求错误做些什么
  loadinginstace.close()
   Message.error({
   message: '加载超时'
   })
  return Promise.reject(error)
});
// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
if(response.status===200||response.status==304){
   //响应成功就关闭loading...0.3s的响应时间
   setTimeout( () => {
        loadinginstace.close()
   },400)
}
  return response;


}, function (error) {
  // 对响应错误做点什么
              
 if (error.response) {
      switch (error.response.status) {
        case 401: 
            // 返回 401 清除token信息并跳转到登录页面
            store.commit("setToen",'')
            localStorage.removeItem('token')
            router.replace({
                path: 'login',
                query: {redirect: router.currentRoute.fullPath}
            })
        case 504:
            loadinginstace.close()
            MessageBox('','加载数据失败，请检查您的网络设置！')
        case 404:
            loadinginstace.close()
            // router.push('/404')
      }

  }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  });

//路由守卫
router.beforeEach((to, from, next) => {  
    var storage = new Storage()
    store.commit('setToken',storage.get('admintoken'))
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.token) {  // 通过vuex state获取当前的token是否存在
            next();
        }
        else {
            router.app.$message({
              type:'warning',
              message:'请您先登录!'
            })
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })

        }
    }
    else {
        next();
    }
})
Vue.config.productionTip = false

//注册全局的价格过滤器(保留两位小数)
Vue.filter('money',function (value) {
  // return '￥' + Number(value.toFixed(2));
    return '￥' + value.toFixed(2);
}),
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
