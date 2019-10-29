import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AboutUs from './views/AboutUs.vue'
import GetStarted from './views/GetStarted.vue'
import OurProducts from './views/OurProducts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/getstarted',
      name: 'getstarted',
      component: GetStarted
    },
    {
      path: '/ourproducts',
      name: 'ourproducts',
      component: OurProducts
    }
  ]
})
