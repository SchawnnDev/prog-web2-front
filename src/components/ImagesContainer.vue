<template>
  <div class="panel images-panel">


    <div class="loader" v-if="pending">Loading...</div>

    <div class="error-container" v-if="!pending && (!Array.isArray(this.images) || !this.images.length)">
      <div class="sad-smiley"></div>
      <h3>Il n'y a pas d'images disponibles.</h3>
    </div>

    <div class="images-container" v-else-if="!pending">
      <ImageItem v-for="(image, index) in images" :image="image" :key="image.title + index"></ImageItem>
    </div>

    <button class="submit-button button-sm" :disabled="pending">Charger plus...</button>

  </div>
</template>

<script>
import ImageItem from "@/components/ImageItem";
import axios from "axios";

export default {
  name: "ImagesContainer",
  components: {ImageItem},
  data: function () {
    return {
      images: [],
      pending: false
    }
  },
  mounted() {
    this.pending = true;

    axios.get("https://progweb2.free.beeceptor.com/images")
        .then(response => {
          console.log(response);
          this.images = response.data.data;
        })
        .catch(error => {
          alert(error);
        })
        .finally(() => {
          this.pending = false;
        });

  }
}
</script>


<style scoped>
.images-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  column-gap: 10px;
  row-gap: 10px;
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