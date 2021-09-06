import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Web3 from "web3"
Vue.prototype.$web3 = new Web3("https://http-testnet.hecochain.com")
Vue.prototype.$Web3 = Web3

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import './element-variables.scss'
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
