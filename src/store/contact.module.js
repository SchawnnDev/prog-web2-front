import {ContactService} from "../common/api.service";
import {
    CONTACT_SET_DISPLAY_STATUS,
    CONTACT_MAIL_INIT,
    CONTACT_MAIL_SET_NAME,
    CONTACT_MAIL_SET_EMAIL, CONTACT_MAIL_SET_MESSAGE
} from "./mutations.type";
import {CONTACT_MAIL_SEND} from "./actions.type";

const state = {
    name: {
        default: "",
        type: String
    },
    email: {
        default: "",
        type: String
    },
    message: {
        default: "",
        type: String
    },
    //
    sent: false,
    errors: {},
    success: false
}

const mutations = {

    [CONTACT_MAIL_INIT](state, mail) {
        state.email = mail;
        state.sent = false;
        state.errors = {};
        state.success = false;
    },

    [CONTACT_SET_DISPLAY_STATUS](state, data) {
        state.sent = true;
        state.errors = data.errors;
        state.success = data.success;
    },

    [CONTACT_MAIL_SET_NAME](state, name) {
        state.name = name;
    },

    [CONTACT_MAIL_SET_EMAIL](state, email) {
        state.email = email;
    },

    [CONTACT_MAIL_SET_MESSAGE](state, message) {
        state.message = message;
    },


}

const actions = {
    [CONTACT_MAIL_SEND](context) {
        return ContactService.send({
            name: context.state.name,
            email: context.state.email,
            message: context.state.message
        }).then(() => {
            context.commit(CONTACT_SET_DISPLAY_STATUS, {success: true, errors: {}});
        }).catch(error => {
            if (error.response.status == 422) {
                context.commit(CONTACT_SET_DISPLAY_STATUS, {success: false, errors: error.response.data.errors});
            }
        });
    }
}

const getters = {
    getErrors: state => {
        return state.errors;
    },

    success: state => {
        return state.success;
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}