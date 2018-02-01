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
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '',
          name: 'How it works?',
          component: HowItWorks
        }
      ]
    }
  ]
})
