<template>
<div class="not-found">
  <h1>Cette page n'existe pas.</h1>
  <div class="sad-smiley"></div>
</div>
</template>

<script>
export default {
name: "UnkownRoute"
}
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
  height: 30vh;
}
</style>