<template>
  <div>

    <div class="title-container title-responsive">
      <h1>{{ getTranslation("views.contact.title") }}</h1>
    </div>

    <div class="panel contact-panel">

      <div class="address">
        <pre
            v-html="getTranslation('views.contact.description', { 'email' : '<a target=\'_blank\' href=\'mailto:contact@aemfs.fr\'>contact@aemfs.fr</a>'})"></pre>

        <iframe v-show="!frameLoading" allowfullscreen=""
                aria-hidden="false"
                frameborder="0" height="300" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.481663368214!2d7.75140271554455!3d48.58147567926133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c8547da9e703%3A0x8fa567c3f73565dd!2s2%20Rue%20des%20%C3%89crivains%2C%2067000%20Strasbourg!5e0!3m2!1sfr!2sfr!4v1602833344352!5m2!1sfr!2sfr" style="border:0;" tabindex="0" width="400"
                @load="disableLoading"></iframe>

        <div v-show="frameLoading" class="loader">
          <beat-loader :color="'orange'" :loading="frameLoading" class="images-panel loader"></beat-loader>
        </div>

      </div>

      <hr class="separator"/>

      <contact-form ref="contactFormComponent"/>

    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import BeatLoader from "vue-spinner/src/BeatLoader"
import ContactForm from "@/components/ContactForm";

export default {
  name: "Contact",

  components: {
    ContactForm,
    BeatLoader
  },

  computed: {
    ...mapGetters(["getTranslation"])
  },

  data() {
    return {
      frameLoading: true
    }
  },

  methods: {

    disableLoading() {
      this.frameLoading = false;
    }

  },

  // eslint-disable-next-line no-unused-vars
  beforeRouteLeave(to, from, next) {
    this.$refs.contactFormComponent.exitPage();
    next(true)
  }

}
</script>

<style scoped>

pre {
  font-family: inherit;
  text-align: center;
}

.contact-panel .address {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
  row-gap: 20px;
  flex-flow: row wrap;
  justify-content: center;
}

.contact-panel .loader {
  align-items: center;
  justify-content: center;
  display: flex;
  width: 400px;
  height: 300px;
}

</style>