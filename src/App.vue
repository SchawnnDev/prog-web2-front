<template>
  <div id="app">
    <Header/>
    <main>
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<style>

:root {
  font-size: 16px;
  font-family: 'Karla', sans-serif;
  --bg-primary: #396D8F;
  --text-primary: #42B4FF;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display:flex;
  flex-direction:column;
  height:100vh;
  margin:0;
}

.input-group input[type=text], textarea, input[type=email] {
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #eee;
}

.input-group input, textarea, label {
  display: block;
  width: 100%;
}

.input-group textarea {
  resize: vertical;
}

.submit-button {
  appearance: none;
  -webkit-appearance: none;

  padding: 10px;
  border-radius: 5px;
  width: 100%;

  border: none;
  background-color: orange;
  color: #fff;
}

.submit-button.button-sm {
  width: 20vh;
}

.title-container {
  width: 100%;
  min-height: 200px;
  background: url("assets/img/background/1.jpg"); /*linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6));*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
}

.title-container h1 {
  font-size: 36px;
  color: white;
  text-align: center;
}

.title-container p {
  color: white;
  text-align: center;
  font-size: 20px;
}

.panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.panel .input-form {
  width: 80%;
}

hr.separator {
  border-top: 2px solid lightgray;
  border-bottom: 2px solid lightgray;
  border-left:0;
  border-right: 0;
  width: 100%;
  height: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.title-container h1.title-responsive {
  font-size: 50px;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .title-container h1.title-responsive {
    font-size: 28px;
  }
}

</style>
<script>
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default {
  components: {Footer, Header}
}
</script>