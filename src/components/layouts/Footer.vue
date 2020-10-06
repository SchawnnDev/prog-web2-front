<template>
  <footer>
    <p>2020 - AEMFS</p>

    <select class="select-lang" @change="changeLanguage($event)">
      <option v-bind:key="lang" v-for="lang in this.getLanguages" :value="lang" :selected="lang === getLanguageCode">
        {{ getTranslationByCode("name", null, lang) }}
      </option>
    </select>

  </footer>
</template>

<script>
import {mapGetters} from "vuex";
import {LANG_CHANGE} from "@/store/mutations.type";

export default {
  name: "Footer",
  computed: {
    ...mapGetters(["getLanguageCode", "getLanguages", "getTranslationByCode"])
  },
  methods: {
    changeLanguage(event) {
      let selectedLang = event.target.value;
      if (!selectedLang) return;
      this.$store.commit(LANG_CHANGE, selectedLang);
    }
  }
}
</script>

<style scoped>

footer {
  height: 50px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  width: 100%;
  margin-top: auto;
}

footer p {
  padding: 10px;
  color: black;
  text-align: center;
  justify-self: center;
}

footer .select-lang {
  padding: 5px;
  position: absolute;
  right: 10px;
}

footer .select-lang select {
}

</style>