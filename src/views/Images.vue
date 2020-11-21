<template>
  <div>
    <div class="title-container title-responsive">
      <h1>{{ getTranslation("views.images.title") }}</h1>
    </div>

    <images-container :per-page="2"></images-container>
  </div>
</template>

<script>
import ImagesContainer from "@/components/ImagesContainer";
import {mapGetters} from "vuex";

export default {
  name: "Images",
  components: {ImagesContainer},
  computed: {
    ...mapGetters(["getTranslation"])
  }
}
</script>

<style scoped>
</style>