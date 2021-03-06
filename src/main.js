import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import store from '@/vuex'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
