<template>
  <div>
    <div class="title-container title-responsive">
      <h1>{{ getTranslation("views.admin.manage.title") }}</h1>
    </div>

    <div class="panel">
      <table>
        <thead>
        <tr>
          <td>Id</td>
          <td>Titre</td>
        </tr>
        </thead>
        <tbody>
        <tr v-bind:key="img.id" v-for="img in getImages">
          <td>{{img.id}}</td>
          <td>{{img.title}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {ADMIN_ADD_IMAGE_TO_LIST} from "../../store/mutations.type";

export default {
  name: "Manage",
  computed: {
    ...mapGetters(["getTranslation", "getImages"]),
  },
  mounted() {
    Promise.all([
      this.$store.dispatch(ADMIN_ADD_IMAGE_TO_LIST)
    ]).then(() => {
      this.pending = false;
    });
  }
}
</script>

<style scoped>

</style>