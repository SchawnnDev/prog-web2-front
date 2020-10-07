<template>
  <div class="panel images-panel">

    <div class="error-container" v-if="!pending && getImagesCount == 0">
      <div class="sad-smiley"></div>
      <h3>{{ getTranslation("views.images.errors.no-images") }}</h3>
    </div>

    <div class="images-container">
      <ImageItem v-for="(image, index) in getImages" :image="image" :key="image.title + index"></ImageItem>
    </div>

    <div class="loader" v-if="pending">Loading...</div>

    <button class="submit-button button-sm" :disabled="pending" v-on:click="loadImages">
      {{ getTranslation("views.images.buttons.load") }}
    </button>

  </div>
</template>

<script>
import ImageItem from "@/components/ImageItem";
import {mapGetters} from "vuex";
import {IMAGES_LOAD} from "@/store/actions.type";

export default {
  name: "ImagesContainer",
  components: {ImageItem},
  data: function () {
    return {
      pending: false
    }
  },
  computed: {
    ...mapGetters(["getTranslation", "getImagesCount", "getImages"])
  },
  mounted() {
    this.loadImages()
  },
  methods: {
    loadImages() {
      this.pending = true;
      Promise.all([
        this.$store.dispatch(IMAGES_LOAD),
      ]).then(() => {
        this.pending = false;
      });
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

/*
.images-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 10px;
  row-gap: 10px;
}
*/
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