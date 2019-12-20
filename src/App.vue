
<template>
<div>
<div class="xs12 d-flex ma-auto justify-center fill-height">
<div class="loader spinner" v-if="loading">
 <atom-spinner class=" ma-auto"
          :animation-duration="1000"
          :size="60"
          :color="'#ff1d5e'"
     />
</div>
</div>
     <v-content v-if="show" class="v-fade" >
      <v-container pa-0 fluid>
  
          <router-view> </router-view>

      </v-container>
    </v-content>
</div>
</template>

<script>
 import 'epic-spinners/dist/lib/epic-spinners.min.css'
import {AtomSpinner} from 'epic-spinners/dist/lib/epic-spinners.min.js'
import 'intersection-observer'
import Scrollama from 'vue-scrollama'
import { TimelineLite } from 'gsap'
export default {
  name: 'App',
  components: {
    AtomSpinner, Scrollama
  },
 data(){
        return{
            loading:true,
            show:false
        }
    },
    mounted(){
        const isLoading = this.loading;
         setTimeout(this.loadingis, 1000);
    },
    methods:{
      loadingis(){
        this.loading = false;
        this.show = true;
      }
    }
}
</script>

<style scoped>
.spinner{
  display:flex !important;
}
#__layout {
  display: inherit !important; /* override v-show display: none */
  transition: opacity 1s;
}
#__layout[style*="display: none;"] {
  opacity: 0;
  pointer-events: none; /* disable user interaction */
  user-select: none; /* disable user selection */
}
html{
    font-family: 'Montserrat',
        sans-serif !important;
}
.loader{
  height:100vh;
  background: #0d0f14;
}
</style>