<template>
  <footer>
    <p>2020 - AEMFS</p>

    <select class="select-lang">
      <option :value="lang" :key="lang" v-for="lang in this.getLanguages" @select="changeLanguage">
        {{ lang }}
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
    ...mapGetters(["getLanguages"])
  },
  methods: {
    changeLanguage(code) {
      this.$store.commit(LANG_CHANGE, code);
    }
  }
}
</script>

<style scoped>
footer {
  min-height: 50px;
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
  padding: 10px;
  width: auto;
  position: absolute;
  display: flex;
  right: 10px;
}
</style>