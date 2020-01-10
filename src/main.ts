import Vue from 'vue'
import App from './App.vue'

import NpmDemo from 'vue-npm-demos'
import 'vue-npm-demos/lib/index.css'
Vue.use(NpmDemo)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
