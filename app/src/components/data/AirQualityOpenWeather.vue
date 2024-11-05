<template>
    <div>
        <h2>Calidad del Aire (OpenWeatherMap)</h2>
        <ul v-if="airQualityData">
            <li>AQI: {{ airQualityData.list[0].main.aqi }} ({{ airQualityStatus }})</li>
            <li>Niveles de PM2.5: {{ airQualityData.list[0].components.pm2_5 }}</li>
            <li>Niveles de PM10: {{ airQualityData.list[0].components.pm10 }}</li>
            <li>Última Actualización: {{ lastUpdate }}</li>
        </ul>
    </div>
</template>
  
<script>
import { getAirQuality } from '../../api/openweathermap/api';
  
export default {
    data() {
        return {
            airQualityData: null,
            lastUpdate: '',
        };
    },
    computed: {
        airQualityStatus() {
            const aqi = this.airQualityData?.list[0].main.aqi;
            if (aqi <= 50) return 'Bueno';
            if (aqi <= 100) return 'Regular';
            if (aqi <= 150) return 'Alerta';
            if (aqi <= 200) return 'Preemergencia';
            return 'Emergencia';
        }
    },
    async created() {
        const lat = 51.51; // Ejemplo de latitud
        const lon = -0.13; // Ejemplo de longitud
        try {
            const data = await getAirQuality(lat, lon);
            this.airQualityData = data;
            this.lastUpdate = new Date(data.list[0].dt * 1000).toLocaleString();
        } catch (error) {
            console.error('Error loading air quality data');
        }
    }
};
</script>
  