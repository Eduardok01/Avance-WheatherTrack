<template>
    <div>
      <h2>Datos Obtenidos:</h2>
      <ul>
        <li v-for="record in scrappingData" :key="record.id">
          Ciudad: {{ record.city }} - Calidad: {{ record.quality }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ScrappingData',
    data() {
      return {
        scrappingData: []
      };
    },
    async created() {
      try {
        const response = await fetch('/api/scrapping_data');
        this.scrappingData = await response.json();
      } catch (error) {
        console.error('Error fetching scrapping data:', error);
      }
    }
  };
  </script>
  