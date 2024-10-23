import HomePage from '../components/HomePage.vue'
import SignUp from '../components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue';
import SemaforoPage from '../components/SemaforoPage.vue';

const routes = [
    {
        name: 'Home',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name:'Login',
        component: LoginPage,
        path: '/login'
    },
    {
        name:'traficLight',
        component: SemaforoPage,
        path: '/semaforo'
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router