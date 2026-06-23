import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Equipo from '../components/Equipo.vue'
import Noticias from '../components/Noticias.vue'
import NoticiaDetalle from '../components/NoticiaDetalle.vue'
import Tienda from '../components/Tienda.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/equipo',
    component: Equipo
  },
  {
    path: '/noticias',
    component: Noticias
  },
  {
    path: '/noticias/:id',
    component: NoticiaDetalle
  },
  {
    path: '/tienda',
    component: Tienda
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router