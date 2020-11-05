<template>
  <div class="ma-12 pa-12">
    <v-card style="background-color:red;top:7%;left:0.2%;position: absolute;">
      <v-navigation-drawer
        permanent
        expand-on-hover
         src="../assets/menubg.jpg"
      >
        <v-list>
          <v-list-item class="px-1">
            <v-list-item-avatar>
              <v-icon>mdi-facebook</v-icon>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                Entre em contato
              </v-list-item-title>
              
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        
      </v-navigation-drawer>
    </v-card>
    <v-card style="background-color:red;top:21%;left:0.2%;position: absolute;">
      <v-navigation-drawer
        permanent
        expand-on-hover
         src="../assets/menubg.jpg"
      >
        <v-list>
          <v-list-item class="px-1">
            <v-list-item-avatar>
              <v-icon>mdi-google</v-icon>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="title">
                Entre em contato
              </v-list-item-title>
              
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        
      </v-navigation-drawer>
    </v-card>
        
  </div>
</template>

<script>
  export default {
    //
  }
</script>

<style scoped>

.menu1 {
    position: absolute;
    margin-bottom: 50%;
}

</style>