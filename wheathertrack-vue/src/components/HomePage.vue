<template>
    <div>
      <h1>Hello User</h1>
      <div :style="{ backgroundColor: currentColor }" class="current-color-circle"></div>
      <OptionsBar />
    </div>
  </template>
  
  <script>
  import OptionsBar from './OptionsBar.vue';
  
  export default {
    name: 'HomePage',
    components: {
      OptionsBar,
    },
    data() {
      return {
        currentColor: 'red',
      };
    },
    mounted() {
      this.fetchColor();
    },
    methods: {
      async fetchColor() {
        try {
          const response = await fetch('http://localhost:3000/color/1');
          const data = await response.json();
          if (data && data.color) {
            this.currentColor = data.color;
          }
        } catch (error) {
          console.error('Error al obtener el color:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .current-color-circle {
    width: 50px;
    height: 50px;
    margin: 20px auto;
    border-radius: 50%;
    border: 2px solid #333;
  }
  </style>
  