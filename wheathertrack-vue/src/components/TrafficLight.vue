<template>
    <div>
      <div v-for="item in airQualityData" :key="item.id">
        <span :class="getTrafficLightClass(item.qualityIndex)">
          {{ item.location }}: {{ item.qualityIndex }}
        </span>
      </div>
    </div>
  </template>
  
  <script>
  const getTrafficLightClass = (qualityIndex) => {
    if (qualityIndex <= 50) return 'green';
    if (qualityIndex <= 100) return 'yellow';
    return 'red';
  };
  
  export default {
    // ...
  };
  </script>
  
  <style>
  .green {
    color: green;
  }
  .yellow {
    color: yellow;
  }
  .red {
    color: red;
  }
  </style>