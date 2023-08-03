import Vue from 'vue'
import Router from "vue-router";
import List from './components/List.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'
import Comment from './components/Comment'

Vue.use(Router) 

const routes = [
  {
    path: '/list',
    component: List,
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/detail/:id(\\d+)',
    component: Detail,
    children: [
      {
        path: "comment",
        component: Comment
      }
  ]
  }
]

export default new Router({
  mode: 'history',
  routes,
})