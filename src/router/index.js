import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Mainpage.vue'

import LoginView from '../components/user/LoginForm.vue'
import SignupView from '../components/user/SignupForm.vue'
import VideoDetail from '../views/VideoDetail.vue'
import ReviewDetal from '../components/reviews/ReviewDetail.vue'
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
      component: VideoDetail,
      children: [
        {
          path: ':uid',
          name: 'reviewdetail',
          component: ReviewDetal
        },

      ]
    },
    
  ]
})

export default router
