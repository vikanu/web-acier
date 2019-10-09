import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import AOS from 'aos'
import 'aos/dist/aos.css'
import vueSmoothScroll from 'vue-smooth-scroll'
Vue.use(vueSmoothScroll)



Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init()
  },
  router,
  render: h => h(App)
}).$mount('#app')
