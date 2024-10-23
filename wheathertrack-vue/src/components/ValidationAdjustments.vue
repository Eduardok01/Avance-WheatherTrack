<template>
    <div>
      <h2>Comparación de Datos</h2>
      <ul>
        <li v-for="(record, index) in adjustedData" :key="index">
          Ciudad: {{ record.city }} - Calidad Ajustada: {{ record.adjustedQuality }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ValidationAdjustments',
    data() {
      return {
        adjustedData: []
      };
    },
    async created() {
      try {
        const [airQualityResponse, scrappingResponse] = await Promise.all([
          fetch('/api/air_quality'),
          fetch('/api/scrapping_data')
        ]);
        const airQualityData = await airQualityResponse.json();
        const scrappingData = await scrappingResponse.json();
  
        // Comparar y ajustar datos
        this.adjustedData = airQualityData.map((record) => {
          const scrappingRecord = scrappingData.find((s) => s.city === record.city);
          const adjustedQuality = scrappingRecord
            ? scrappingRecord.quality
            : record.quality;
          return { city: record.city, adjustedQuality };
        });
      } catch (error) {
        console.error('Error comparing data:', error);
      }
    }
  };
  </script>
  