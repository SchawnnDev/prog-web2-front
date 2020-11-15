<template>
  <div v-if="imagesBoxDisplayed" style="display: block" class="box">
    <!-- Modal content -->
    <div class="box-content">
      <span class="close" @click="closeBox()">&times;</span>

      <form @submit.prevent="sendForm">

        <div class="input-group">
          <label for="title">{{ getTranslation('views.contact.form.email') }}</label>
          <input :disabled="imagesBoxSubmitting"
                 v-model="imagesBoxItem.title"
                 type="text"
                 id="title">
        </div>

        <div class="input-group">
          <label for="description">{{ getTranslation('views.contact.form.message') }}</label>
          <textarea :disabled="imagesBoxSubmitting"
                    v-model="imagesBoxItem.description"
                    cols="30"
                    id="description"
                    required
                    rows="5"
          />
        </div>

        <button :disabled="imagesBoxSubmitting" class="submit-button button-sm">
          {{ getTranslation('views.contact.buttons.send') }}
        </button>
      </form>

    </div>

  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {IMAGES_CLOSE_EDIT_BOX} from "@/store/mutations.type";

export default {
  name: "ImageEdit",
  computed: {
    ...mapGetters(["getTranslation", "imagesBoxItem", "imagesBoxDisplayed", "imagesBoxSubmitting"])
  },
  methods: {
    closeBox() {
      this.$store.commit(IMAGES_CLOSE_EDIT_BOX);
    },

    sendForm() {

    }
  }
}
</script>

<style scoped>
/* The Modal (background) */
.box {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.box-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>