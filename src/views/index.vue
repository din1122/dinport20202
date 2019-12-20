<template>
<div>
<Scrollama @step-enter="stepEnterHandler" :offset="0.5">
<div data-step="a" >
<section id="one" >
<v-layout>
<v-flex xs12 xl6 lg6 class="welcome-box-left"  >
<div ref="title" class="title-box">
<span class="caption-title">Hey, it's</span>
<h1 class="welcome-title">Din Ashkenazi</h1>
<h2 class="ui-text" ref="uiText">UI-UX Designer</h2>
</div>
</v-flex>
<v-flex xs6 class="welcome-box-right">

<div ref="rightBox" class="me">
    <v-layout row wrap>
    <v-flex xs10 offset-xl10 offset-xs3 xl2>
     <span class="mark" ref="mark">~</span>
    </v-flex>
    <v-flex xs2 xl2 offset-xl10>
    <v-flex class="nav-container" ref="nav">
        <menuApp />
    </v-flex>
    </v-flex>
    </v-layout>
</div>

</v-flex>
</v-layout>
 </section>
 </div>

<div data-step="b">
 <section id="two" class="main" >
 <v-layout >
  <v-flex class="section2">
    <span class="white--text section2-text ma-auto">Design is all about style</span>
  </v-flex> 
 </v-layout>
 </section>
 </div>
 <div data-step="c">
  <section id="three" class="main section3">
 <v-layout row wrap fill-height>
  <v-flex xs6 class="s3-left-box fill-height pa-5" ref="leftbox">
  
    <v-flex xs6 offset-xs3 mt-5 class="left-s3-text" id="s3-text0" v-show="s3text0" ref="text0">
     <div class="left-title">
        <h2 d-flex class="display-3">Illustrate</h2>
      </div>
      <span>Illustrate for me is a world. A world where you can create anything from nothing.</span><br>
      <Span>An illustrator artist is one who creates two-dimensional images for companies and industries,</Span><br><br>
      <span>Such as fashion design, children’s books, magazines, web sites, technical design, and advertising.</span>
    </v-flex>
     <v-flex xs6 offset-xs3 mt-5 class="left-s3-text" id="s3-text1" v-show="s3text1" ref="text1">
     <div class="left-title">
        <h2 d-flex class="display-3">Web Design</h2>
      </div>
      <span>Designing is the prosses of collecting ideas, </span><br>
      <span>and aesthetically arranging and implementing them. For me, web design is a passion.</span><br>
      <span>I enjoy taking the elements and build a unique user experience in the web interface.</span><br>
      <span>I’m putting full attention in designing each element separately.</span><br>
      <span>That means, the Layout, the Colour, the Graphics (Logo, Photos), the Fonts and the content.</span><br>
    </v-flex>
     <v-flex xs6 offset-xs3 mt-5 class="left-s3-text" id="s3-text2" v-show="s3text2" ref="text2">
     <div class="left-title">
        <h2 d-flex class="display-3">Graphic design</h2>
      </div>
      <span>Graphic design for me is the art of making images that attract direct attention towards themselves and use attention for a specific, </span><br>
      <span>deliberate purpose.</span><br>
      <span>I have 6 years experience in graphic design and web design.</span><br>
      <span>Designing is my passion and I love doing it with all my heart. </span><br>
      <span>I will not let my costumers be unsatisfied of my work. There will always be another kind of style.</span><br>

    </v-flex>
  </v-flex>

  <v-flex xs6>
    <onecell @Switched ="ChangeText"/>
  </v-flex>

 </v-layout>
 </section>
 </div>
 </Scrollama>
<section class="banner">
  <ImgBanner />
</section>
 <section id="four" class="main section4">
  <v-layout wrap row fill-height>
  <v-flex xs4 pt-5>
  <v-flex xs10 offset-xs2>
   <h1 class="display-3 s4-main-title s4-main-title">Latest Project</h1>
</v-flex>
  <v-flex xs8 offset-xs2 mt-3>
  
     <Span>CoinsFactor LTD is a public company created on January 2018 to increase awareness about crypto-currency based coins and operate currently at Israel and Europe.
The main company operations are digital coins exchange including new features like smart calculators, charts that able to provide the option for coins technical analysis easily, digital coins transactions mixer, smart notifications system about signals and AI predictions.
</span> <br><br>
<Span>
Our platform provides top security algorithms and the most recent technology for data protection.
To keep the privacy of our customers is the main goal of our company.
</Span>
<br><br>
<img class="uiux-logo":src="require('../assets/logos/coins-hor.png')" alt="coinsfactor-logo">
  
    </v-flex>
  </v-flex>
  <v-flex xs8>
    <Collection />
  </v-flex>
  </v-layout>
 </section>
