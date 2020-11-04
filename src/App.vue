<template>
  <v-app>  
    <v-img src="../src/assets/codepacklogo.png" class="logo1" style="max-width:50px;" />
    <v-main>
      <Card1 />
    </v-main>
  </v-app>
</template>

<script>
import Card1 from './components/Card1'



export default {
  name: 'App',

  components: {
    Card1,
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