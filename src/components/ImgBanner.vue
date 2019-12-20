<template>
<v-flex xl12 xs12 class="banner">
   <v-layout row wrap fill-height align-center justify-space-around>
   <v-flex text-xs-center xs2>  
   <span class="display-1 number">150+</span><br>
    <span class="body-2">Customers</span>
   </v-flex>
   <v-flex text-xs-center xs2>  
   <span class="display-1 number">256+</span><br>
    <span class="body-2">Projects</span>
   </v-flex>
   <v-flex text-xs-center xs2>  
   <span class="display-1 number">25</span><br>
    <span class="body-2">Awards</span>
   </v-flex>
   </v-layout>
</v-flex>
</template>
<style scoped>
.banner{
    height:150px;
    background-image:url('../assets/BannerFull.png');
    background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
	background-attachment: fixed;
    overflow:hidden;
    color:white;
}
.number{
    color:#e0752b ;
}

</style>