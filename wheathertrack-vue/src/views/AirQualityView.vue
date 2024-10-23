<template>
  <div>
    <AirQualityOpenWeather />
    <AirQualityWAQi />
    <CitySearch />
  </div>
</template>
  
<script>
import AirQualityOpenWeather from '../components/data/AirQualityOpenWeather.vue';
import AirQualityWAQi from '../components/data/AirQualityWAQI.vue';
import CitySearch from './CitySearch.vue';
  
export default {
  name: 'AirQualityView',
  components: {
    AirQualityOpenWeather,
    AirQualityWAQi,
    CitySearch
  }
};
</script>
