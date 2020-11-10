import {IMAGES_LOAD_END, IMAGES_LOAD_START} from "./mutations.type";
import {IMAGES_DELETE, IMAGES_LOAD} from "./actions.type";
import {_axios} from "@/plugins/axios";

const state = {
    images: [],
    loading: true,
    page: 1,
}

const mutations = {
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

}

const actions = {
    [IMAGES_DELETE]: ({commit}, params) => {
        return _axios.delete('api/images/' + params.id)
            .then(({data}) => {
                setTimeout(() => commit(IMAGES_LOAD_END, {data: data.data, per_page: params.per_page}),500)
            })
            .catch(error => {
                throw new Error(error);
            });
    },
    [IMAGES_LOAD](context, params) {
        context.commit(IMAGES_LOAD_START);
        // Dans notre cas on a un problème : s'il y'a des nouvelles images, alors elle ne seront pas chargées
        // on charge alors toutes les données.
        params['per_page'] = params.per_page * context.state.page;
        // on charge les images du back
        return _axios.get('api/images', {params : params})
            .then(({data}) => {
                setTimeout(() => context.commit(IMAGES_LOAD_END, {data: data.data, per_page: params.per_page}),500)
            })
            .catch(error => {
                throw new Error(error);
            });
    }
}

const getters = {

    getImagesCount: state => {
        return !state.images ? 0 : state.images.length;
    },

    getImages: state => {
        return state.images;
    },

    isLoading: state => {
        return state.loading;
    }

}

export default {
    state,
    mutations,
    actions,
    getters
}