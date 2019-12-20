<template>
    <vue-displacement-slideshow 
            :images="images"
            displacement="/img/water.fc6c214d.jpg"
            :intensity.number="0.2"
            :speedIn.number="1.4"
            :speedOut.number="1.4"
            ease="Expo.easeInOut"
            ref="slideshow"></vue-displacement-slideshow>

</template>

<script>
import VueDisplacementSlideshow from "vue-displacement-slideshow";

    export default {  
        components: {
            VueDisplacementSlideshow,
        },
        computed: {
            images() {
                return [
                    require('../assets/UIUX/Cannadis-UX1.png'),
                    require('../assets/UIUX/Cannadis-UX2.png'),
                    require('../assets/UIUX/Market1.png'),
                ];
            }
        },
        methods: {
               
            init() {
                 const { slideshow } = this.$refs;
                //We loop through all our images by calling the 'next' method of our component every 2 seconds
                setInterval(() => {
                    slideshow.next();
                }, 2000);
            }
        },
        mounted() {
            this.init();
        }
    };
</script>
<style>

</style>