<template>
  <router-view>

  </router-view>
  <nav>
    
  </nav>
  <HomePage msg="Inicio"/>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage
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
.logo{
    width: 100px
}
.register input, .login input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;

}

.register button, .login button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;

}

.semaforo{
  padding: 80px;
  background-color: black;
}

.semaforo .verde{
  width: 40px;
  height: 40px;
  border: 1px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: green;
}

.semaforo .amarillo{
  width: 40px;
  height: 40px;
  border: 1px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: yellow;
}

.semaforo .naranja{
  width: 40px;
  height: 40px;
  border: 1px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: orange;
}

.semaforo .rojo{
  width: 40px;
  height: 40px;
  border: 1px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: red;
}

.semaforo .morado{
  width: 40px;
  height: 40px;
  border: 1px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: magenta;
}

.semaforo .senal{
  width: 40px;
  height: 40px;
  border: 1px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: white;
  
}

</style>
