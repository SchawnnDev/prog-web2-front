<template>
  <header class="header">
    <nav class="navbar">
      <img src="../../assets/logo.png" alt="test logo" class="nav-logo"/>
      <ul class="nav">
        <li class="nav-item active"><a class="nav-link" href="home">Accueil</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Photos</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

@import url(https://fonts.googleapis.com/css?family=Karla);

.header {
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}

.navbar {
  background-color: var(--bg-primary);
  font-size: 18px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: minmax(0, 60px);
  align-items: center;
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

.nav-item a {
  transition: color 0.2s ease-out;
  -webkit-transition: color 0.2s ease-out;
}

.nav-item.active a {
  color: orange;
}

.nav-item a:hover {
  color: orangered;
}

.nav-link {
  color: white;
  text-decoration: none;
}


.nav-logo {
  width: auto;
  justify-self: start;
  margin-left: 20px;
  margin-right: 30px;
  padding: 10px;
}

</style>