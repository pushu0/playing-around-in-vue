import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import HowItWorks from '@/components/HowItWorks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'User',
      component: User,
      redirect: '/send',
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '/:state',
          name: 'How it works?',
          component: HowItWorks,
          props: { default: true, sidebar: false }
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
        // console.log("to "+to+" from "+from+" savedPosition "+savedPosition)
        // console.log(to)
      }, 500)
    })
  }
})
