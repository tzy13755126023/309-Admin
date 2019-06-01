import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass:"router-link-active",
  mode:'history',
  routes: [
  	{
      path:'/',
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      meta: {
            requireAuth: true,  
            title: '首页' ,
            icon:'el-icon-s-help'
      },
      component: () => import('../pages/Index')
    },
    {
      path: '/login',
      name: 'Login', 
      component: () => import('../pages/Login/Login')
    },
    {
      path:'/userList',
      name:'userList',
      meta: {    // 配置meta
            title: '用户列表' ,
            requireAuth: true
      }, 
      component :() => import('../pages/userList/userList')
    },
    {
      path:'/BJuserList/:userID/:username/:tel/:QQ/:guhua/:address/:money',
      name:'BJuserList',
      meta: {    // 配置meta
            title: '修改用户信息' ,
            requireAuth: true
      }, 
      component :() => import('../pages/userList/BJuserList')
    },
    {
      path:'/qiantaiGoods',
      name:'qiantaiGoods',
      meta: {    // 配置meta
            title: '前台商品' ,
            requireAuth: true
      }, 
      component :() => import('../pages/QianTaiGoods/qiantaiGoods')
    },
    {
      path:'/miaoshuAgain/:item',
      name:'miaoshuAgain',
      meta: {    // 配置meta
            title: '修改前台展示商品信息' ,
            requireAuth: true
      }, 
      component :() => import('../pages/QianTaiGoods/miaoshuAgain')
    },
    {
      path:'/userYJFK',
      name:'userYJFK',
      meta: {    // 配置meta
            title: '用户反馈信息' ,
            requireAuth: true
      }, 
      component :() => import('../pages/userYJFK/userYJFK')
    },
    {
      path:'/Dangjibibei',
      name:'Dangjibibei',
      meta: {    // 配置meta
            title: '当季必备推送' ,
            requireAuth: true
      }, 
      component :() => import('../pages/Dangjibibei/dangjibibei')
    },
    //所有健康资讯数据
    {
      path:'/HealthDatas',
      name:'HealthDatas',
      meta: {    // 配置meta
            title: '查看资讯文章' ,
            requireAuth: true
      }, 
      component: () =>import('../pages/HealthDatas/HealthDatas'),
    },
    {
      path:'/XXHealthDatas/:healthdatasID',
      name:'XXHealthDatas',
      meta: {    // 配置meta
            title: '详细资讯文章' ,
            requireAuth: true
      }, 
      component: () =>import('../pages/HealthDatas/XXHealthDatas'),
    },
    {
      path:'/FaBuhealthNews',
      name:'FaBuhealthNews',
      meta: {    // 配置meta
            title: '发布资讯文章' ,
            requireAuth: true
      }, 
      component: () =>import('../pages/HealthDatas/FaBuhealthNews'),
    },
    //商家管理
    {
      path:'/DoneStores',
      name:'DoneStores',
      meta: {    // 配置meta
            title: '已审核商家' ,
            requireAuth: true
      }, 
      component: () =>import('../pages/StoresGuanLi/DoneStores'),
    },
    {
      path:'/DaiStores',
      name:'DaiStores',
      meta: {    // 配置meta
            title: '待审核商家' ,
            requireAuth: true
      }, 
      component: () =>import('../pages/StoresGuanLi/DaiStores'),
    },
    {
      path:'/GetAllStoreGoods/:storesID',
      name:'GetAllStoreGoods',
      meta: {    // 配置meta
            title: '查看商家商品' ,
            requireAuth: true
      }, 
      component: () =>import('../pages/StoresGuanLi/getAllStoreGoods'),
    },
    {
      path:'/FaBuGoods/:storesID',
      name:'FaBuGoods',
      meta: {    // 配置meta
            title: '商家发布商品' ,
            requireAuth: true
      }, 
      component: () =>import('../pages/StoresGuanLi/FaBuGoods'),
    },
    {
      path:'/BjstoresInfo/:item',
      name:'BjstoresInfo',
      meta: {    // 配置meta
            title: '编辑商家信息' ,
            requireAuth: true
      }, 
      component: () =>import('../pages/StoresGuanLi/BjstoresInfo'),
    },
    //订单管理
    {
      path:'/Dingdan',
      name:'Dingdan',
      component: () =>import('../pages/Dingdan/Dingdan'),
      redirect:'/dingdan/daifahuo',
      children:[
          //待商家发货
          {
            path:'DaiFaHuo',
            name:'DaiFaHuo',
            meta: {
                title: '待商家发货' ,
                requireAuth: true  
            },
            component: () =>import('../pages/Dingdan/DaiFaHuo'),
          },
          //待用户收货
          {
            path:'DaiShouHuo',
            name:'DaiShouHuo',
            meta: {
                title: '待用户收货' ,
                requireAuth: true 
            },
            component: () =>import('../pages/Dingdan/DaiShouHuo'),
          },
          //待用户评价
          {
            path:'DaiPingJia',
            name:'DaiPingJia',
            meta: {
                title: '待用户评价' ,
                requireAuth: true  
            },
            component: () =>import('../pages/Dingdan/DaiPingJia'),
          },
           //已完成
          {
            path:'YiWanCheng',
            name:'YiWanCheng',
            meta: {
                title: '已完成订单' ,
                requireAuth: true  
            },
            component: () =>import('../pages/Dingdan/YiWanCheng'),
          },  
      ]
    },
    {
      path:'/Record',
      name:'Record',
      meta: {    // 配置meta
            title: '操作日志' ,
            requireAuth: true
      }, 
      component :() => import('../pages/Record/Record')
    },
    {
      path:'/UserPingLun',
      name:'UserPingLun',
      meta: {    // 配置meta
            title: '用户评论' ,
            requireAuth: true
      }, 
      component :() => import('../pages/UserPingLun/UserPingLun')
    },
    // 当页面地址和上面任一地址不匹配，则跳转到404
    // {
    //   path: '*',
    //   redirect: '/404'
    // }
  ]
})
