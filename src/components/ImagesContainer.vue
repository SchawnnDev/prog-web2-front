<template>
  <div class="panel images-panel">

    <div class="error-container" v-if="!pending && (!Array.isArray(this.images) || !this.images.length)">
      <div class="sad-smiley"></div>
      <h3>{{getTranslation("views.images.errors.no-images")}}</h3>
    </div>

    <div class="images-container">
        <ImageItem v-for="(image, index) in images" :image="image" :key="image.title + index"></ImageItem>
    </div>

    <div class="loader" v-if="pending">Loading...</div>

    <button class="submit-button button-sm" :disabled="pending" v-on:click="loadMore">{{getTranslation("views.images.buttons.load")}}</button>

  </div>
</template>

<script>
import ImageItem from "@/components/ImageItem";
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  name: "ImagesContainer",
  components: {ImageItem},
  data: function () {
    return {
      images: [],
      pending: false
    }
  },
  computed: {
    ...mapGetters(["getTranslation"])
  },
  mounted() {
    this.pending = true;

    axios.get("https://progweb2.free.beeceptor.com/images")
        .then(response => {
          this.images = response.data.data;
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          this.pending = false;
        });
  },
  methods: {
    loadMore() {
      this.pending = true;
      document.body.classList.add("progress");

      axios.get("https://progweb2.free.beeceptor.com/images")
          .then(response => {
            this.images = this.images.concat(response.data.data);
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            this.pending = false;
            document.body.classList.remove("progress");
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