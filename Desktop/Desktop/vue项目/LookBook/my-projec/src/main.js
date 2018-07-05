import Vue from 'vue'
import router from './router'
import store from './store/'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import $ from 'jquery'
import App from './App.vue'
Vue.use(iView)
Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
document.addEventListener('deviceready', function () {
  new Vue({
    el: '#app',
    router,
    store,
    $,
    render: h => h(App)
  })
  window.navigator.splashscreen.hide()
}, false)
new Vue({
  el: '#app',
  router,
  store,
  $,
  render: h => h(App)
})
