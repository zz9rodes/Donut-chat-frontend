import { createRouter, createWebHistory } from 'vue-router'
// import authentification Router
import Loginpage from './../views/LoginPage.vue'
import RegisterPage from './../views/RegisterPage.vue'
import OtpPage from './../views/OtpPage.vue'

// import admin Router
import adminPage from '../views/admin/index.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/login',
      component: Loginpage
    },
    {
      path: '/login',
      name: 'login',
      component: Loginpage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/otp',
      name: 'otp',
      component: OtpPage
    },
    {
      path:'/admin',
      component:adminPage,
      children:[]
    }
  ]
})

export default router
