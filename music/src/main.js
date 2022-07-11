import './config'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  VueAxios, cancel
} from '@/utils/request'
import element from './element'
import 'element-ui/lib/theme-chalk/index.css'
import './permission'

Vue.config.productionTip = false
Vue.prototype.$cancel = cancel;
Vue.use(VueAxios, router)
Vue.use(element)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
