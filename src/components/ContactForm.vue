<template>

  <div class="input-form">

    <div class="alert" v-if="Object.keys(this.getErrors).length !== 0" v-bind:class="{danger : !this.success}">
      <p v-if="success">{{ getTranslation("views.contact.messages.success") }}</p>
      <p v-else>
        {{ getErrors.message[0] }}
      </p>
    </div>

    <form @submit="sendEmail">

      <div class="input-group">
        <label for="name">{{ getTranslation("views.contact.form.names") }}</label>
        <input v-model="name" id="name" required type="text">
      </div>

      <div class="input-group">
        <label for="email">{{ getTranslation("views.contact.form.email") }}</label>
        <input v-model="email" id="email" required type="email">
      </div>

      <div class="input-group">
        <label for="message">{{ getTranslation("views.contact.form.message") }}</label>
        <textarea v-model="message" cols="30" id="message" required rows="5"/>
      </div>

      <input :disabled="this.loading" type="submit" class="submit-button button-sm" :value="getTranslation('views.contact.buttons.send')">
    </form>

  </div>

</template>

<script>
import {mapGetters} from "vuex";
import {CONTACT_MAIL_SEND} from "@/store/actions.type";
import {
  CONTACT_MAIL_INIT,
  CONTACT_MAIL_SET_EMAIL,
  CONTACT_MAIL_SET_MESSAGE,
  CONTACT_MAIL_SET_NAME
} from "@/store/mutations.type";

export default {
  name: "ContactForm",
  computed: {
    ...mapGetters(["getTranslation", "success", "getErrors", "contact/isLoading"]),
    name: {
      get() {
        return this.$store.state.name;
      },
      set(value) {
        this.$store.commit(CONTACT_MAIL_SET_NAME, value)
      }
    },
    email: {
      get() {
        return this.$store.state.email;
      },
      set(value) {
        this.$store.commit(CONTACT_MAIL_SET_EMAIL, value)
      }
    },
    message: {
      get() {
        return this.$store.state.message;
      },
      set(value) {
        this.$store.commit(CONTACT_MAIL_SET_MESSAGE, value)
      }
    },
  },

  mounted() {
    this.$store.commit(CONTACT_MAIL_INIT, {name: "", email: "", message: ""});
  },

  methods: {
    sendEmail(e) {
      e.preventDefault();
      this.$store.dispatch(CONTACT_MAIL_SEND);
    }
  }

}
</script>

<style scoped>

.input-form .alert {
  padding: 15px;
  border: 1px solid #c3e6cb;
  border-radius: 5px;
  margin-bottom: 10px;
  color: #155724;
  background-color: #d4edda;
}

.input-form .alert li {
  text-decoration: none;
}

.input-form .alert.danger {
  border: 1px #f5c6cb solid;
  color: #721c24;
  background-color: #f8d7da;
}

</style>