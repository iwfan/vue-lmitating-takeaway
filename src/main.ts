import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import 'normalize.css'
import './common/stylus/index.styl'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: h => h(App)
})
