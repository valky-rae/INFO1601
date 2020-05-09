import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Home from '@/components/Home'
import Search from '@/components/Search'
import ComicSearch from '@/components/ComicSearch'
// import ComicInfo from '@/components/ComicInfo'

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
      path: '/home/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/ComicSearch',
      name: 'ComicSearch',
      component: ComicSearch

      // children: [
      //   {
      //     path: ':comicId',
      //     name: 'ComicInfo',
      //     component: ComicInfo,
      //     props: true
      //   }
      // ]
    }
  ]
})
