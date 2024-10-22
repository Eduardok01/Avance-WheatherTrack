<template>
    <div>
      <h1>Calidad del Aire - Datos Ajustados</h1>
      <ul>
        <li v-for="item in adjustedData" :key="item.id">
          {{ item.location }}: {{ item.qualityIndex }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { fetchAirQualityData } from '@/services/dataservice';
  import { scrapeAirQualityData } from '@/services/scrappingService';
  
  export default {
    name: 'AirQualityComponent',
    setup() {
      const webData = ref([]);
      const scrapedData = ref([]);
      const adjustedData = ref([]);
  
      // Función para comparar y ajustar los datos
      const compareAndAdjustData = (webData, scrapedData) => {
        return scrapedData.map(scraped => {
          const webItem = webData.find(web => web.location === scraped.location);
          if (webItem && webItem.qualityIndex !== scraped.qualityIndex) {
            // Ajustar el índice de calidad si es diferente
            return { ...scraped, qualityIndex: webItem.qualityIndex };
          }
          return scraped;
        });
      };
  
      // Función para cargar y procesar los datos
      const loadData = async () => {
        try {
          // Obtener datos del JSON-Server
          webData.value = await fetchAirQualityData();
          
          // Simular la obtención de datos por scraping
          scrapedData.value = await scrapeAirQualityData();
  
          // Comparar y ajustar los datos
          adjustedData.value = compareAndAdjustData(webData.value, scrapedData.value);
        } catch (error) {
          console.error('Error al cargar los datos:', error);
        }
      };
  
      onMounted(loadData);
  
      return {
        adjustedData,
      };
    },
  };
  </script>