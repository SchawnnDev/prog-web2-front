<template>
  <div>
    <div class="title-container title-responsive">
      <h1>{{ getTranslation("views.admin.manage.title") }}</h1>
    </div>

    <div class="panel">

      <beat-loader :loading="this.isLoading" :color="'orange'"></beat-loader>

      <table class="images-list">
        <thead>
        <tr>
          <td>Id</td>
          <td>Titre</td>
          <td>Image</td>
          <td>Actions</td>
        </tr>
        </thead>
        <tbody>
        <tr v-bind:key="img.id" v-for="img in getImages">
          <td>{{ img.id }}</td>
          <td>{{ img.title }}</td>
          <td><img style="height: 128px" v-bind:src="img.url"/></td>
          <td>
            <a href="#" class="submit-button button-sm">Editer</a>
            <a href="#" class="submit-button button-sm">Supprimer</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {IMAGES_LOAD} from "@/store/actions.type";
//import {ADMIN_ADD_IMAGE_TO_LIST} from "../../store/mutations.type";

export default {
  name: "Manage",
  computed: {
    ...mapGetters(["getTranslation", "getImages"]),
  },
  mounted() {
    this.$store.dispatch(IMAGES_LOAD, {per_page: 15})
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

</style>