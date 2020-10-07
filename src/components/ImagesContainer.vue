<template>
  <div class="panel images-panel">

    <div class="error-container" v-if="!pending && (!Array.isArray(this.images) || !this.images.length)">
      <div class="sad-smiley"></div>
      <h3>{{ getTranslation("views.images.errors.no-images") }}</h3>
    </div>

    <div class="images-container">
      <ImageItem v-for="(image, index) in images" :image="image" :key="image.title + index"></ImageItem>
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

export default {
  name: "ImagesContainer",
  components: {ImageItem},
  data: function () {
    return {
      images: [],
      pending: false,
      page: 1
    }
  },
  computed: {
    ...mapGetters(["getTranslation"])
  },
  mounted() {
    this.loadImages()
  },
  methods: {
    loadImages() {
      this.pending = true;

      this.$axios.get("api/images", {params: {page: this.page}})
          .then(response => {
            let data = response.data.data;

            /**
             * S'il y'a encore des données dans la page, on compare et on récupère
             */
            for (let img of data) {

              let found = false;

              for (let value of this.images) {
                if(value.id != img.id)
                  continue;

                found = true;
                break;
              }

              if(found)
                continue;

              this.images.push(img);

            }

            /**
             * Si l'on récupère 4 images, alors on peut changer de page.
             */

            if (data.length == 4)
              this.page++;

          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
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