import { _axios } from '@/plugins/axios'

const state = {
  mailErrors: {},
  mailSending: false,
  mailSent: false,
  mailSuccess: false,
}

const getters = {
  mailSending: state => state.mailSending,
}

const actions = {
  sendMail: ({ commit }, mail) => {
    commit('MAIL_SENDING_START')

    return _axios.post('api/contact', mail)
                 .then(response => {
                   if (response.status === 200) {
                     commit(
                       'CONTACT_STATUS',
                       { success: true, errors: {} },
                     )
                   }
                 })
                 .catch((error) => {
                   commit(
                     'CONTACT_STATUS',
                     { success: false, errors: error.response.data },
                   )
                 })
                 .finally(() => {
                   commit('MAIL_SENDING_END')
                 })
  },
}

const mutations = {
  CONTACT_STATUS: (state, { success, errors }) => {
    state.sent = true
    state.errors = errors
    state.success = success
  },
  MAIL_SENDING_END: (state) => {
    state.mailSending = false
  },
  MAIL_SENDING_START: (state) => {
    state.mailSending = true
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
