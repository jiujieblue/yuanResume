import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import contact from '@/components/contact'
import Interest from '@/components/Interest'
import Mywork from '@/components/Mywork'
import Professional from '@/components/Professional'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/Interest',
      name: 'Interest',
      component: Interest
    },
    {
      path: '/Mywork',
      name: 'Mywork',
      component: Mywork
    },
    {
      path: '/Professional',
      name: 'Professional',
      component: Professional
    }
  ]
})
