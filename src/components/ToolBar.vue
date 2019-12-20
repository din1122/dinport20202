<template>
<div>
  <v-toolbar fixed>
  
 <v-toolbar-side-icon  @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
  <img class="logo" :src="require('@/assets/logo.png')">
    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-md-and-down" >
    
      <v-btn flat v-scroll-to="{
        el:'#one',
      }
      "
      >Home</v-btn>
      <v-btn flat v-scroll-to="{
        el:'#Two',
        offset: -100,
      }
      "
      >Articles</v-btn>
      <v-btn flat v-scroll-to="{
        el:'#Three',
        offset: -100,
      }
      ">Video</v-btn>
      <v-btn flat v-scroll-to="{
        el:'#Four',
        offset: -100,
      }
      ">About</v-btn>
      <v-btn flat v-scroll-to="{
        el:'#Five',
        offset: -100,
      }
      ">Products</v-btn> 
      <v-btn flat v-scroll-to="{
        el:'#Six',
        offset: -100,
      }
      ">Contact</v-btn> 
    </v-toolbar-items>
    
  </v-toolbar>
    <v-navigation-drawer

    class="light-green darken-3"
    dark
     v-model="drawer"
      absolute
      temporary
  >
    <v-list>
      <v-list-tile @click.prevent="drawer = !drawer" v-scroll-to="{
        el:'#One',
         
      }
      ">
        <v-list-tile-content>
          <v-list-tile-title>
          Home
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click.prevent="drawer = !drawer" v-scroll-to="{
        el:'#Two',
        offset: -100,
      }
      ">
        <v-list-tile-content>
          <v-list-tile-title>
          Articles
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click.prevent="drawer = !drawer" v-scroll-to="{
        el:'#Three',
        offset: -100,
      }
      ">
        <v-list-tile-content>
          <v-list-tile-title>
          Video
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click.prevent="drawer = !drawer" v-scroll-to="{
        el:'#Four',
        offset: -100,
      }
      ">
        <v-list-tile-content>
          <v-list-tile-title>
          About
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click.prevent="drawer = !drawer" v-scroll-to="{
        el:'#Five',
        offset: -100,
      }
      ">
        <v-list-tile-content>
          <v-list-tile-title>
          Products
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile @click.prevent="drawer = !drawer" v-scroll-to="{
        el:'#Six',
        offset: -100,
      }
      ">
        <v-list-tile-content>
          <v-list-tile-title>
          Contact
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data(){
    return{
        drawer: null,
    }
  }
}
</script>
<style scoped>
.v-toolbar{
        border-bottom: 4px solid #78B821;
}
.logo{
    height: 140px;
    margin-top: 10px;
}


</style>