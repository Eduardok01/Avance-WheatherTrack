<template>
    <div class = "nav">
        <a href ="#">Home</a>
        <a href ="#">semáforo</a>
        <a href ="#">Mapa</a>
        <a href ="#">Registro</a>
        <a v-on:click="logout" href ="#">cerrar sesión</a>
    </div>
    
</template>


<script>
export default{
    name: 'OptionsBar',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'Login'})

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