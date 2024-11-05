<template>
    <div>
        <h1>Calidad del aire en {{ $route.params.name }}</h1>
        <air-quality-widget :city="$route.params.name" :aqi="airQuality.data.aqi" :updatedAt="updatedAt" />
    </div>
</template>
  
<script>
import { getAirQualityByCity } from '../services/airQualityWAQIService';
import AirQualityWidget from '../components/data/AirQualityWidget.vue';

export default {
    components: {
        AirQualityWidget,
    },
    data() {
        return {
            airQuality: null,
            updatedAt: '',
        };
    },
    async created() {
        const city = this.$route.params.name;
        this.airQuality = await getAirQualityByCity(city);
        this.updatedAt = new Date().toLocaleString();
    },
};
</script>
  