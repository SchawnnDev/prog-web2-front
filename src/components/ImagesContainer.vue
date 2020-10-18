<template>
  <div class="panel images-panel">

    <div class="error-container" v-if="!this.isLoading && getImagesCount == 0">
      <div class="sad-smiley"></div>
      <h3>{{ getTranslation("views.images.errors.no-images") }}</h3>
    </div>

    <div class="images-container">
      <ImageItem v-for="(image, index) in getImages" :image="image" :key="image.title + index"></ImageItem>
    </div>

    <beat-loader :loading="this.isLoading" :color="'orange'" class="images-panel loader"></beat-loader>

    <button class="submit-button button-sm" :disabled="this.isLoading" v-on:click="loadImages(false)">
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
    ...mapGetters(["getTranslation", "getImagesCount", "getImages", "isLoading"])
  },
  mounted() {
    this.loadImages(true)
  },
  methods: {
    loadImages(init = false) {

      if (init && this.getImagesCount != 0)
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

.error-container .sad-smiley {
  background-image: url('../assets/svg/sad_smiley_face.svg');
  width: 64px;
  height: 64px;
}

</style>