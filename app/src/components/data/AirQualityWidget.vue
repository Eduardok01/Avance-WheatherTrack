<template>
    <div class="air-quality-widget">
        <h2>{{ city }}</h2>
        <div :class="aqiClass">
            <h1>{{ aqi }}</h1>
            <p>{{ impact }}</p>
        </div>
        <small>Última actualización: {{ updatedAt }}</small>
    </div>
</template>
  
<script>
export default {
  props: {
    city: String,
    aqi: Number,
    updatedAt: String,
  },
  computed: {
    impact() {
      if (this.aqi < 50) return 'Buena';
      if (this.aqi < 100) return 'Moderada';
      if (this.aqi < 150) return 'Insalubre para grupos sensibles';
      if (this.aqi < 200) return 'Insalubre';
      return 'Muy insalubre';
    },
    aqiClass() {
      if (this.aqi < 50) return 'good';
      if (this.aqi < 100) return 'moderate';
      if (this.aqi < 150) return 'unhealthy-sensitive';
      return 'unhealthy';
    },
  },
};
</script>
  
<style>
.good {
  background-color: green;
}
.moderate {
  background-color: yellow;
}
.unhealthy-sensitive {
  background-color: orange;
}
.unhealthy {
  background-color: red;
}
.air-quality-widget {
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
  