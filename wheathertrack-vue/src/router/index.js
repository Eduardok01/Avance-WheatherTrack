import HomePage from '../components/HomePage.vue'
import SignUp from '../components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue';
import SemaforoPage from '../components/SemaforoPage.vue';


import AirQualityView from '../views/AirQualityView.vue';
import AirQualityOpenWeather from '../views/AirQualityOpenWeather.vue';
import AirQualityWAQI from '../views/AirQualityWAQI.vue';
import ScrappingView from '@/views/ScrappingView.vue';
import ValidationView from '@/views/ValidationView.vue';

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
    },
    {
    path: '/air-quality',
    name: 'AirQuality',
    component: AirQualityView
  },
  {
    path: '/scrapping',
    name: 'Scrapping',
    component: ScrappingView
  },
  {
    path: '/validation',
    name: 'Validation',
    component: ValidationView
  },
  {
    path: '/air-quality-openweathermap',
    name: 'AirQualityOpenWeather',
    component: AirQualityOpenWeather
  },
  {
    path: '/air-quality-waqi',
    name: 'AirQualityWAQI',
    component: AirQualityWAQI
  }
];


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router






