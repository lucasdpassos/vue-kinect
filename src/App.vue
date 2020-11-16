<template>
<v-app id='app1'>
   
    <v-main>
        <Card1 />
        
    </v-main>
    <Footer />
</v-app>
</template>

<script>
import Card1 from './components/Card1'
import Footer from './components/Footer'


export default {
    name: 'App',

    components: {
        Card1,
        Footer
        
    },

    data: () => ({
        //
    }),
};
</script>

<style scoped>
.logo1 {
    max-width: 400px;
}

#app1 {
    background: url('../src/assets/big-city.jpg');
    background-size: 3000px 1000px;
     background-repeat: no-repeat;
}
</style>
