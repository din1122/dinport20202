<template>
    <v-container grid-list-xl grid-list-xs>
        <v-layout row wrap>

            <v-flex xs12>
                <v-flex text-xs-center>
                    <span class="display-2 showcase-title">Projects</span>
                </v-flex>
                <Div v-for="item in projects">
                    <v-layout justify-space-between pb-5 pt-5 row wrap>
                        <v-flex xl2 xs12 pa-2>
                            <div class="logo-img-box" @click="OpenModel(item.id)">
                                <img v-lazy="require('../assets/logos/' + item.logoimg)" style="width:100%;">
                            </div>
                            <v-flex>
                                <h2>{{item.title}}</h2>
                                <p>{{item.role}}</p>
                                <span class="caption" style="color:#adadad">{{item.caption}}</span>
                            </v-flex>
                        </v-flex>
                        <v-flex xl5>
                            <img v-lazy="require('../assets/UIUX/' + item.uximg)" class="project-img">
                        </v-flex>
                        <v-flex xl5>
                            <img v-lazy="require('../assets/UIUX/' + item.uximg2)" class="project-img">
                        </v-flex>
                    </v-layout>
                    <v-dialog v-model="modalVisible" :data="modalData">
                        <v-container class="npm">
                            <!-- Coinsfactor -->
                            <v-layout row wrap>
                            <v-flex v-if="modalData == 1" xs12>
                            <v-flex text-xs-center>
                                <p class="d-inline display-3 showcase-title ">Coinsfactor</p>
                            </v-flex>
            
                                <p>
                            <Span>CoinsFactor LTD is a public company created on January 2018 to increase awareness about crypto-currency based coins and operate currently at Israel and Europe.
                            The main company operations are digital coins exchange including new features like smart calculators, charts that able to provide the option for coins technical analysis easily, digital coins transactions mixer, smart notifications system about signals and AI predictions.
                            </span> <br><br>
                            <Span>
                            Our platform provides top security algorithms and the most recent technology for data protection.
                            To keep the privacy of our customers is the main goal of our company.
                            </Span>
                                </p>
                            <v-flex xs12 text-xs-center>
                            <img class="model-logo d-inline model-img" v-lazy="require('../assets/logos/coins-500.png')" alt="Coinsfactor-UIUX-Dinashkenazi-Crypto">
                            </v-flex>
                                <img class="model-img" v-lazy="require('../assets/UIUX/Market.png')" alt="Coinsfactor-UIUX-Dinashkenazi-Crypto">
                                <img class="model-img" v-lazy="require('../assets/UIUX/Market1.png')" alt="Coinsfactor-UIUX-Dinashkenazi-Crypto">
                            </v-flex> 
                            <!-- ONECELL -->
                            <v-flex v-if="modalData == 2">
                            <v-flex xs12>
                            <v-icon large class="right" @click.prevent="closeDialog">close</v-icon>
                            </v-flex>
                            <v-layout row wrap>
                            <v-flex xs3 >
                            <img class="model-logo d-inline model-img" v-lazy="require('../assets/logos/onecelllogo.png')" alt="Onecellstore-logo">
                            </v-flex>
                                  <v-flex xs8 xl9 >
                                  <v-layout column>
                                    <v-flex>
                                    <p class="d-inline display-3 showcase-title ">ONECELL</p>
                                    </v-flex>
                                    <v-flex>
                                <p>
                                <h3>Onecell - “when life started to manifest”</h3>
                                OneCell represent to us as all the living started from only One Cell and then developed to this magnificent life we are experiencing. 
                                you are welcome to enjoy our mind and share our love with this world! 
                                we create our styles in our own clothing line studio, in a unique way which fit to audience who love to keep open mind and curious.
                                we invite you to a visual adventure through our imagination and experience our different kind of artistic designs
                                </p>
                                    </v-flex>
                                </v-layout>
                                </v-flex>
            
                            <v-flex xs12>
                                <img class="model-img" v-lazy="require('../assets/UIUX/onecell-home.png')" alt="Coinsfactor-UIUX-Dinashkenazi-Crypto">
                                <img class="model-img" v-lazy="require('../assets/UIUX/onecell-product.png')" alt="Coinsfactor-UIUX-Dinashkenazi-Crypto">
                            </v-flex>
                                </v-layout>
                            </v-flex>
                            <v-flex v-if="modalData == 3">
                                  <v-flex xs12>
                            <v-icon large class="right" @click.prevent="closeDialog">close</v-icon>
                            </v-flex>
                            <v-layout row wrap>
                            <v-flex xs3 >
                            <img class="model-logo d-inline model-img" v-lazy="require('../assets/logos/cannadis.png')" alt="Cannadis-logo">
                            </v-flex>
                                  <v-flex xs8 xl9 >
                                  <v-layout column>
                                    <v-flex>
                                    <p class="d-inline display-3 showcase-title ">Cannadis</p>
                                    </v-flex>
                                    <v-flex>
                                <p>
                                <h3>Onecell - “when life started to manifest”</h3>
                                OneCell represent to us as all the living started from only One Cell and then developed to this magnificent life we are experiencing. 
                                you are welcome to enjoy our mind and share our love with this world! 
                                we create our styles in our own clothing line studio, in a unique way which fit to audience who love to keep open mind and curious.
                                we invite you to a visual adventure through our imagination and experience our different kind of artistic designs
                                </p>
                                    </v-flex>
                                </v-layout>
                                </v-flex>
                            <v-flex xs12>
                                <img class="model-img" v-lazy="require('../assets/UIUX/Cannadis-UX2.png')" alt="Coinsfactor-UIUX-Dinashkenazi-Crypto">
                                <img class="model-img" v-lazy="require('../assets/UIUX/Cannadis-UX1.png')" alt="Coinsfactor-UIUX-Dinashkenazi-Crypto">
                            </v-flex>
                                </v-layout>
                            </v-flex>
                            </v-layout>
                        </v-container>
                    </v-dialog>
                    <Model v-if="modalVisible" @close="modalVisible = false" :data="modalData" />
                </Div>
            </v-flex>

            <v-flex xs12>
                <v-flex text-xs-center>
                    <span class="display-2 showcase-title">Illustrations</span>
                </v-flex>
                <div v-for="item in illu" mb-5>
                    <v-layout justify-space-between row wrap>
                        <v-flex xl4 xs12>
                            <img v-lazy="require('../assets/draw/bearddragon.png')" class="project-img">
                        </v-flex>
                        <v-flex xl4 xs12>
                            <img v-lazy="require('../assets/draw/elfwomen.png')" class="project-img">
                        </v-flex>
                        <v-flex xl4>
                            <img v-lazy="require('../assets/draw/WolfWoman.png')" class="project-img">
                        </v-flex>
                    </v-layout>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import Model from '@/components/Model.vue'
    export default {
        data() {
            return {
                projects: [{
                        id: 1,
                        title: 'Coinsfactor LTD',
                        role: 'Branding, UI-UX, Design, Front-end',
                        caption: "Cryptocurrency platform",
                        logoimg: 'coins-500.png',
                        uximg: 'Market1.png',
                        uximg2: 'Market.png'
                    },
                    {
                        id: 2,
                        title: 'Onecell ',
                        role: 'Branding,Logo Design,Product Design',
                        caption: "Fashion Botique",
                        logoimg: 'onecelllogo.png',
                        uximg: 'onecell-home.png',
                        uximg2: 'onecell-product.png'
                    },
                    {
                        id: 3,
                        title: 'Cannadis',
                        role: 'Branding,Logo Design,UI-UX',
                        caption: "Medicine Brand",
                        logoimg: 'cannadis.png',
                        uximg: 'Cannadis-UX2.png',
                        uximg2: 'Cannadis-UX1.png'
                    },
                ],
                modalVisible: false,
                modalData: null
            }
        },
        components: {
            Model
        },
        methods: {
            OpenModel(data) {
                this.modalData = data
                const x = this.modalData
                this.modalVisible = true
            },
            closeDialog(data){
                this.modalVisible = false
            }
        }
    }
</script>
<style scoped>
    .showcase-title {
        border-left: solid 4px #E0752B;
        padding-left: 5px;
    }
    .model-img{
        width:100%;
    }
    >>>.v-dialog{
    background:white;
    }
    .model-logo{
        width:350px;
    }
    .v-icon{
        cursor:pointer;
    }
</style>