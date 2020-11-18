<template>
  <transition name="fade">
    <div class="alert" v-bind:class="{'danger' : !type }" v-show="message !== '' && displayed">
      <component :is="messageComponent" :msg="{message: message}"/>
    </div>
  </transition>
</template>

<script>
export default {
  name: "FlashMessage",
  data() {
    return {
      timer: null,

      messageComponent: {
        template: '<p>{{msg.message}}</p>',

        props: {
          msg: Object
        },

        watch: {
          msg: {

            // eslint-disable-next-line no-unused-vars
            handler(val) {
              clearTimeout(this.timer);
              this.message = val.message;

              this.timer = setTimeout(() => {
                this.msg.message = '';
              }, this.timeout);

            },
            deep: true
          }
        }

      }

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
}
</script>

<style scoped>
</style>