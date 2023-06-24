import { createRouter, createWebHistory } from 'vue-router';
import { getCurrentUser } from 'vuefire';

const routes = [
    {
        name: 'Schedule',
        path: '/schedule',
        component: () => import('@/views/schedule-page.vue')
    },
    {
        name: 'SignUp',
        path: '/sign-up',
        component: () => import('@/views/sign-up-page.vue')
    },
    {
        name: 'SignIn',
        path: '/sign-in',
        component: () => import('@/views/sign-in-page.vue')
    },
    {
        name: 'PrivateOffice',
        path: '/private-office',
        component: () => import('@/views/private-office-page.vue')
    },
    {
        path: "/:pathMath(.*)",
        redirect: '/schedule'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from) => {
    const currentUser = await getCurrentUser();
    if (currentUser) {
        if (to.name === 'SignIn' || to.name === 'SignUp') {
            return { name: 'Schedule' };
        }
    } else {
        if (to.name !== 'SignIn' && to.name !== 'SignUp') {
            return { name: 'SignUp' };
        }
    }
})

export default router;