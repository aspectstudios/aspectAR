<template>
  <!-- <v-layout row wrap align-center justify-center> -->
    <!-- <v-flex xs12> -->
       <a-scene embedded artoolkit="sourceType: webcam;">
        <a-assets>
          <img ref="sky" id="sky" src="skybox_texture.jpg" crossorigin="anonymous">
        </a-assets>
        <!-- <a-assets>
          <a-asset-item id="scene" src="../static/damagedHelmet.gltf"></a-asset-item>
        </a-assets> -->

        <!-- <a-box position='0 0 0.5'></a-box> -->
        
        <a-entity gltf-model="src: url(./static/M17029_DLSPopUp_DD_Landscape_3D_ACTIVE_10.glb);" scale="0.1 0.1 0.1" position='0 0 0' ></a-entity>
        <!-- <a-entity light="type: ambient; color: #CCC"></a-entity> -->
        <!-- <a-sky id="image-360" radius="1000" src="#sky"></a-sky> -->
        <!-- <a-entity light="type: hemisphere; color: #DBDBFA; groundColor: #fff; intensity: 1"></a-entity> -->
        <!-- <a-light type="directional" position="0 0 0" rotation="-90 0 0" target="#helmet"> -->
          <!-- <a-entity id="helmet" gltf-model="src: url(./static/damagedHelmet.gltf);" position='0 0 0.5' rotation='0 0 0'></a-entity> -->
        <!-- </a-light> -->

        
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
  name: 'hello',
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
