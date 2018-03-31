import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import HowItWorks from '@/components/HowItWorks'
import vhsToDvd from '@/components/vhsToDvd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'User',
      component: User,
      // redirect: '/send',
      redirect: '/send',
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '/:state',
          name: 'How it works?',
          component: HowItWorks,
          props: { default: true, sidebar: false }
        },
      ]
    },
    {
      path: '/vhs-to-dvd',
      name: 'Vhs to Dvd',
      component: User,
      // redirect: '/send',      
      children: [
        // {
        //   // UserProfile will be rendered inside User's <router-view>
        //   // when /user/:id/profile is matched
        //   path: '/:state',
        //   name: 'Convert Vhs to Dvd',
        //   component: vhsToDvd,
        //   props: { default: true, sidebar: false }
        // },
        {
          path: '/vhs-to-dvd',
          name: 'VHS-To-DVD',
          component: vhsToDvd,
          props: { default: true, sidebar: false }
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  }
})
