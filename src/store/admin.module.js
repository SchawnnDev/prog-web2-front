import {ADMIN_FETCH_IMAGES} from '@/store/actions.type';
import {ImagesService} from "../common/api.service";
import {ADMIN_ADD_IMAGE_TO_LIST, ADMIN_SET_IMAGES, ADMIN_SET_IMAGES_LIST} from "./mutations.type";
import {ADMIN_CREATE_IMAGE, ADMIN_UPDATE_IMAGE} from "./actions.type";

const state = {
    image: {
        id: "",
        title: "",
        description: "",
        url: ""
    }
}

const mutations = {
    // init language (from file)
    [ADMIN_SET_IMAGES_LIST](state, images) {
        state.images = images;
    },

    [ADMIN_ADD_IMAGE_TO_LIST](state, image) {
        state.images.push(image);
    }

}

const actions = {
    async [ADMIN_FETCH_IMAGES](context, params) {
        const data = await ImagesService.get(params).data;
        context.commit(ADMIN_SET_IMAGES, data.data);
        return data;
    },
    [ADMIN_CREATE_IMAGE](context, image) {
        const data = ImagesService.create(image);
        context.commit(ADMIN_ADD_IMAGE_TO_LIST, data);
        return data;
    },
    [ADMIN_UPDATE_IMAGE](context, image) {
        return ImagesService.update(image.id, image);
    }
}

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}