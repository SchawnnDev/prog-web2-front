import {
    IMAGES_LOAD_END,
    IMAGES_LOAD_START,
    IMAGES_SET_DISPLAY_STATUS
} from "./mutations.type";
import {IMAGES_DELETE, IMAGES_LOAD, IMAGES_SEND} from "./actions.type";
import {_axios} from "@/plugins/axios";
import {
    IMAGES_BOX_SEND_END,
    IMAGES_BOX_SEND_START,
    IMAGES_CLOSE_EDIT_BOX, IMAGES_CLOSE_MESSAGE,
    IMAGES_OPEN_EDIT_BOX
} from "@/store/mutations.type";

const state = {
    images: [],
    loading: true,
    page: 1,
    success: false,
    message: '',

    boxDisplayed: false,
    boxImage: ImageForm,
    boxSubmitting: false,
    boxSubmitErrors: '',
    boxSubmitSuccess: false,
}

export const ImageForm = {
    id: '',
    title: '',
    description: '',
    url: '',
    file: Image
}

const mutations = {

    [IMAGES_BOX_SEND_START](state) {
        state.boxSubmitting = true;
        state.boxSubmitErrors = {};
        state.boxSubmitSuccess = false;
    },

    [IMAGES_BOX_SEND_END](state, {success, data, created, message}) {
        state.boxSubmitting = false;
        state.boxSubmitSuccess = success;
        state.boxSubmitErrors = !success ? data : {};

        if (!success) return;

        state.message = message;
        state.success = true;
        state.boxImage = {};
        state.boxDisplayed = false;

        const image = data.data.data;

        if(!created)
        {
            state.images.splice(0, 0, image)
            return;
        }

        const found = state.images.find(value => value.id === image.id);

        if(!found) return;

        found.title = image.title;
        found.description = image.description;
        found.url = image.url;
    },

    [IMAGES_OPEN_EDIT_BOX](state, image) {
        state.boxDisplayed = true;
        state.boxImage = image;
    },

    [IMAGES_CLOSE_EDIT_BOX](state) {
        state.boxDisplayed = false;
        state.boxImage = {};
        state.boxSubmitSuccess = false;
        state.boxSubmitErrors = {};
    },

    [IMAGES_CLOSE_MESSAGE](state) {
        state.message = '';
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

        if (data.data.length === data.per_page)
            state.page++;

        state.loading = false;
    },


    [IMAGES_SET_DISPLAY_STATUS](state, {success, message}) {
        state.success = success;
        state.message = message;
    }

}

const actions = {
    [IMAGES_SEND]: ({commit, state, rootGetters}, created) => {
        commit(IMAGES_BOX_SEND_START)

        let errors = []
        // Si non valide, il y'a toujours encore une validation au niveau du backend.

        if (state.boxImage.title.length < 2 || state.boxImage.title.length > 64)
            errors.push({message: rootGetters.getTranslation('views.admin.manage.messages.validation.title')});

        if (state.boxImage.description.length < 4 || state.boxImage.description.length > 1024)
            errors.push({message: rootGetters.getTranslation('views.admin.manage.messages.validation.description')});

        if (errors.length !== 0) {
            commit(IMAGES_BOX_SEND_END, {data: {errors: errors}, success: false, message: ""});
            return false;
        }

        let formData = new FormData();

        if(state.boxImage.file) formData.append('image', state.boxImage.file)
        formData.append('title', state.boxImage.title)
        formData.append('description', state.boxImage.description)

        let query = !created ? _axios.post('api/images', formData) : _axios.post('api/images/' + state.boxImage.id + '?_method=PUT', formData);
        let translation = 'views.admin.manage.messages.' + (created ? 'update-success' : 'create-success');

        return query.then(data => {
            commit(IMAGES_BOX_SEND_END, {
                data: data,
                created: created,
                success: true,
                message: rootGetters.getTranslation(translation)
            });
        }).catch((error) => {
            let errorMessage = error.message ? error.message.toString() : "Unknown error occured.";

            commit(IMAGES_BOX_SEND_END, {
                data: error.response ? error.response.data : {errors: [{image: errorMessage}]},
                created: created,
                success: false,
                message: ""
            });
        });

    },
    [IMAGES_DELETE]: ({commit, rootGetters}, params) => {
        return _axios.delete('api/images/' + params.id)
            .then(() => {
                commit(IMAGES_SET_DISPLAY_STATUS, {
                    success: true,
                    message: rootGetters.getTranslation('views.images.messages.delete-success')
                })
            })
            .catch(() => {
                commit(IMAGES_SET_DISPLAY_STATUS, {
                    success: false,
                    message: rootGetters.getTranslation('views.images.messages.delete-failed')
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
    imagesBoxSubmitting: state => state.boxSubmitting,
    imagesBoxSuccess: state => state.boxSubmitSuccess,
    imagesBoxErrors: state => state.boxSubmitErrors
}

export default {
    state,
    mutations,
    actions,
    getters
}