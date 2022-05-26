import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PranzoView from '../views/PranzoView.vue'
import CenaView from '../views/CenaView.vue'
import DrinkView from '../views/DrinkView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pranzo',
    name: 'Pranzo',
    component: PranzoView
  },
  {
    path: '/cena',
    name: 'Cena',
    component: CenaView
  },
  {
    path: '/drink',
    name: 'Drink',
    component: DrinkView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
