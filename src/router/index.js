import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Projects from '@/components/Projects'
import Message from '@/components/Message'
import Name from '@/components/Name'
import Contact from '@/components/Contact'
import Coverletter from '@/components/Coverletter'
import Github from '@/components/Github'
import CoverText from '@/components/CoverText'
import Adobe from '@/components/Adobe'

Vue.use(Router)

Vue.component('main-content', Main)
Vue.component('name-content', Name)
Vue.component('projects', Projects)
Vue.component('message', Message)
Vue.component('contact', Contact)
Vue.component('coverletter', Coverletter)
Vue.component('github', Github)
Vue.component('covertext', CoverText)
Vue.component('adobe', Adobe)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/hello/:name',
      name: 'Name',
      component: Name
    },
    {
      path: '*',
      component: Main
    },
    {
      path: '/cl/:job/:position',
      name: 'Coverletter',
      component: Coverletter
    },
    {
      path: '/github',
      name: 'Github',
      component: Github
    },
    {
      path: '/adobe',
      name: 'Adobe',
      component: Adobe
    }
  ]
})