<v-flex style="    width: 100%;
    height: 100%;
    overflow: hidden;
    display: -ms-flexbox;
    display: flex;">
<Div style="height:150vh; position: relative;
    min-width: 66vw;">
  <SlideShow />
  </Div>
</v-flex>
<Projects class="projects" />
<Footer class="footer"/>

  
 </div>
</template>

<script> 

import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import ImgBanner from '@/components/ImgBanner'
import SlideShow from '@/components/SlideShow'
import Collection from '@/components/Collection'
import onecell from '@/components/onecell'
import menuApp from '@/components/menuApp'
import 'intersection-observer'
import Scrollama from 'vue-scrollama'
import { TimelineLite } from 'gsap'

export default { 
  components:{
    menuApp,onecell,SlideShow,Collection, ImgBanner,Footer, Projects,Scrollama
  },
  data(){
    return{
     s3text0:false,
     s3text1:false,
     s3text2:false,
    }
  },
    mounted(){
    const { title } = this.$refs;
    const { mark } = this.$refs;
    const { rightBox } = this.$refs;
    const { uiText } = this.$refs;
  
  
    const timeline = new TimelineLite() ;
    TweenLite.to(title ,1, { ease: Power1.easeIn,x:-40,opacity:1, }); 
    TweenLite.to(uiText,1, { ease: Power1.easeIn,opacity:1,delay:1}); 
    },
    methods:{
          stepEnterHandler ({element, index, direction}) {
            console.log(index);
             const { nav } = this.$refs;
             switch(index){
            case 0:           
          TweenLite.to(nav,0.5, {className:'nav-container'}); 
            break;
            case 1:
        
            break;
            case 2:
          TweenLite.to(nav,0.7, {x:65,className:'nav-container-fixed'}); 
            break;
            }
          },
        ChangeText(value){
          
    const { text0 } = this.$refs;
    const { text1 } = this.$refs;
    const { text2 } = this.$refs;
    const { leftbox } = this.$refs;
     

            switch(value){
                case 0:
             
                this.s3text1 = false
                this.s3text2 = false
                this.s3text0 = true
                TweenLite.to(leftbox ,1 ,{boxShadow: "6px 9px 17px 0px rgba(0, 0, 0, 0.22)" ,y:0,onComplete:function(){
                  TweenLite.fromTo(text0 ,1,{opacity:0} ,{ ease: Power1.easeIn,x:-40,opacity:1, });        
                }}); 
              
                break;
                case 1:
                this.s3text1 = true
                this.s3text2 = false
                this.s3text0 = false
                TweenLite.fromTo(text1 ,1,{opacity:0} ,{ ease: Power1.easeIn,x:-40,opacity:1}); 
                break;
                case 2:
                 this.s3text0 = false
                this.s3text1 = false
                this.s3text2 = true
              TweenLite.fromTo(text2 ,1,{opacity:0} ,{ ease: Power1.easeIn,x:-40,opacity:1, });                   
                break;
            }


        },
     
    },


     
  }

</script>

<style scoped> 

#s3-text0{
    opacity:0;
}
#s3-text1{
    opacity:0;
}
#s3-text2{
    opacity:0;
}
.left-s3-text{
 border-left: 4px solid #e0752b;
    padding-left: 18px;
}
#three{
  height:auto !important;
}
.ui-text:hover{
  color:#fff;
  transition:0.3s;
}
.title-box{
transform:translatex(-80px)
}
.caption-title{
  font-size:2em;
  color:#C7EFFC;
}
.welcome-title{
    width: 35vw;
    font-size: 6em;
    opacity:1;
    color:White;
}
#img1{
  background-image:url("/nucluer.png");
  background-repeat: no-repeat;
  background-size: contain;
}
#img2{
  background-size: contain;
  background-image:url("/faceit.png");
  background-repeat: no-repeat;
  transform: translateY(50px);
}

.section2-text{
    font-size: 4em;
}
.examples-layout{
  top:50%;
  position:fixed;
}

.img-box{
    width: 200px;
    height: 300px;
    position: relative;
    left: 25%;
    background: #fff;
    box-shadow: 9px 12px 20px -6px #00000061;
    opacity:0;
}
html{
  font-family:'Montserrat', sans-serif !important;
}

.welcome-box-left{
  height:100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.welcome-box-right{

}
.mark{
    color: white;
    font-size: 10em;
}


</style>

