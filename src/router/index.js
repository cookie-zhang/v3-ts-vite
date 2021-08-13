import { createRouter, createWebHistory } from 'vue-router';
const routerHistory = createWebHistory();
const router = createRouter({
    history: routerHistory,  // history
    routes:[
        {
            path:'/',
            component: ()=> import('../pages/home/index.vue')
        },
        {
            path:'/detail',
            component: ()=> import('../pages/detail/index.vue')
        },
        {
            path:'/list',
            component: ()=> import('../pages/list/index.vue')
        }
    ]
});

export default router;
