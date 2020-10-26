<template>

  <form class="input-form" @submit="sendEmail">

    <div class="alert" v-show="this.getErrors" v-bind:class="{danger : !this.success}">

      <p v-if="success">{{ getTranslation("views.contact.messages.success") }}</p>
      <ul v-else v-bind:key="error.id" v-for="error in getErrors">
        <li>{{ error }}</li>
      </ul>

    </div>

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

    <input type="submit" class="submit-button button-sm" :value="getTranslation('views.contact.buttons.send')">
  </form>

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
    ...mapGetters(["getTranslation", "success", "getErrors"]),
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
    this.$store.commit(CONTACT_MAIL_INIT, {name: "s", email: "s", message: "s"});
  },

  methods: {
    sendEmail(event) {
      this.$store.dispatch(CONTACT_MAIL_SEND);
      event.preventDefault();
    }
  }

}
</script>

<style scoped>

</style>