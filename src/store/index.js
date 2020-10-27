import Vue from 'vue'
import Vuex from 'vuex'
import i18n from './i18n.module'
import images from './images.module'
import admin from './admin.module'
import contact from './contact.module'

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        i18n : i18n,
        images : images,
        admin : admin,
        contact : contact
    }
})

export default store;
