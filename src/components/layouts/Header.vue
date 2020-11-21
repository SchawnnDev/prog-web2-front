<template>
  <header>
    <nav class="navbar">
      <router-link class="nav-logo" to="/">
        <img alt="test logo" src="../../assets/logo.png"/>
      </router-link>
      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">{{ getTranslation("header.nav.pages.home") }}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/images">{{ getTranslation("header.nav.pages.images") }}</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">{{ getTranslation("header.nav.pages.contact") }}</router-link>
        </li>
      </ul>
      <div id="mobile-menu" class="mobile-menu-toggle" v-on:click="switchMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["getTranslation"])
  },
  data: function () {
    return {
      menuOpened: false
    }
  },
  methods: {
    switchMenu: function () {
      document.getElementsByClassName("nav")[0].classList.toggle("mobile-nav");
      document.getElementById("mobile-menu").classList.toggle("is-active");
      this.menuOpened = !this.menuOpened;
    }
  },
  watch: {
    $route: function () {
      if (!this.menuOpened)
        return;
      this.switchMenu();
    }
  }
}
</script>

<style scoped>

@import url(https://fonts.googleapis.com/css?family=Karla);

header {
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1;
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
  display: flex;
  flex-direction: row;
  column-gap: 20px;
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

/* Onglet actif vuejs */
.nav-link.router-link-exact-active {
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
  margin-left: 10px;
}

.nav-logo img {
  height: 50px;
}

.mobile-menu-toggle .bar {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.mobile-menu-toggle {
  justify-self: end;
  margin-right: 20px;
}

.mobile-menu-toggle:hover {
  cursor: pointer;
}

/** ANIMATION MENU **/

#mobile-menu.is-active .bar:nth-child(2) {
  opacity: 0;
}

#mobile-menu.is-active .bar:nth-child(1) {
  -webkit-transform: translateY(8px) rotate(45deg);
  -ms-transform: translateY(8px) rotate(45deg);
  -o-transform: translateY(8px) rotate(45deg);
  transform: translateY(8px) rotate(45deg);
}

#mobile-menu.is-active .bar:nth-child(3) {
  -webkit-transform: translateY(-8px) rotate(-45deg);
  -ms-transform: translateY(-8px) rotate(-45deg);
  -o-transform: translateY(-8px) rotate(-45deg);
  transform: translateY(-8px) rotate(-45deg);
}

@media only screen and (max-width: 768px) {
  .navbar ul {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 60px;
    background-color: var(--bg-primary);
    width: 100%;
    transform: translate(-101%);
    text-align: center;
    overflow: hidden;

    border: 2px #eee solid;
    padding: 20px;

    transition: transform 0.3s ease-in-out;
  }

  .navbar li {
    padding: 15px;
    border: 1px #eee solid; /* Avec ou sans? */
  }

  .navbar li a {
    font-size: 28px;
  }

  .mobile-menu-toggle, .bar {
    display: block;
    cursor: pointer;
  }

  .mobile-nav {
    transform: translate(0%) !important;
  }
}

</style>