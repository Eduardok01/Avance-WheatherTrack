<template>
  <div class="map-container">
    <div id="map"></div>
  </div>
</template>
  
<script setup>
  import { onMounted, ref, onBeforeUnmount } from 'vue'
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  
  // Reemplazar 'YOUR_MAPBOX_ACCESS_TOKEN' con el token de acceso de Mapbox.
  // mapboxgl.accessToken = 'pk.eyJ1IjoiYWF2ZW5kYW5vMDQiLCJhIjoiY20yYWxxY2JhMGh2NDJzcHltZzh4ZmJnNyJ9.AilIZoUNRF1i5aLnk5zdpg'
  
  const map = ref(null)
  
  onMounted(() => {
  // Inicializa el mapa de Leaflet
  map.value = L.map('map').setView([-38.7490,-72.6173], 15)

  // Capa base de OpenStreetMap
  const OSM_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  const OSM_ATTRIB = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  const osmLayer = L.tileLayer(OSM_URL, { attribution: OSM_ATTRIB })

  // Capa de calidad del aire de WAQI
  const WAQI_URL = 'https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=d88ef262773794780e8511cf8bbcdc2347707e30'
  const WAQI_ATTR = 'Air Quality Tiles &copy; <a href="http://waqi.info">waqi.info</a>'
  const waqiLayer = L.tileLayer(WAQI_URL, { attribution: WAQI_ATTR })

  // Agregar las capas al mapa
  map.value.addLayer(osmLayer).addLayer(waqiLayer)
})

onBeforeUnmount(() => {
  // Destruye el mapa cuando el componente se desmonta
  if (map.value) {
    map.value.remove()
  }
})
</script>
<style scoped>
  .map-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
  }
  #map {
    height: 450px;
    width: 90%;
    max-width: 1000px;
  }
</style>