import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Mainpage.vue'
import LoginView from '../components/LoginForm.vue'
import SignupView from '../components/SignupForm.vue'
import VideoDetail from '../views/VideoDetail.vue'
const router = createRouter({ 
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: VideoDetail
    },
    // {
    //   path: '/detail/:id/:uid',
    //   name: 'detail',
    //   component: VideoDetail
    // }
  ]
})

export default router
