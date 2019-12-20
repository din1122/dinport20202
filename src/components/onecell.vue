<template>
<v-flex class="left-container">
<!--
<div v-for="item in items">
    <v-flex xs8 ma-auto class="sticky-div">
    <img :src="item.src" class="img" data-step="item.step">
    </v-flex>
</div>
-->
 <Scrollama @step-enter="stepEnterHandler" :offset="0.5">

<div>
    <v-flex xs8 ma-auto data-step="1">
    <img v-lazy="require('../assets/draw/bearddragon.png')"  class="img" >
    <img v-lazy="require('../assets/draw/little-girl-face.png')"  class="img" >
    </v-flex>
</div>
<div>
    <v-flex xs12 ma-auto data-step="2">
    <img v-lazy="require('../assets/UIUX/Coinsfactor-UX1.png')" class="img">

    </v-flex>
</div>
<div>
    <v-flex xs10 ma-auto data-step="3">
    <img v-lazy="require('../assets/onecell/IG-4.jpg')"  class="img" >
    <img v-lazy="require('../assets/onecell/IG-6.jpg')"  class="img" >
    <img v-lazy="require('../assets/water.jpg')"  class="img" v-show="false" >
    </v-flex>
</div>
</Scrollama>
  
</v-flex>
</template>

<script>
import 'intersection-observer'
import Scrollama from 'vue-scrollama'
export default {
      methods: {
        stepEnterHandler ({element, index, direction}) {
  
        switch(index){
            case 0:
            
            this.$emit('Switched', index)
            break;
            case 1:
            this.$emit('Switched', index)
            break;
            case 2:
            this.$emit('Switched', index)
            break;
        }
        }   
        },
        components:{
               Scrollama
        },

}
</script>
<style scoped>
.img{
    width:100%;
    
}
.sticky-div{

}
.left-container{

}

div::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
}

div::-webkit-scrollbar
{
	width: 6px;
	background-color: #F5F5F5;
}

div::-webkit-scrollbar-thumb
{
	background-color: #000000;
}

</style>