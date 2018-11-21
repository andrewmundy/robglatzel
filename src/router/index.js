import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Projects from '@/components/Projects'
import Project from '@/components/Project'
import Message from '@/components/Message'
import Name from '@/components/Name'
import Contact from '@/components/Contact'
import Coverletter from '@/components/Coverletter'

import CoverText from '@/components/CoverText'

import VueFire from 'vuefire'

Vue.use(VueFire)
Vue.use(Router)

Vue.component('main-content', Main)
Vue.component('name-content', Name)
Vue.component('project', Project)
Vue.component('projects', Projects)
Vue.component('message', Message)
Vue.component('contact', Contact)
Vue.component('coverletter', Coverletter)

Vue.component('covertext', CoverText)

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
      path: '/project/:name',
      name: 'Project',
      component: Project
    },
    {
      path: '*',
      component: Main
    },
    {
      path: '/cl/:job/:position',
      name: 'Coverletter',
      component: Coverletter
    }
  ]
})
