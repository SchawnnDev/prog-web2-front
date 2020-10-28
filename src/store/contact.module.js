import {ContactService} from "../common/api.service";
import {
    CONTACT_SET_DISPLAY_STATUS,
    CONTACT_MAIL_SET_NAME,
    CONTACT_MAIL_SET_EMAIL, CONTACT_MAIL_SET_MESSAGE, CONTACT_MAIL_SEND_START, CONTACT_MAIL_SEND_END
} from "./mutations.type";
import {CONTACT_MAIL_SEND} from "./actions.type";

const state = {
    name: String,
    email: String,
    message: String,
    //
    sent: false,
    errors: {},
    success: false,
    sending: false
}

const mutations = {

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

    [CONTACT_MAIL_SEND_START](state) {
        state.sending = true;
    },

    [CONTACT_MAIL_SEND_END](state) {
        state.sending = false;
    },

}

const actions = {
    [CONTACT_MAIL_SEND](context) {
        context.commit(CONTACT_MAIL_SEND_START);

        return ContactService.send({
            name: context.state.name,
            email: context.state.email,
            message: context.state.message
        }).then(response => {

            if (response.status != 200)
                return;

            context.commit(CONTACT_SET_DISPLAY_STATUS, {success: true, errors: {}});
        }).catch((error) => {
            context.commit(CONTACT_SET_DISPLAY_STATUS, {success: false, errors: error.response.data});
        }).finally(() => {
            context.commit(CONTACT_MAIL_SEND_END);
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

    isSending: state => {
        return state.sending;
    },

    isSent: state => {
        return state.sent;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}