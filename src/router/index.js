import { createWebHistory, createRouter } from "vue-router";
import MainComponent from '@/components/MainComponent.vue';
import FaqComponent from '@/components/FaqComponent.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            body: MainComponent
        }
    },
    {
        path: '/faq',
        name: 'faq',
        components: {
            body: FaqComponent
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
