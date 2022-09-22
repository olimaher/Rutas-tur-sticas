import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/destination/:id/:slug', name:'destination.show', component: () => import('@/views/DestinationShow.vue')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


//linkActiveClass : Sirve para crear efectos de acciones cuando este activa esa opcion.

// linkActiveClass: 'Nombre de la active class'