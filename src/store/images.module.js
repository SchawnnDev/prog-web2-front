import Vue from 'vue'
import {
    IMAGES_ADD
} from '@/store/mutations.type'
import {IMAGES_LOAD} from '@/store/actions.type';

const state = {
    page: 1,
    images: []
}

export const mutations = {
    // init language (from file)
    [IMAGES_ADD](state, images) {
        /**
         * S'il y'a encore des données dans la page, on compare et on récupère
         */
        for (let img of images) {

            let found = false;

            for (let value of state.images) {
                if (value.id != img.id)
                    continue;

                found = true;
                break;
            }

            if (found)
                continue;

            state.images.push(img);

        }

        /**
         * Si l'on récupère 4 images, alors on peut changer de page.
         */

        if (images.length == 4)
            state.page++;
    },

}

export const actions = {
    // Non async : la traduction doit être affichée directement
    [IMAGES_LOAD](context) {
        // on charge le fichier des traductions

        Vue.prototype.$axios.get("api/images", {params: {page: context.state.page}})
            .then(response => {
                context.commit(IMAGES_ADD, response.data.data);
            });
    }
}

const getters = {

    getImagesCount: state => {
        if (!state.images)
            return null;
        return state.images.length;
    },

    getImages: state => {
        return state.images;
    }

}

export default {
    state,
    mutations,
    actions,
    getters
}