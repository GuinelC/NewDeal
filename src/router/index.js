import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  // HOME PAGE
  { path: '/',
    name: 'home',
    component: HomeView
  },

  // POSTS PAGE
  {
    path: '/posts',
    name: 'posts',
    component: () => import(/* webpackChunkName: "postsView" */ '../views/postsView.vue') 
  },

  // SINGLE POST
  {
    path: '/post/:id',
    component: () => import(/* webpackChunkName: "postOnly" */ '../views/postOnly.vue') 
  },


  // USERS PAGE
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "usersView" */ '../views/usersView.vue') 
  },

   // SINGLE USER
   {
    path: '/users/:id',
    component: () => import(/* webpackChunkName: "userData" */ '../views/userData.vue') 
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router