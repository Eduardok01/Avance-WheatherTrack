<template>
    <div class = "nav">
        <a v-on:click="inicio" href ="/">Home</a>
        <a v-on:click="semaforo" href ="/semaforo">Semáforo</a>
        <a v-on:click="mapa" href ="/map">Mapa</a>
        <a v-on:click="data" href ="/citysearch">Data</a>
        <a v-on:click="register" href ="/register">Registro</a>
        <a v-on:click="logout" href ="/">Cerrar sesión</a>
    </div>
    
</template>


<script>
export default{
    name: 'OptionsBar',
    methods:{
        login(){
            localStorage.clear();
            this.$router.push({name:'Login'})
        },
        inicio(){
            this.$router.push({name:'Home'})
        },
        semaforo(){
            this.$router.push({name:'TraficLight'})
        },
        mapa(){
            this.$router.push({name:'Map'})
        },
        data(){
            this.$router.push({name:'Data'})
        },
        register(){
            this.$router.push({name:'Register'})
        },
        logout(){
            this.$router.push({name:'Logout'})
        }
    }
}

</script>

<style>
.nav{
    background-color: #333;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    width: 100%;
}

.nav a{
    float: left;
    color: #f2f2f2f2;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;

}

.nav a:hover{
    background: #ddd;
    color: #333;
}
</style>