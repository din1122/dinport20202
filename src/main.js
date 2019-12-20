import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './assets/style.css';
var VueScrollTo = require('vue-scrollto');

import VueMasonry from 'vue-masonry-css'

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  filter: {
    progressive(listener, options) {
      const isCDN = /qiniudn.com/
      if (isCDN.test(listener.src)) {
        listener.el.setAttribute('lazy-progressive', 'true')
        listener.loading = listener.src + '?imageView2/1/w/10/h/10'
      }
    },
    webp(listener, options) {
      if (!options.supportWebp) return
      const isCDN = /qiniudn.com/
      if (isCDN.test(listener.src)) {
        listener.src += '?imageView2/2/format/webp'
      }
    }
  }
})
Vue.use(VueMasonry);
Vue.use(VueScrollTo)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");