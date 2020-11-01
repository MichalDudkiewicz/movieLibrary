import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
const $ = require('jquery')
window.$ = $
require('jquery-confirm')

new Vue({
  render: h => h(App),
}).$mount('#app')

