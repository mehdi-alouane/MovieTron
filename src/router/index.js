import Vue from 'vue'
import Router from 'vue-router'
import homeView from '@/views/index'
import radnomView from '@/views/random'

Vue.use(Router)

const routes = [
  { path: '/', name: 'home', component: homeView },
  { path: '/random', name: 'random', component: radnomView }
]

export default new Router({
  routes,
  mode: 'history',
  linkActiveClass: true
})
