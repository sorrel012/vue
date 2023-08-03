import Vue from 'vue'
import Router from "vue-router";
import List from './components/List.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'

Vue.use(Router) 

const routes = [
  {
    path: '/list:id(\\d+)',
    component: List,
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/detail/',
    component: Detail
  }
]

export default new Router({
  mode: 'history',
  routes,
})