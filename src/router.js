import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Favoriten from './views/favoriten.vue'
import Laender from './views/Laender.vue'
import Kategorien from './views/Kategorien.vue'
import Karte from './views/Karte.vue'
import Suche from './views/Suche.vue'
import List from './views/List.vue'
import Ueber from './views/Ueber.vue'
import Single from './views/Single.vue'


Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/favoriten',
    name: 'favoriten',
    component: Favoriten
  },
  {
    path: '/laender',
    name: 'laender',
    component: Laender
  },
  {
    path: '/kategorien',
    name: 'kategorien',
    component: Kategorien
  },
  {
    path: '/karte',
    name: 'karte',
    component: Karte
  },
  {
    path: '/suche',
    name: 'suche',
    component: Suche
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/ueber',
    name: 'ueber',
    component: Ueber
  },
  {
    path: '/single',
    name: 'single',
    component: Single
  }
]
})
