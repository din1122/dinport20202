<template>
<Div>
<v-flex text-xs-center>
	<div class="filter d-inline">
        <ul>
         <li  @click.prevent="filteredItems()" >All</li>
        <li @click.prevent="filteredItems()">onecell</li>
        <li @click.prevent="selectedCategory = 'draw'">draw</li>
        <li @click.prevent="selectedCategory = 'logos'">logos</li>
        </ul>
	</div>
</v-flex>

 <masonry
  :cols="{default: 3, 1000: 3, 700: 2, 400: 1}"
  :gutter="{default: '35px', 700: '15px'}"
  >
  <div v-for="(item, index) in filteredItems" :key="index" >
  <img  class="img" v-lazy="require('../assets/' + item.src)" >
  </div>
</masonry>

</Div>
</template>

<script>
export default {
    data(){
        return{
            item:[
                {
                    title:'bla',
                    alt:'bla-t',
                    src:'onecell/1.png', 
                    category:'onecell'              
                },
                {
                    title:'bla',
                    alt:'bla-t',
                    src:"onecell/IG-2.png", 
                    category:'onecell'                 
                },
                {
                    title:'bla',
                    alt:'bla-t',
                    src:"onecell/IG-3.png", 
                    category:'onecell'                 
                },
                {
                    title:'bla',
                    alt:'bla-t',
                    src:"onecell/IG-1.jpg",        
                    category:'onecell'          
                },
                {
                    title:'bla',
                    alt:'bla-t',
                    src:"onecell/IG-4.jpg",         
                    category:'onecell'         
                },
                {
                    title:'bla',
                    alt:'bla-t',
                    src:"onecell/IG-5.jpg",    
                    category:'onecell'              
                },
                {
                    title:'bla',
                    alt:'bla-t',
                    src:"onecell/IG-6.jpg",   
                    category:'onecell'               
                },
                {
                    title:'bla',
                    alt:'bla-t',
                    src:"logos/menup.png",   
                    category:'logos'               
                },
                {
                    title:'bla',
                    alt:'bla-t',
                    src:"logos/ifatflowerroom.png",   
                    category:'logos'               
                },
                {
                    title:'bla',
                    alt:'bla-t',
                    src:"logos/onecelllogo.png",   
                    category:'logos'               
                },
                {
                    title:'bla',
                    alt:'bla-t',
                    src:"logos/cannadis.png",   
                    category:'logos'               
                },
                {
                    title:'bla',
                    alt:'bla-t',
                    src:"draw/blindwoman.png",   
                    category:'draw'               
                },
                {
                    title:'bla',
                    alt:'bla-t',
                    src:"draw/Eye.png",   
                    category:'draw'               
                },
                {
                    title:'bla',
                    alt:'bla-t',
                    src:"draw/elfwomen.png",   
                    category:'draw'               
                },
                {
                    title:'bla',
                    alt:'bla-t',
                    src:"draw/CatZen.png",   
                    category:'draw'               
                },
                {
                    title:'bla',
                    alt:'bla-t',
                    src:"draw/bearddragon.png",   
                    category:'draw'               
                },
                {
                    title:'bla',
                    alt:'bla-t',
                    src:"draw/little-girl-face.png",   
                    category:'draw'               
                },
                {
                    title:'bla',
                    alt:'bla-t',
                    src:"draw/smokinggirl.png",   
                    category:'draw'               
                },
                {
                    title:'bla',
                    alt:'bla-t',
                    src:"draw/Sanke-style.png",   
                    category:'draw'               
                },

            ],
            selectedCategory: "All"
        }
    },
    computed: {
		filteredItems: function() {
			var vm = this;
			var category = vm.selectedCategory;
			
			if(category === "All") {
				return vm.item;
			} else {
				return vm.item.filter(function(item) {
					return item.category === category;
				});
			}
        }
    }
}
</script>

<style scoped>
.img{
    max-width:100%;
    border: solid #282828;
    box-shadow: rgba(10,10,10,0.1) 0px 7px 9px 0px;
    border-radius: 3px;
}

ul{
    list-style: none;
    display: inline-flex;
}
li{
    padding: 20px;
    font-size: 18px;
}
li:hover {
    cursor:pointer;
    color:#e0752b;
    transition: 0.2s
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
    transition: opacity .5s;
}
</style>