<template>
  <div class="panel images-panel">

    <div v-if="!imagesLoading && imagesCount == 0" class="error-container">
      <div class="sad-smiley"></div>
      <h3>{{ getTranslation("views.images.errors.no-images") }}</h3>
    </div>

    <div class="images-container">
      <image-item v-for="(image, index) in getImages" :key="image.title + index" :image="image"></image-item>
    </div>

    <beat-loader :color="'orange'" :loading="imagesLoading"></beat-loader>

    <button :disabled="imagesLoading" class="submit-button button-sm" v-on:click="loadImages(false)">
      {{ getTranslation("views.images.buttons.load") }}
    </button>

  </div>
</template>

<script>
import ImageItem from "./ImageItem";
import {mapGetters} from "vuex";
import {IMAGES_LOAD} from "@/store/actions.type";
import BeatLoader from "vue-spinner/src/BeatLoader"

export default {
  name: "ImagesContainer",
  components: {ImageItem, BeatLoader},
  props: {
    per_page: {
      type: Number,
      required: false,
      default: 2
    }
  },
  computed: {
    ...mapGetters(["getTranslation", "imagesCount", "getImages", "imagesLoading"])
  },
  mounted() {
    this.loadImages(true)
  },
  methods: {
    loadImages(init = false) {

      if (init && this.imagesCount != 0)
        return;

      this.$store.dispatch(IMAGES_LOAD, {per_page: this.per_page});
    }
  }
}
</script>


<style scoped>
.images-container {
  display: flex;
  -webkit-display: box;
  -moz-display: box;
  -ms-display: flexbox;
  -webkit-display: flex;
  justify-content: center;

  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  padding: 0;
  margin: 0;
}

.panel.images-panel {
  row-gap: 5px;
}

.error-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  margin-top: 30px;
  border: 3px solid gray;
  border-radius: 10px;
  padding: 10px;
}

</style>