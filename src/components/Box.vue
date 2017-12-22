<template>
  <!-- <v-layout row wrap align-center justify-center> -->
    <!-- <v-flex xs12> -->
       <a-scene embedded artoolkit="sourceType: webcam;">
        
        <a-anchor>
    	    <!-- define the content to be displayed on top of the marker -->
	        <a-box color="#2EAFAC"></a-box>
        </a-anchor>

        <!-- <a-box position='0 0 0.5'></a-box> -->
        
        <!-- <a-entity gltf-model="src: url(./static/M17029_DLSPopUp_DD_Landscape_3D_ACTIVE_08.glb);" scale="0.1 0.1 0.1" position='0 0 0' ></a-entity> -->
        <a-marker-camera preset='hiro'></a-marker-camera>
      </a-scene>
    <!-- </v-flex> -->
<!-- </v-layout> -->
</template>

<script>
// require('aframe-extras')
// var AFRAME = require('aframe')
// var ar = require('ar.js')

export default {
  name: 'Box',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
// @import '../stylus/main'

  
</style>
