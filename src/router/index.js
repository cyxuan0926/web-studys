import Vue from 'vue'
import Router from 'vue-router'
import app from '../App'
import base from './modules/base'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: app,
      children: [
        ...base
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})
