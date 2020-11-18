<template>
  <div>
    <div class="title-container title-responsive">
      <h1>{{ getTranslation("views.admin.manage.title") }}</h1>
    </div>

    <div class="panel">

      <transition name="fade">
        <div class="alert" v-bind:class="{'danger' : !imagesSuccess }"
             v-if="imagesMessage !== '' && !(imagesMessage === null || imagesLoading)">
          {{ imagesMessage }}
          <span class="close" @click="removeMessage">&times;</span>
        </div>
      </transition>

      <beat-loader :loading="imagesLoading" :color="'orange'"></beat-loader>

      <button @click="displayBox({id: ''})" class="submit-button button-sm">
        {{ getTranslation('views.admin.manage.buttons.add') }}
      </button>

      <table class="images-list">
        <thead>
        <tr>
          <td>Titre</td>
          <td>Image</td>
          <td>Actions</td>
        </tr>
        </thead>
        <tbody>
        <tr v-bind:key="img.id" v-for="img in getImages">
          <td>{{ img.title }}</td>
          <td><img style="height: 128px" v-bind:src="img.url" alt=""/></td>
          <td>
            <div class="btn-group">
              <button @click="displayBox(img)" class="submit-button button-sm">
                {{ getTranslation('views.images.buttons.edit') }}
              </button>
              <button @click="deleteImage(img.id)" class="submit-button button-sm">
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

export default {
  name: "Manage",
  components: {
    ImageEdit,
    BeatLoader,
  },
  computed: {
    ...mapGetters(["getTranslation", "getImages", "imagesLoading", "imagesMessage", "imagesSuccess"]),
  },
  mounted() {
    this.$store.dispatch(IMAGES_LOAD, {per_page: 15})
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
    }

  }
}
</script>

<style scoped>
.images-list {
  border-collapse: collapse;
  width: 100%;
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

</style>