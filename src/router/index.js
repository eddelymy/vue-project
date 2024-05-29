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
        },
        {
          path: 'Menu1',
          children:[
            {
              path: 'SubMenu1',
              name:'SubMenu1',
              component: () => import('../views/SubMenu1.vue'),
              meta: {
                title: 'E-Azura',
                auth: true,
                showBars: true
              }
            },
            {
              path: 'SubMenu2',
              name:'SubMenu2',
              component: () => import('../views/HomeView.vue'),
              meta: {
                title: 'E-Azura',
                auth: true,
                showBars: true
              }
            },{
              path: 'SubMenu3',
              name:'SubMenu3',
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
    }
    

    
  ]
})

export default router
