<template>
<v-container fluid grid-list-xs>
 <Scrollama @step-enter="stepEnterHandler" :offset="0.5">
<v-layout row wrap>
<v-flex data-step="1">
<div class="img-box" >
  <img class="logo-img" v-lazy="require('../assets/UIUX/Coinsfactor-UX1.png')" ref="img1">
</div>
</v-flex>

</v-layout>
</Scrollama>
</v-container>
</template>
<style>
.img-box{
 padding: 70px;
    overflow:hidden;
  
}
.logo-img{
    height:100%;
    width:100%;
     object-fit:cover;
}
</style>

<script>
import 'intersection-observer'
import Scrollama from 'vue-scrollama'
import { TimelineLite } from 'gsap'
export default {
    data(){
        return {

        }
    },
    components:{
        Scrollama
    },
    mounted(){
          const { img1 } = this.$refs;

            
        	document.body.addEventListener('mousemove', cursorPositionHandler);
			function cursorPositionHandler(e) {
				var decimalX = e.clientX / window.innerWidth - 0.5;
				var decimalY = e.clientY / window.innerHeight - 0.5;
             TweenMax.to(img1, 0.5, { rotationY: 10 * decimalX, rotationX: 10 * decimalY, ease: Quad.easeOut, transformPerspective: 400, transformOrigin: "center" });
             
			}
    },
    methods: {
         stepEnterHandler ({element, index, direction}) {
     
    }
    
      } 
   
    }
</script>