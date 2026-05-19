import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Equipo from '../components/Equipo.vue'

const routes = [
  {
    path: '/',
    component: Home
  },

  {
    path: '/equipo',
    component: Equipo
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router