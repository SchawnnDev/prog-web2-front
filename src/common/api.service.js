import Vue from "vue";

const ApiService = {

    query(resource, params) {
        return Vue.prototype.$axios.get(`api/${resource}`, {params : params}).catch(error => {
            throw new Error(`[ApiService] ${error}`);
        });
    },

    get(resource, id = "") {
        return Vue.prototype.$axios.get(`api/${resource}/${id}`).catch(error => {
            throw new Error(`[ApiService] ${error}`);
        });
    },

    post(resource, params) {
        return Vue.prototype.$axios.post(`api/${resource}`, params);
    },

    update(resource, id, params) {
        return Vue.prototype.$axios.put(`api/${resource}/${id}`, params);
    },

    put(resource, params) {
        return Vue.prototype.$axios.put(`api/${resource}`, params);
    },

    delete(resource) {
        return Vue.prototype.$axios.delete(`api/${resource}`).catch(error => {
            throw new Error(`[ApiService] ${error}`);
        });
    }
};

export default ApiService;

export const ImagesService = {
    get(params) {
        return ApiService.query("images", params);
    },
    create(params) {
        return ApiService.post("images", {image: params});
    },
    update(id, params) {
        return ApiService.update("images", id, {image: params});
    },
    destroy(id) {
        return ApiService.delete(`images/${id}`);
    }
};

export const ContactService = {
    send(params) {
        return ApiService.post("contact", params);
    }
}