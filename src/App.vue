<template>
  <!-- <v-app id="app">   -->
  <!-- <v-content style="background-color: red;"> -->
    <!-- <v-container fill-height> -->
      <router-view></router-view>
    <!-- </v-container> -->
  <!-- </v-content> -->
  <!-- </v-app> -->
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
@import './stylus/main'


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0; 
  padding: 0;
}

html, body{
  overflow: hidden;
  margin: 0px; 
  padding: 0px;
}

</style>
