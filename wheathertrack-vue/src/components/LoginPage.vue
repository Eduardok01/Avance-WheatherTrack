<template>
    <h1> Login</h1>
    <div class = "login">
        <input type="text" v-model = "email" placeholder="Enter email" />
        <input type="password" v-model="password" placeholder="Enter password" />
        <button v-on:click="login">Login</button>
        <p>
            <router-link to="/sign-up">Sign-up</router-link>
        </p>

    </div>

</template>

<script>
import axios from 'axios'
export default{
    name:'LoginPage',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        async login(){
            let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)

            if(result.status==200 && result.data.length >0 ){
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({name:'Home'})
            }
            console.log(result)
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name:'Home'})
        }
    }
}

</script>