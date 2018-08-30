// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import './importElement.js'
import 'element-ui/lib/theme-chalk/index.css'
import './filter.js'
import moment from 'moment'
moment.locale('zh-cn')
Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$http = axios
const store = new Vuex.Store({
  state: {
    ch: localStorage.getItem('lang') === 'ch',
    allShow: false,
    shShow: false
  },
  mutations: {
    toCh (state) {
      localStorage.setItem('lang', 'ch')
      state.ch = true
      moment.locale('zh-cn')
    },
    toEn (state) {
      localStorage.setItem('lang', 'en')
      state.ch = false
      moment.locale('en')
    },
    toShow (state) {
      state.allShow = true
    },

    toHide (state) {
      state.allShow = false
    },
    toShowSh (state) {
      state.shShow = true
    },
    toHideSh (state) {
      state.shShow = false
    }
  }
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})
/* eslint-disable no-new */
new Vue({el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'})
