<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="nav-item">Accueil</li>
      <li class="nav-item">Photos</li>
      <li class="nav-item">Contact</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

@import url(https://fonts.googleapis.com/css?family=Karla);

:root {
  font-size: 16px;
  font-family: 'Karla', sans-serif;
  --bg-primary: blue;
}

.navbar {
  width: 100%;
  height: 100vh;
  position: fixed;
  background: var(--bg-primary);
}

.navbar-nav {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.navbar .nav-item {
  width: 100%;
}

.navbar .nav-item:last-child {
  margin-top: auto;
}
</style>