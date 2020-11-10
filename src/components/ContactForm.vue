<template>

  <div class="input-form">

    <beat-loader :loading="mailSending" :color="'orange'" class="loader"/>

    <div class="alert" v-if="mailSent && !mailSending"
         :class="{danger : !mailSuccess}"
    >
      <p v-if="mailSuccess">
        {{ getTranslation('views.contact.messages.success') }}
      </p>

      <p v-else-if="Object.keys(mailErrors).length !== 0">
        {{ mailErrors.message }}
      </p>

      <p v-else>
        {{ getTranslation('views.contact.messages.error') }}
      </p>
    </div>

    <form @submit.prevent="sendEmail">

      <div class="input-group">
        <label for="name">{{ getTranslation('views.contact.form.names') }}</label>
        <input :disabled="mailSending"
               v-model="formValues.name"
               id="name"
               required
               type="text"
        >
      </div>

      <div class="input-group">
        <label for="email">{{ getTranslation('views.contact.form.email') }}</label>
        <input :disabled="mailSending"
               v-model="formValues.email"
               id="email"
               type="email"
        >
      </div>

      <div class="input-group">
        <label for="message">{{ getTranslation('views.contact.form.message') }}</label>
        <textarea :disabled="mailSending"
                  v-model="formValues.message"
                  cols="30"
                  id="message"
                  required
                  rows="5"
        />
      </div>

      <button :disabled="mailSending" class="submit-button button-sm">
        {{ getTranslation('views.contact.buttons.send') }}
      </button>
    </form>

  </div>

</template>

<script>
import {mapGetters} from 'vuex'
import BeatLoader from 'vue-spinner/src/BeatLoader'
import {CONTACT_MAIL_SEND} from "@/store/actions.type";

export default {
  name: 'ContactForm',

  components: {
    BeatLoader,
  },

  data: () => ({
    formValues: {
      name: '',
      email: '',
      message: '',
    },
  }),

  computed: {
    ...mapGetters([
      'getTranslation',
      'mailSuccess',
      'mailErrors',
      'mailSending',
      'mailSent',
    ]),
  },

  methods: {
    sendEmail() {
      this.$store.dispatch(CONTACT_MAIL_SEND, this.formValues)
    },
  },

}
</script>

<style scoped>

.loader {
  display: flex;
  justify-content: center;
}

</style>
