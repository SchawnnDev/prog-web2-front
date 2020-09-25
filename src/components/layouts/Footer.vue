<template>
  <footer>
    <p>2020 - AEMFS</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
  min-height: 50px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  bottom: 0;
  position: absolute;
  width: 100%;
}

footer p {
  color: black;
}
</style>