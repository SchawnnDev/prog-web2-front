<template>
  <div class="alert" v-bind:class="{'danger' : !type }" v-show="displayMessage !== null && displayed">{{ displayMessage }}</div>
</template>

<script>
export default {
  name: "FlashMessage",
  data() {
    return {
      timer: null,
      displayMessage: null,
    }
  },
  props: {
    message: String,

    type: {
      type: Boolean,
      default: true // true -> success & false -> danger
    },

    timeout: {
      type: Number,
      default: 5000
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
        }, this.timeout);

      },
    }
  }
}
</script>

<style scoped>

.alert {
  padding: 15px;
  border: 1px solid #c3e6cb;
  border-radius: 5px;
  margin-bottom: 10px;
  color: #155724;
  background-color: #d4edda;
  width: 100%;
}

.alert li {
  text-decoration: none;
}

.alert.danger {
  border: 1px #f5c6cb solid;
  color: #721c24;
  background-color: #f8d7da;
}
</style>