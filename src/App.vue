<template>
<v-app>
    <v-img src="../src/assets/codepacklogo2.png" class="logo1" style="width:50px;height:20px;" />
    <v-main>
        <Card1 />
        <Menu />
    </v-main>
    <Footer />
</v-app>
</template>

<script>
import Card1 from './components/Card1'
import Footer from './components/Footer'
import Menu from './components/Menu'

export default {
    name: 'App',

    components: {
        Card1,
        Footer,
        Menu
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
