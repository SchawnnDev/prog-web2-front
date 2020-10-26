<template>
  <div>

    <div class="title-container title-responsive">
      <h1>{{ getTranslation("views.contact.title") }}</h1>
    </div>

    <div class="panel contact-panel">

      <div class="address">
        <pre v-html="getTranslation('views.contact.description', { 'email' : '<a target=\'_blank\' href=\'mailto:contact@aemfs.fr\'>contact@aemfs.fr</a>'})"></pre>


          <iframe @load="disableLoading" v-show="!this.frameLoading"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.481663368214!2d7.75140271554455!3d48.58147567926133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c8547da9e703%3A0x8fa567c3f73565dd!2s2%20Rue%20des%20%C3%89crivains%2C%2067000%20Strasbourg!5e0!3m2!1sfr!2sfr!4v1602833344352!5m2!1sfr!2sfr"
                  width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
                  tabindex="0"></iframe>

          <div v-show="this.frameLoading" class="loader">
            <beat-loader :loading="this.frameLoading" :color="'orange'" class="images-panel loader"></beat-loader>
          </div>

      </div>

      <hr class="separator"/>

      <form class="input-form">
        <div class="input-group">
          <label for="name">{{ getTranslation("views.contact.form.names") }}</label>
          <input id="name" required type="text">
        </div>

        <div class="input-group">
          <label for="email">{{ getTranslation("views.contact.form.email") }}</label>
          <input id="email" required type="email">
        </div>

        <div class="input-group">
          <label for="message">{{ getTranslation("views.contact.form.message") }}</label>
          <textarea cols="30" id="message" required rows="5"/>
        </div>

        <input class="submit-button button-sm" type="submit" :value="getTranslation('views.contact.buttons.send')">
      </form>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import BeatLoader from "vue-spinner/src/BeatLoader"

export default {
  name: "Contact",
  components: {
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
  width:400px;
  height:300px;
}

</style>