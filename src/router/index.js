import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Projects from '@/components/Projects'
import Message from '@/components/Message'
import Name from '@/components/Name'
import Contact from '@/components/Contact'

Vue.use(Router)

Vue.component('main-content', Main)
Vue.component('name-content', Name)
Vue.component('projects', Projects)
Vue.component('message', Message)
Vue.component('contact', Contact)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/:name',
      name: 'Name',
      component: Name
    },
    {
      path: '*',
      component: Main
    }
  ]
})
