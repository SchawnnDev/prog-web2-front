<template>
  <div class="pagination">
    <button id="previous" :disabled="imagesLoading || !imagesPagination || !imagesPagination.prev" class="submit-button button-sm"
            @click="previous">&larr;
    </button>
    <input :disabled="true" v-bind:value="imagesPagination ? imagesPagination.current + ' / ' + imagesPagination.total : 0"/>
    <button id="next" :disabled="imagesLoading || !imagesPagination || !imagesPagination.next" class="submit-button button-sm"
            @click="next">&rarr;
    </button>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import {IMAGES_LOAD} from "@/store/actions.type";

export default {
  name: "Pagination",
  computed: {
    ...mapGetters(['imagesPagination', 'imagesLoading'])
  },
  methods: {

    previous() {
      if (!this.imagesPagination.prev)
        return;
      this.$store.dispatch(IMAGES_LOAD, {per_page: 5, page: this.imagesPagination.current - 1, pagination: true})
    },

    next() {
      if (!this.imagesPagination.next)
        return;
      this.$store.dispatch(IMAGES_LOAD, {per_page: 5, page: this.imagesPagination.current + 1, pagination: true})
    }

  }
}
</script>

<style scoped>

.pagination button {
  width: 10vh;
  padding: 5px;
  border-radius: 0;
  border: 1px solid gray;
  font-weight: bold;
}

.pagination input {
  width: 10vh;
  color: white;
  background-color: orange;
  padding: 5px;
  border: 1px solid gray;
  text-align: center;
  font-weight: bolder;
}

</style>