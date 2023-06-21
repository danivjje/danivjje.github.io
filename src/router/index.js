import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/schedule',
        component: () => import('@/views/schedule-page.vue')
    },
    {
        path: '/sign-up',
        component: () => import('@/views/sign-up-page.vue')
    },
    {
        path: '/sign-in',
        component: () => import('@/views/sign-in-page.vue')
    },
    {
        path: '/private-office',
        component: () => import('@/views/private-office-page.vue')
    },
    {
        path: "/:pathMath(.*)",
        redirect: '/schedule'
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
})