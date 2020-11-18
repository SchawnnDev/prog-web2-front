import {
    CONTACT_SET_DISPLAY_STATUS, CONTACT_MAIL_SEND_START, CONTACT_MAIL_SEND_END
} from "./mutations.type";
import {_axios} from "@/plugins/axios";
import {CONTACT_MAIL_SEND} from "@/store/actions.type";
import {CONTACT_MAIL_RESET} from "@/store/mutations.type";

export const MailForm = {
    name: '',
    email: '',
    message: '',
}

const state = {
    mailErrors: {},
    mailSending: false,
    mailSent: false,
    mailSuccess: false,
}

const mutations = {

    [CONTACT_SET_DISPLAY_STATUS](state, data) {
        state.mailSent = true;
        state.mailErrors = data.errors;
        state.mailSuccess = data.success;

        if (!state.mailSuccess) return;

        data.mail.name = '';
        data.mail.email = '';
        data.mail.message = '';

    },

    [CONTACT_MAIL_SEND_START](state) {
        state.mailSending = true;
        state.mailSent = false;
        state.mailSuccess = false;
    },

    [CONTACT_MAIL_SEND_END](state) {
        state.mailSending = false;
    },

    [CONTACT_MAIL_RESET](state) {
        state.mailSent = false
        state.mailErrors = {}
        state.mailSuccess = false
        state.mailSending = false
    }

}

const actions = {
    [CONTACT_MAIL_SEND]: ({commit, rootGetters}, mail) => {
        commit(CONTACT_MAIL_SEND_START)

        let emailSimpleRegex = /\S+@\S+\.\S+/;
        let errors = []
        // Si non valide, il y'a toujours encore une validation au niveau du backend.

        if (mail.name.length < 2 || mail.name.length > 64)
            errors.push({message: rootGetters.getTranslation('views.contact.messages.validation.name')});

        if (!emailSimpleRegex.test(mail.email))
            errors.push({message: rootGetters.getTranslation('views.contact.messages.validation.email')});

        if (mail.message.length < 8 || mail.message.length > 2048)
            errors.push({message: rootGetters.getTranslation('views.contact.messages.validation.message')});

        if (errors.length !== 0) {
            commit(CONTACT_SET_DISPLAY_STATUS, {success: false, errors: {errors: errors}, mail: mail})
            commit(CONTACT_MAIL_SEND_END)
            return false;
        }

        return _axios.post('api/contact', mail)
            .then(response => {
                if (response.status === 200) {
                    commit(CONTACT_SET_DISPLAY_STATUS, {success: true, errors: {messages: ""}, mail: mail})
                }
            })
            .catch((error) => {
                commit(
                    CONTACT_SET_DISPLAY_STATUS,
                    {success: false, errors: error.response.data, mail: mail},
                )
            })
            .finally(() => {
                commit(CONTACT_MAIL_SEND_END)
            })
    },
}

const getters = {
    mailErrors: state => state.mailErrors,
    mailSending: state => state.mailSending,
    mailSent: state => state.mailSent,
    mailSuccess: state => state.mailSuccess,
}

export default {
    state,
    mutations,
    actions,
    getters
}