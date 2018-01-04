import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Hunk from '@/components/Section'

Vue.use(Router)

Vue.component('hunk', Hunk)
Vue.component('main', Main)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
