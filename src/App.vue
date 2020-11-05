<template>
<v-app>
    <v-img src="../src/assets/codepacklogo2.png" class="logo1" style="width:50px;height:20px;" />
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
</style>
