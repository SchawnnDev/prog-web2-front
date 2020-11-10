import {
    CONTACT_SET_DISPLAY_STATUS,
    CONTACT_MAIL_SET_NAME,
    CONTACT_MAIL_SET_EMAIL, CONTACT_MAIL_SET_MESSAGE, CONTACT_MAIL_SEND_START, CONTACT_MAIL_SEND_END
} from "./mutations.type";
import {_axios} from "@/plugins/axios";
import {CONTACT_MAIL_SEND} from "@/store/actions.type";

const state = {
    mailErrors: {},
    mailSending: false,
    mailSent: false,
    mailSuccess: false,
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
    [CONTACT_MAIL_SEND]: ({commit}, mail) => {
        commit(CONTACT_MAIL_SEND_START)

        return _axios.post('api/contact', mail)
            .then(response => {
                if (response.status === 200) {
                    commit(CONTACT_SET_DISPLAY_STATUS, {success: true, errors: {}})
                }
            })
            .catch((error) => {
                commit(
                    CONTACT_SET_DISPLAY_STATUS,
                    {success: false, errors: error.response.data},
                )
            })
            .finally(() => {
                commit(CONTACT_MAIL_SEND_END)
            })
    },
}

const getters = {
    mailErrors: state => state.mailSending,
    mailSending: state => state.mailSending,
    mailSent: state => state.mailSending,
    mailSuccess: state => state.mailSending,
}

export default {
    state,
    mutations,
    actions,
    getters
}