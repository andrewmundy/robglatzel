import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Hunk from '@/components/Section'
import Projects from '@/components/Projects'
import Message from '@/components/Message'

Vue.use(Router)

Vue.component('hunk', Hunk)
Vue.component('main-content', Main)
Vue.component('projects', Projects)
Vue.component('message', Message)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
