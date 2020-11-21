import Vue from 'vue'
import Vuex from 'vuex'
import i18n from './i18n.module'
import images from './images.module'
import contact from './contact.module'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        i18n,
        images,
        contact,
    },
})

export default store
