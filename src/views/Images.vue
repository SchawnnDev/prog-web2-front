<template>
  <div>
    <div class="title-container title-responsive">
      <h1>Photos d'événements passés</h1>
    </div>

    <ImagesContainer></ImagesContainer>
  </div>
</template>

<script>
import ImagesContainer from "@/components/ImagesContainer";

export default {
  name: "Images",
  components: {ImagesContainer},
}
</script>

<style scoped>
</style>