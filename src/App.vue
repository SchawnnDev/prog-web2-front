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
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
}

.progress {
  cursor: progress;
}

.input-group input[type=text], textarea, input[type=email], input[type=file] {
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
  cursor: pointer;
  text-decoration-line: none;
}

.submit-button:disabled {
  background-color: #cccccc;
  color: #666666;
  cursor: default;
}

.submit-button:hover {
  background: orangered;
  transition: background-color 0.2s ease-out;
  -webkit-transition: background-color 0.2s ease-out;
}

.submit-button.button-sm {
  width: 20vh;
}

.submit-button.button-delete {
  background-color: indianred;
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
  row-gap: 20px;
  align-items: center;
  padding: 20px;
  margin-left: 20%;
  margin-right: 20%;
}

.panel .input-form {
  width: 80%;
}

hr.separator {
  border-top: 2px solid lightgray;
  border-bottom: 2px solid lightgray;
  border-left: 0;
  border-right: 0;
  width: 100%;
  height: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.title-container.title-responsive h1 {
  font-size: 46px;
}

.title-container.title-responsive p {
  font-size: 26px;
}

@media only screen and (max-width: 790px) {
  .title-container.title-responsive h1 {
    font-size: 30px;
  }

  .title-container.title-responsive p {
    font-size: 18px;
  }

  .title-container {
    min-height: 150px;
  }

  .panel {
    margin-left: 5%;
    margin-right: 5%;
  }

}

@media only screen and (max-width: 525px) {
  .title-container.title-responsive h1 {
    font-size: 18px;
  }

  .title-container.title-responsive p {
    font-size: 12px;
  }

}

</style>
<script>
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import {I18N_INIT} from "@/store/actions.type";

export default {
  components: {Footer, Header},
  mounted() {
    Promise.all([
      this.$store.dispatch(I18N_INIT),
    ]).then(() => {
      console.log("Loaded translations");
    })
  }
}
</script>