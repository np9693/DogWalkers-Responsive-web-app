import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import DogOwners from './views/Dogowners.vue'
import Walkers from './views/Walkers.vue'
import Postowner from './views/postowner.vue'
import Postwalker from './views/postwalker.vue'
import Walkerprofile from './views/walkerprofile.vue'
import Ownerprofile from './views/ownerprofile.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/About',
      name: 'about',
      component: About
    },
    {
      path: '/dogowners',
      name: 'dogowners',
      component: DogOwners
    },
    {
      path: '/walkers',
      name: 'walkers',
      component: Walkers
    },
    {
      path: '/postowner',
      name: 'postowner',
      component: Postowner
    },
    {
      path: '/postwalker',
      name: 'postwalker',
      component: Postwalker
    },
    {
      path: '/walkers/:id',
      name: 'walkerprofile',
      component: Walkerprofile
    },
    {
      path: '/dogowners/:id',
      name: 'ownerprofile',
      component: Ownerprofile
    }
  ]
})
