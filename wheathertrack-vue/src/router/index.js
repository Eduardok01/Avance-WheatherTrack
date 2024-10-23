import { createRouter, createWebHistory } from 'vue-router';
import AirQualityView from '../views/AirQualityView.vue';
import AirQualityOpenWeather from '../views/AirQualityOpenWeather.vue';
import AirQualityWAQI from '../views/AirQualityWAQI.vue';
import ScrappingView from '@/views/ScrappingView.vue';
import ValidationView from '@/views/ValidationView.vue';

const routes = [
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
});

export default router;