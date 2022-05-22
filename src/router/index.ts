import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
        path: '/archive',
        name: 'archive',
        component: () => import('@/views/archive.vue')
    },
    {
        path: '/article',
        name: 'articleDisplay',
        component: () => import('@/views/articleDisplay.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
