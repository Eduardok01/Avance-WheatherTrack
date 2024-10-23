<template>
    <h1>hello user</h1>
    <OptionsBar />
</template>

<script>
import OptionsBar from './OptionsBar.vue';
export default{
    name:'HomePage',
    components:{
        OptionsBar
    },
    mounted(){
        let user = localStorage.getItem('user-info');
        if(!user){
            this.$router.push({name:'SignUp'})
        }
    }
}

</script>