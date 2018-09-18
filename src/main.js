import Vue from 'vue'
import App from './App'
import globalData from './utils/globalData'
import wxApp from './utils/app'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.globalData = globalData
Vue.prototype.app = wxApp

const app = new Vue(App)
app.$mount()
