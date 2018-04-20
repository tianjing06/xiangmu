# 项目总结

> 

## 后台管理系统


# 技术选型
项目基于 webpack 模板,框架采用Vue,使用到的技术有vuex，Element-UI，es6，less等。
考虑到开发人员比较少，vue配套的element-ui框架及脚手架比较完善和满足需求，所以选用vue框架。
使用es6语法，是因为es5有一些语言特性的缺失,如：没有模块管理，没有块级作用域，全局变量易污染等等，
而且es6也已经开始普及使用了，同时用es6也不用担心环境是否支持（babel）。
选用less是因为less 简单,易上手;属于css的基础拓展，更适合静态界面写样式。

# 路由搭建
const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/home/homePage',
          name: 'HomePage',
          component: HomePage
        },
        { path: '//home/advertisement', redirect: '/home/advertisement/originality' },
        {
          path: '/home/advertisement',
          name: 'Advertisement',
          component: Advertisement,
          children: [
            {
              path: '/home/advertisement/plan',
              name: 'Plan',
              component: Plan
            },
            {
              path: '/home/advertisement/unit',
              name: 'Unit',
              component: Unit
            },
            {
              path: '/home/advertisement/originality',
              name: 'Originality',
              component: Originality,
              children: [
                {
                  path: '/home/advertisement/originality/1',
                  name: 'Plan1',
                  component: Plan1,
                  children: [
                    {
                      path: '/home/advertisement/originality/1/plans',
                      name: 'plans',
                      component: Plans
                    },
                    {
                      path: '/home/advertisement/originality/1/planes',
                      name: 'planes',
                      component: Planes
                    }
                  ]
                },
                {
                  path: '/home/advertisement/originality/2',
                  name: 'Plan2',
                  component: Plan2
                },
                {
                  path: '/home/advertisement/originality/3',
                  name: 'Plan3',
                  component: Plan3
                }
              ]
            }
          ]
        },
        {
          path: '/home/data',
          name: 'Data',
          component: Data
        },
        {
          path: '/home/holdAll',
          name: 'HoldAll',
          component: HoldAll
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }

  ]
})
router.beforeEach((to, from, next) => {
  let isLogin = checkLoginStatus()
  if (to.name == 'login') {
    next()
  } else {
    if (!isLogin) {
      next({
        name: 'login'
      })
    } else {
      next()
    }
  }

  next()
})
function checkLoginStatus () {
  let tk = localStorage.getItem('token')
  return !!tk
}
export default router


# 数据请求，及封装，全局请求接口

数据请求用的axios 里面有请求拦截和响应拦截，然后将axios的实例请求拦截和响应拦截后再抛出的

封装的全局接口 用的server.js里面的设置跨域成为的全局接口

# 项目中的核心功能和难点功能

## 核心功能

数据请求拦截

对elementUi及相关功能组件的使用

echarts库的正确使用及图表的更新

## 难点功能

时间区间的处理与计算

图片上传功能

# 数据管理

数据的管理主要使用vuex

https://github.com/tianjing06/xiangmu/tree/master/src/store
