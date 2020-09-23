<template>
  <nav class="navbar">
    <img src="https://trypyramid.com/img/pyramid-logo-white-horizontal.png" alt="test logo" class="nav-logo"/>
    <ul class="nav">
      <li class="nav-item"><a class="nav-link" href="#">Accueil</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Photos</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
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

.navbar {
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  background-color: var(--bg-primary);
  font-size: 18px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  height: 50px;
}

.nav {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  justify-self: end;
  margin-right: 5rem;
}

.nav-item {
  height: 100%;
}

.nav-link {
  color: whitesmoke;
  text-decoration: none;
}

.nav-item .active, a:hover {
  color: olive;
}

.nav-logo {
  height: 40px;
  width: auto;
  justify-self: start;
  margin-left: 20px;
}

</style>