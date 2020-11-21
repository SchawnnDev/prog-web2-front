<template>

  <div class="input-form">

    <beat-loader :color="'orange'" :loading="mailSending" class="loader"/>

    <div v-if="!mailSending && Object.keys(mailErrors).length !== 0" class="alert"
         v-bind:class="{ 'danger' : !mailSuccess}">
      <div v-if="!mailSuccess">
        <div v-if="mailErrors.errors && Object.keys(mailErrors.errors).length !== 0">
          <div v-for="(v, k) in mailErrors.errors" v-bind:key="k">
            <p v-for="error in v" v-bind:key="error">
              {{ error }}
            </p>
          </div>
        </div>
        <div v-else>
          {{ getTranslation('views.contact.messages.error') }}
        </div>
      </div>
      <div v-else>
        {{ getTranslation('views.contact.messages.success') }}
      </div>
    </div>

    <form @submit.prevent="sendEmail">

      <div class="input-group">
        <label for="name">{{ getTranslation('views.contact.form.names') }}</label>
        <input id="name"
               v-model="formValues.name"
               :disabled="mailSending"
               required
               type="text"
               v-bind:class="{'error' : mailErrors && mailErrors.errors && mailErrors.errors.name}"
        >
      </div>

      <div class="input-group">
        <label for="email">{{ getTranslation('views.contact.form.email') }}</label>
        <input id="email"
               v-model="formValues.email"
               :disabled="mailSending"
               required
               type="email"
               v-bind:class="{'error' : mailErrors && mailErrors.errors && mailErrors.errors.email}"
        >
      </div>

      <div class="input-group">
        <label for="message">{{ getTranslation('views.contact.form.message') }}</label>
        <textarea id="message"
                  v-model="formValues.message"
                  :disabled="mailSending"
                  cols="30"
                  required
                  rows="5"
                  v-bind:class="{'error' : mailErrors && mailErrors.errors && mailErrors.errors.message}"
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
import {MailForm} from "@/store/contact.module";
import {CONTACT_MAIL_RESET} from "@/store/mutations.type";

export default {
  name: 'ContactForm',

  components: {
    BeatLoader,
  },

  data: () => ({
    formValues: MailForm
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

    exitPage() {
      this.formValues.name = ''
      this.formValues.email = ''
      this.formValues.message = ''
      this.$store.commit(CONTACT_MAIL_RESET)
    }
  },

}
</script>

<style scoped>

.loader {
  display: flex;
  justify-content: center;
}

</style>
