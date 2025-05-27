import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

//These values are replaces during amplify setup
axios.defaults.baseURL = "https://e1on4vipag.execute-api.us-west-2.amazonaws.com/prod"
Vue.prototype.$UserPoolId = 'us-west-2_s1AdJUSBe'
Vue.prototype.$ClientId = '2k7b2l4k6v0nl8m5ptp0gsvhf'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
router,
  render: h => h(App),

}).$mount('#app')
