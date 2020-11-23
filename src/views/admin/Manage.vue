<template>
  <div>
    <div class="title-container title-responsive">
      <h1>{{ getTranslation("views.admin.manage.title") }}</h1>
    </div>

    <div class="panel">

      <transition name="fade">
        <div v-if="imagesMessage !== '' && !(imagesMessage === null || imagesLoading)" class="alert"
             v-bind:class="{'danger' : !imagesSuccess }">
          {{ imagesMessage }}
          <span class="close" @click="removeMessage">&times;</span>
        </div>
      </transition>

      <beat-loader :color="'orange'" :loading="imagesLoading"></beat-loader>

      <button class="submit-button button-sm" @click="displayBox({id: ''})">
        {{ getTranslation('views.admin.manage.buttons.add') }}
      </button>

      <pagination/>

      <table class="images-list">
        <thead>
        <tr>
          <td>Titre</td>
          <td>Image</td>
          <td>Actions</td>
        </tr>
        </thead>
        <tbody>
        <tr v-for="img in getImages" v-bind:key="img.id">
          <td>{{ img.title }}</td>
          <td><img alt="" style="height: 128px" v-bind:src="img.url"/></td>
          <td>
            <div class="btn-group">
              <button class="submit-button button-sm" @click="displayBox(cloneImage(img))">
                {{ getTranslation('views.images.buttons.edit') }}
              </button>
              <button class="submit-button button-sm" @click="deleteImage(img.id)">
                {{ getTranslation('views.admin.manage.buttons.delete') }}
              </button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>

      <image-edit/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {IMAGES_DELETE, IMAGES_LOAD} from "@/store/actions.type";
import BeatLoader from "vue-spinner/src/BeatLoader"
import ImageEdit from "@/components/ImageEdit";
import {IMAGES_CLOSE_MESSAGE, IMAGES_OPEN_EDIT_BOX} from "@/store/mutations.type";
import Pagination from "@/components/Pagination";

export default {
  name: "Manage",
  components: {
    Pagination,
    ImageEdit,
    BeatLoader,
  },
  computed: {
    ...mapGetters(["getTranslation", "getImages", "imagesLoading", "imagesMessage", "imagesSuccess"]),
  },
  mounted() {
    this.$store.dispatch(IMAGES_LOAD, {per_page: 5})
  },

  methods: {

    deleteImage(id) {
      if (!confirm(this.getTranslation("views.admin.manage.messages.delete-image"))) return;
      this.$store.dispatch(IMAGES_DELETE, {id: id})
    },

    displayBox(img) {
      this.$store.commit(IMAGES_OPEN_EDIT_BOX, img);
    },

    removeMessage() {
      this.$store.commit(IMAGES_CLOSE_MESSAGE);
    },

    cloneImage(img) {
      // on clone
      return {
        id: img.id,
        title: img.title,
        description: img.description,
        url: img.url
      }
    },
  }
}
</script>

<style scoped>
.images-list {
  border-collapse: collapse;
  width: 100%;
  overflow-x:auto;
}

.images-list th, td {
  border-bottom: 1px solid #ddd;
  padding: 8px;
}

.images-list tr:nth-child(even) {
  background-color: #f2f2f2;
}

.btn-group {
  display: flex;
  justify-content: space-evenly;
}

@media only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

  .images-list table, thead, tbody, th, td, tr {
    display: block;
  }

  .images-list thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }

  .images-list tr {
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 5px;
  }

  .images-list td {
    border: none;
    border-bottom: 1px solid #aaaaaa;
    position: relative;
    padding-left: 40%;
  }

  .images-list img {
    overflow: hidden;
  }

  .images-list td:before {
    position: absolute;
    top: 6px;
    left: 6px;
    width: 20%;
    padding-right: 10px;
    white-space: nowrap;
  }

  .images-list td:nth-of-type(1):before { content: "Titre"; }
  .images-list td:nth-of-type(2):before { content: "Images"; }
  .images-list td:nth-of-type(3):before { content: "Actions"; }
}

</style>