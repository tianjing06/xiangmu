import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Advertisement from '@/components/Advertisement.vue'
import Data from '@/components/Data.vue'
import HoldAll from '@/components/HoldAll.vue'
import HomePage from '@/components/HomePage.vue'
import Login from '@/components/Login.vue'
import Originality from '../components/Adv/Originality.vue'
import Plan from '../components/Adv/Plan.vue'
import Unit from '../components/Adv/Unit.vue'
import Plan1 from '../components/Adv/ori/Plan1'
import Plan2 from '../components/Adv/ori/Plan2'
import Plan3 from '../components/Adv/ori/Plan3'
import Plans from '../components/Adv/ori/Plans'
import Planes from '../components/Adv/ori/Planes'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/home/homePage',
          name: 'HomePage',
          component: HomePage
        },
        { path: '//home/advertisement', redirect: '/home/advertisement/originality' },
        {
          path: '/home/advertisement',
          name: 'Advertisement',
          component: Advertisement,
          children: [
            {
              path: '/home/advertisement/plan',
              name: 'Plan',
              component: Plan
            },
            {
              path: '/home/advertisement/unit',
              name: 'Unit',
              component: Unit
            },
            {
              path: '/home/advertisement/originality',
              name: 'Originality',
              component: Originality,
              children: [
                {
                  path: '/home/advertisement/originality/1',
                  name: 'Plan1',
                  component: Plan1,
                  children: [
                    {
                      path: '/home/advertisement/originality/1/plans',
                      name: 'plans',
                      component: Plans
                    },
                    {
                      path: '/home/advertisement/originality/1/planes',
                      name: 'planes',
                      component: Planes
                    }
                  ]
                },
                {
                  path: '/home/advertisement/originality/2',
                  name: 'Plan2',
                  component: Plan2
                },
                {
                  path: '/home/advertisement/originality/3',
                  name: 'Plan3',
                  component: Plan3
                }
              ]
            }
          ]
        },
        {
          path: '/home/data',
          name: 'Data',
          component: Data
        },
        {
          path: '/home/holdAll',
          name: 'HoldAll',
          component: HoldAll
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }

  ]
})
router.beforeEach((to, from, next) => {
  let isLogin = checkLoginStatus()
  if (to.name == 'login') {
    next()
  } else {
    if (!isLogin) {
      next({
        name: 'login'
      })
    } else {
      next()
    }
  }

  next()
})
function checkLoginStatus () {
  let tk = localStorage.getItem('token')
  return !!tk
}
export default router
