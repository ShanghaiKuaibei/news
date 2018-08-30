/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Home from "../components/home/index.vue"
import London from "../components/metting/london.vue"
import Dubai from "../components/metting/dubai.vue"
import Isreal from "../components/metting/isreal.vue"
import About from "../components/abouts/abouts.vue"
import News from "../components/news/news.vue"
import Newsmsg from "../components/news/newsmsg.vue"
import Articles from "../components/abouts/echange.vue"
import ShangHai from '../components/metting/shanghai.vue'
import Jordan from '../components/metting/jordan.vue'

export default new Router({
  routes: [
    { path: "/ch", redirect: to=>{
      localStorage.setItem('lang', 'ch');
      return '/index/ch'
    }},
    { path: '/en', redirect: to=>{
      localStorage.setItem('lang', 'en')
      return '/index/en' 
    }},
    { path: '/', redirect: to=>{
      return '/ch' 
    }},
    { path: "/index/:lang", component: Home },
    { path: "/category/news", component: News },
    { path: "/conference-london", component: London },
    { path: "/conferencedubai", component: Dubai },
    { path: "/conferenceisrael", component: Isreal },
    { path: "/conferenceshanghai", component: ShangHai },
    { path: "/conferencejordan", component: Jordan },
    { path: "/category/articles", component: Articles },
    { path: "/aboutus", component: About },
    { path: "/category/news/:id", component: Newsmsg },
   
  ]
})
