import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        title: 'Se connecter | E-Azura',
        auth: false,
        showBars: false
      }
    },
    {
      path: '/',
      // name:'globalComponent',
      // component: () => import('../components/GlobalComponent.vue'),
      // meta: {
      //   title: 'E-Azura',
      //   auth: true,
      //   showBars: true
      // },
      children: [
        {
          path: 'home',
          name:'home',
          component: () => import('../views/HomeView.vue'),
          meta: {
            title: 'E-Azura',
            auth: true,
            showBars: true
          }
        }
      ]
    }
    

    
  ]
})

export default router
