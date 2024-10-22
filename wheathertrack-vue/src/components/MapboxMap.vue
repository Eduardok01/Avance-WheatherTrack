<template>
  <div class="map-container">
    <div id="map"></div>
  </div>
</template>
  
<script setup>
  import { onMounted, ref, onBeforeUnmount } from 'vue'
  import mapboxgl from 'mapbox-gl'
  import 'mapbox-gl/dist/mapbox-gl.css'
  
  // Reemplazar 'YOUR_MAPBOX_ACCESS_TOKEN' con el token de acceso de Mapbox.
  mapboxgl.accessToken = 'pk.eyJ1IjoiYWF2ZW5kYW5vMDQiLCJhIjoiY20yYWxxY2JhMGh2NDJzcHltZzh4ZmJnNyJ9.AilIZoUNRF1i5aLnk5zdpg'
  
  const map = ref(null)
  
  onMounted(() => {
    map.value = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11', // Estilo del mapa
      center: [-72.6173, -38.7490], // Ubicación Universidad de La Frontera. Temuco, Chile,
      zoom: 15 // Nivel de zoom inicial del mapa
    })
  
    // Agrega un marcador de ejemplo (Este caso ubicado en la UFRO)
    new mapboxgl.Marker()
      .setLngLat([-72.6173, -38.7490])
      .setPopup(new mapboxgl.Popup().setText('A sample marker.'))
      .addTo(map.value)
  })
  
  onBeforeUnmount(() => {
    // Destruye el mapa para liberar recursos
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