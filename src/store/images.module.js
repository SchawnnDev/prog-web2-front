import {IMAGES_LOAD_END, IMAGES_LOAD_START, IMAGES_SET_DISPLAY_STATUS} from "./mutations.type";
import {IMAGES_DELETE, IMAGES_LOAD, IMAGES_SEND} from "./actions.type";
import {_axios} from "@/plugins/axios";
import {
    IMAGES_BOX_SEND_END,
    IMAGES_BOX_SEND_START,
    IMAGES_CLOSE_EDIT_BOX,
    IMAGES_OPEN_EDIT_BOX
} from "@/store/mutations.type";

const state = {
    images: [],
    loading: true,
    page: 1,
    success: false,
    message: "",

    boxDisplayed: false,
    boxImage: Image,
    boxSubmitting: false,
    boxSubmitError: "",
    boxSubmitSuccess: false,
}

const Image = {
    id: "",
    title: "",
    description: "",
    url: ""
}

const mutations = {

    [IMAGES_BOX_SEND_START](state) {
        state.boxSubmitting = true;
        state.boxSubmitError = "";
        state.boxSubmitSuccess = false;
    },

    // eslint-disable-next-line no-unused-vars
    [IMAGES_BOX_SEND_END](state, {success, data}) {
        state.boxSubmitting = false;
        state.boxSubmitSuccess = success;
        state.boxSubmitError = "";
    },

    [IMAGES_OPEN_EDIT_BOX](state, image) {
        state.boxDisplayed = true;
        state.boxImage = image;
    },

    [IMAGES_CLOSE_EDIT_BOX](state) {
        state.boxDisplayed = false;
        state.boxImage = {};
    },

    [IMAGES_LOAD_START](state) {
        state.loading = true;
    },

    [IMAGES_LOAD_END](state, data) {
        /**
         * S'il y'a encore des données dans la page, on compare et on récupère
         */
        for (let img of data.data) {

            let found = false;

            for (let value of state.images) {
                if (value.id !== img.id) continue;
                found = true;
                break;
            }

            if (found)
                continue;

            state.images.push(img);

        }

        /**
         * Si l'on récupère N images, alors on peut changer de page.
         */

        if (data.data.length == data.per_page)
            state.page++;

        state.loading = false;
    },


    [IMAGES_SET_DISPLAY_STATUS](state, {success, message}) {
        state.success = success;
        state.message = message;
    }

}

const actions = {
    [IMAGES_SEND]: ({commit, state}, create) => {
        let query = !create ? _axios.post('api/images', state.boxImage) : _axios.put('api/images/' + state.boxImage.id, state.boxImage);

        return query.then(({data}) => {
            commit(IMAGES_BOX_SEND_END, {data: data, success: true});
        }).catch(({data}) => {
            commit(IMAGES_BOX_SEND_END, {data: data, success: false});
        });

    },
    [IMAGES_DELETE]: ({commit, rootGetters}, params) => {
        return _axios.delete('api/images/' + params.id)
            .then(() => {
                commit(IMAGES_SET_DISPLAY_STATUS, {
                    success: true,
                    message: rootGetters.getTranslation("views.images.messages.delete-success")
                })
            })
            .catch(() => {
                commit(IMAGES_SET_DISPLAY_STATUS, {
                    success: false,
                    message: rootGetters.getTranslation("views.images.messages.delete-failed")
                })
            });
    },
    [IMAGES_LOAD]: ({commit, state}, params) => {
        commit(IMAGES_LOAD_START);
        // Dans notre cas on a un problème : s'il y'a des nouvelles images, alors elle ne seront pas chargées
        // on charge alors toutes les données.
        params['per_page'] = params.per_page * state.page;
        // on charge les images du back
        return _axios.get('api/images', {params: params})
            .then(({data}) => {
                setTimeout(() => commit(IMAGES_LOAD_END, {data: data.data, per_page: params.per_page}), 500)
            })
            .catch(error => {
                throw new Error(error);
            });
    }
}

const getters = {
    imagesCount: state => !state.images ? 0 : state.images.length,
    getImages: state => state.images,
    imagesLoading: state => state.loading,
    imagesMessage: state => state.message,
    imagesSuccess: state => state.success,
    imagesBoxItem: state => state.boxImage,
    imagesBoxDisplayed: state => state.boxDisplayed,
    imagesBoxSubmitting: state => state.boxSubmitting
}

export default {
    state,
    mutations,
    actions,
    getters
}