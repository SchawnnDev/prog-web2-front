<template>
  <div class="image-item">
    <img v-bind:src="this.image.url"/>
    <div class="image-text">
      <h3>{{ this.image.title }}</h3>
      <p>{{ this.image.description }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: "ImageItem",
  props: {
    image: {}
  },
}
</script>

<style scoped>
.image-item {
  flex: 0 0 25%;
  border: 4px solid darkgray;
  max-width: 100vh;
  overflow: hidden;
}

.image-item img {
  width: 100%;
  height: auto;
}

.image-item .image-text h3, p {
  text-align: center;
}

@media only screen and (max-width: 768px) {
  .image-item {
    flex: 0 0 50%;
  }
}
</style>