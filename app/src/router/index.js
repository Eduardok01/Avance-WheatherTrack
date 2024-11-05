import HomePage from '../components/HomePage.vue'
import SignUp from '../components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/LoginPage.vue';
import SemaforoPage from '../components/SemaforoPage.vue';
import AirQualityView from '../views/AirQualityView.vue';
import AirQualityWidget from '../components/data/AirQualityWidget.vue';
import ScrappingView from '@/views/ScrappingView.vue';
import MapboxMap from '@/components/mapbox/MapboxMap.vue';
import CitySearch from '@/views/CitySearch.vue';
import Register from '@/views/Register.vue';

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
    path: '/citysearch',
    name: 'CitySearch',
    component: CitySearch
  },
  {
    path: '/air-quality-widgrt',
    name: 'AirQualityWidget',
    component: AirQualityWidget
  },
  {
    path: '/map',
    name: 'MapboxMap',
    component: MapboxMap
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
];


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router






