import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Home from '@/components/Home'
import Daily from '@/components/Daily'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/home/daily',
      name: 'Daily',
      component: Daily
    },
    {
      path: '/home/search',
      name: 'Search',
      component: Search
    }
  ]
})
