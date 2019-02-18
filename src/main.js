// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  template: '<App/>',
  data:{
    value:'全局变量'
  },
  //其他的生命周期方法:mounted  updated  destroyed
  created:function () {
    console.log("创建vue实例完成立马触发的方法");
  }
})



