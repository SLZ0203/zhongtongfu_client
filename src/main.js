import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Picker} from 'mint-ui'
import axios from 'axios'
import 'lib-flexible/flexible'
import Distpicker from 'v-distpicker'
import wx from 'weixin-js-sdk'
import TopHeader from './components/TopHeader/TopHeader'

//注册全局组件
Vue.component('TopHeader', TopHeader);
Vue.component(Picker.name, Picker);
Vue.component('v-distpicker', Distpicker);
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
