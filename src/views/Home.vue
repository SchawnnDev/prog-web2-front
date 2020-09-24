<template>
  <div>

    <section class="article-header">
      <h1>Bienvenue sur le site de l'association</h1>
      <p> des étudiants de médecine de la faculté de Strasbourg</p>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {}
}
</script>

<style scoped>
.article-header {
  width: 100%;
  min-height: 300px;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7));
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
}

.article-header h1, p {
  color: white;
  text-align: center;
}

.article-header h1 {
  font-size: 36px;
}

.article-header p {
  font-size: 20px;
}

</style>
