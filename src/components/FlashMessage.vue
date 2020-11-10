<template>
  <div class="alert" v-bind:class="type" v-show="displayMessage !== null && displayed">{{ displayMessage }}</div>
</template>

<script>
export default {
  name: "FlashMessage",
  data() {
    return {
      timer: null,
      displayMessage: "",
    }
  },
  props: {
    message: String,

    type: String,

    timeout: {
      type: Number,
      default: 1000
    },

    displayed: {
      type: Boolean,
      default: false
    }
  },

  watch: {
    message: {
      deep: true,
      handler(val) {
        clearTimeout(this.timer);
        this.displayMessage = val;

        this.timer = setTimeout(() => {
          this.displayMessage = null;
          console.log("bla");
        }, this.timeout);

      },
    }
  }
}
</script>

<style scoped>

</style>