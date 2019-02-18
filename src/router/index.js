import Vue from 'vue'
import VueRouter from 'vue-router'
import routerHello from '../components/routerHello'
Vue.use(VueRouter)

export  default new VueRouter({
  mode:"history",
  linkActiveClass:"active",
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/routerHello',
      component: routerHello
    }
  ]
})

