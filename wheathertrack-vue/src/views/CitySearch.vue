<template>
    <div class="search-container">
      <h2>Buscar Calidad del Aire por Ciudad</h2>
      <div class="search-box">
        <input
          v-model="city"
          type="text"
          placeholder="Ingresa el nombre de la ciudad"
          @keyup.enter="searchAirQuality"
        />
        <button @click="searchAirQuality">Buscar</button>
      </div>
  
      <div v-if="airQualityData" class="result-box">
        <h3>Información de la Calidad del Aire en {{ city }}</h3>
        <ul>
          <li><strong>AQI:</strong> {{ airQualityData.aqi }} ({{ airQualityStatus }})</li>
          <li><strong>Niveles de PM2.5:</strong> {{ airQualityData.pm25 }}</li>
          <li><strong>Niveles de PM10:</strong> {{ airQualityData.pm10 }}</li>
          <li><strong>Última Actualización:</strong> {{ airQualityData.lastUpdate }}</li>
        </ul>
      </div>
    </div>
  </template>
  
<script>
import { getAirQuality } from '../api/waqi/api';
  
export default {
    data() {
        return {
            city: '',
            airQualityData: null,
        };
    },
    computed: {
        airQualityStatus() {
            const aqi = this.airQualityData?.aqi;
            if (aqi <= 50) return 'Bueno';
            if (aqi <= 100) return 'Moderado';
            if (aqi <= 150) return 'Poco saludable para grupos sensibles';
            if (aqi <= 200) return 'Poco saludable';
            if (aqi <= 300) return 'Muy poco saludable';
            return 'Peligroso';
        }
    },
    methods: {
        async searchAirQuality() {
            if (!this.city) {
                alert('Por favor, ingresa una ciudad');
                return;
            }
            try {
                const data = await getAirQuality(this.city);
                if (data.status === 'ok') {
                    this.airQualityData = {
                        aqi: data.data.aqi,
                        pm25: data.data.iaqi.pm25 ? data.data.iaqi.pm25.v : 'No disponible',
                        pm10: data.data.iaqi.pm10 ? data.data.iaqi.pm10.v : 'No disponible',
                        lastUpdate: data.data.time.s
                    };
                } else {
                    alert(`No se encontró información para la ciudad ingresada: ${this.city}.`);
                    this.airQualityData = null;
                }
            } catch (error) {
                console.error('Error al buscar la calidad del aire:', error);
                alert('Ocurrió un error al obtener la información de calidad del aire.');
                this.airQualityData = null;
            }
        }
    }
};
</script>
    <style scoped>
    .search-container {
      text-align: center;
      margin: 20px;
    }

    .search-box {
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
    }

    input {
      padding: 10px;
      font-size: 16px;
      margin-right: 10px;
      width: 300px;
    }

    button {
      padding: 10px;
      font-size: 16px;
      cursor: pointer;
    }

    .result-box {
      border: 1px solid #ccc;
      padding: 15px;
      width: 60%;
      margin: 0 auto;
      text-align: left;
      background-color: #f9f9f9;
    }
</style>
  