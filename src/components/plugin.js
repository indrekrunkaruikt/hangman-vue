import Vue from 'vue'
import Api from 'api'

Vue.prototype.$api = Vue.axios = new Api("hello world");

export default Vue
