<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style>

:root {
  font-size: 16px;
  font-family: 'Karla', sans-serif;
  --bg-primary: #396D8F;
  --text-primary:#42B4FF;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
<script>
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default {
  components: {Footer, Header}
}
</script>