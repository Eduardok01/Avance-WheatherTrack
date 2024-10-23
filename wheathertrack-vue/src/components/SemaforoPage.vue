<template>
    <div class="traffic-light-container">
      <h2>Semáforo</h2>
      <div :style="{ backgroundColor: currentColor }" class="traffic-light"></div>
      <div class="button-panel-container">
        <div class="button-panel">
          <button @click="changeColor('green')" style="background-color: green;">Verde</button>
          <button @click="changeColor('yellow')" style="background-color: yellow; color: black;">Amarillo</button>
          <button @click="changeColor('orange')" style="background-color: orange;">Naranja</button>
          <button @click="changeColor('red')" style="background-color: red;">Rojo</button>
          <button @click="changeColor('purple')" style="background-color: purple;">Púrpura</button>
        </div>
      </div>
    </div>
    <OptionsBar/>
  </template>
  
  <script>
  import axios from 'axios';
  import OptionsBar from './OptionsBar.vue';
  export default {
    name: 'TrafficLight',
    components:{
      OptionsBar,
  
    },
    data() {
      return {
        currentColor: 'red', // Color inicial para prueba, posteriormente sera guardado
      };
    },
    methods: {
      async changeColor(color) {
        if (confirm(`¿Quieres cambiar el color a ${color}?`)) {
          this.currentColor = color;
          try {
            await axios.put('http://localhost:3000/color/1', { color: this.currentColor });
          } catch (error) {
            console.error('Error al guardar el color:', error);
          }
        }
      },
    },
    async mounted() {
      try {
        const response = await axios.get('http://localhost:3000/color/1');
        if (response.data && response.data.color) {
          this.currentColor = response.data.color;
        }
      } catch (error) {
        console.error('Error al obtener el color:', error);
      }
    },
  };
  </script>
  
  <style scoped>
  .traffic-light-container {
    text-align: center;
    margin-top: 50px;
  }
  
  .traffic-light {
    width: 100px;
    height: 100px;
    margin: 20px auto;
    border: 2px solid #333;
    border-radius: 10px;
  }
  
  .button-panel-container {
    background-color: black;
    padding: 10px;
    display: inline-block;
    border-radius: 10px;
    margin-top: 20px;
  }
  
  .button-panel {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  button {
    width: 100px;
    height: 50px;
    border: none;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
  }
  
  button:hover {
    opacity: 0.8;
  }
  </style>
  