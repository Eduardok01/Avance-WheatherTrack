<template>
    <div>
        <h1>Buscar calidad del aire por ciudad</h1>
        <h3>Estructura: Ciudad, Pais</h3>
        <input v-model="city" placeholder="Ingresa el nombre de la ciudad" />
        <button @click="searchCity">Buscar</button>
        <div v-if="airQuality">
            <h3>Resultados para {{ city }}:</h3>
            <p>AQI: {{ airQuality.data.aqi }}</p>
            <p>Calidad del aire: {{ airQualityImpact }}</p>
        </div>
    </div>
</template>
  
<script>
import { getAirQualityByCity } from '../services/airQualityWAQIService';
import axios from 'axios';
  
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
        async searchCity() {
            if (this.city) {
                this.airQuality = await getAirQualityByCity(this.city);
                // Guarda los datos en tu JSON-Server para simular persistencia
                axios.post('http://localhost:3000/cities', {
                    city: this.city,
                    aqi: this.airQuality.data.aqi,
                });
            }
        },
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
  