import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
 {
    path:'/',
    name:'Login',
    components:() => import('../views/Login.vue')

 },
 {
  path:'/home',
  name:'Home',
  components:() => import ('../views/Main.vue')

 }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
