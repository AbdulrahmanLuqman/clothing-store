import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'LandingPage',
        component: ()=> import('../components/LandingPage.vue')
    },
    {
        path: '/clothing',
        name: 'Clothing',
        component: ()=> import('../components/Clothing.vue')
    },
    {
        path: '/accessories',
        name: 'Accessories',
        component: ()=> import('../components/Accessories.vue')
    },
    {
        path: '/electronics',
        name: 'Electronics',
        component: ()=> import('../components/Electronics.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        component: ()=> import('../components/Cart.vue')
    },
    {
        path: '/onclick',
        name: 'Cart',
        component: ()=> import('../components/Onclicks.vue')
    }
  ]
})

export default router

