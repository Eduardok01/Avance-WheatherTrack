<template>
    <div>
        <h2>Calidad del Aire (WAQI)</h2>
        <ul v-if="airQualityData">
            <li>AQI: {{ airQualityData.data.aqi }} ({{ airQualityStatus }})</li>
            <li>Niveles de PM2.5: {{ airQualityData.data.iaqi.pm25.v }}</li>
            <li>Niveles de PM10: {{ airQualityData.data.iaqi.pm10.v }}</li>
            <li>Última Actualización: {{ lastUpdate }}</li>
        </ul>
    </div>
</template>
  
<script>
import { getAirQuality } from '../../api/waqi/api';

export default {
    data() {
        return {
            city: 'Santiago',
            airQualityData: null,
            lastUpdate: '',
        };
    },
    computed: {
        airQualityStatus() {
            const aqi = this.airQualityData?.data.aqi;
            if (aqi <= 50) return 'Bueno';
            if (aqi <= 100) return 'Regular';
            if (aqi <= 150) return 'Alerta';
            if (aqi <= 200) return 'Preemergencia';
            return 'Emergencia';
        }
    },
    async created() {
        try {
            const data = await getAirQuality(this.city);
            this.airQualityData = data;
            this.lastUpdate = data.data.time.s;
        } catch (error) {
            console.error('Error loading air quality data');
        }
    }
};
</script>
  