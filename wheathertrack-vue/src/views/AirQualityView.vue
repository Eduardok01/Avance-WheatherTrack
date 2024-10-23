<template>
  <div>
    <AirQualityWidget />
    <CityAirQuality />
    <CitySearch />
  </div>
</template>
  
<script>
import AirQualityWidget from '../components/data/AirQualityWidget.vue';
import CityAirQuality from './CityAirQuality.vue';
import CitySearch from './CitySearch.vue';
  
export default {
  name: 'AirQualityView',
  components: {
    AirQualityWidget,
    CityAirQuality,
    CitySearch,
  }
};
</script>
