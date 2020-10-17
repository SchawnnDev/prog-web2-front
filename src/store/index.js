import Vue from 'vue'
import Vuex from 'vuex'
import i18n from './i18n.module'
import images from './images.module'
import admin from './admin.module'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        i18n,
        images,
        admin
    }
})

export default store;
