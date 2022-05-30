import { createRouter, createWebHashHistory } from 'vue-router'

// import Home from './views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: import(/* webpackChunkName: "home" */ './views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
