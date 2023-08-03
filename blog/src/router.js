import Vue from 'vue'
import Router from "vue-router";
import List from './components/List.vue'
import Main from './components/Main.vue'

Vue.use(Router) 

const routes = [
  {
    path: '/list',
    component: List,
  },
  {
    path: '/main',
    component: Main
  }
]

export default new Router({
  mode: 'history',
  routes,
})