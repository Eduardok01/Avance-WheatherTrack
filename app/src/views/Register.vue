<template>
    <div>
        <button @click="getData">Obtener datos de calidad del aire</button>
        <div v-if="airQuality.length">
          <p v-for="(data, index) in airQuality" :key="index">{{ data }}</p>
        </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  export default {
    name: 'registerList',
    data() {
        return {
            airQuality: []
        };
    },
    methods: {
        async getData() {
            try {
                const response = await axios.get('http://localhost:3000/scrape-waqi');
                this.airQuality = response.data.airQuality;
            } catch (error) {
                console.error('Error al obtener los datos', error);
            }
        }
    }
};
  </script>
  
  