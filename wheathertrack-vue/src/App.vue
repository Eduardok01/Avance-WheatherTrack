<template>
  <MapboxMap msg="Mapa"/>
</template>

<script>
import MapboxMap from './components/mapbox/MapboxMap.vue';

export default {
  name: 'App',
  components: {
    MapboxMap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
