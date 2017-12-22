<template>
  <!-- <v-layout row wrap align-center justify-center> -->
    <!-- <v-flex xs12> -->
       <a-scene embedded>        
        <a-entity gltf-model="src: url(./static/M17029_DLSPopUp_DD_Landscape_3D_ACTIVE_08.glb);" scale="0.1 0.1 0.1" position='0 0 0' ></a-entity>
        <!-- <a-entity gltf-model="src: url(./static/damagedHelmet.gltf);" position='0 0 0.5' ></a-entity> -->
        
      </a-scene>
    <!-- </v-flex> -->
<!-- </v-layout> -->
</template>

<script>
// require('aframe-extras')
// var AFRAME = require('aframe')
// var ar = require('ar.js')

export default {
  name: 'Test',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import '../stylus/main'
a-scene{
    display: block;
    position: absolute;
    left: 0;
    top: 0;

    /*width: 100%;
    height: 100%;*/
    /*border: 1px solid blue;*/
    /*height: 50vh;*/
    /*top: 0px;*/
  }
  
  
</style>
