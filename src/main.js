import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// components

//Vue.component('rotate-loader', require('vue-spinner/src/RotateLoader.vue'));

// instance
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')



