<template>
  <div>

    <div class="title-container">
      <h1 class="title-responsive">Contact et informations</h1>
    </div>

    <div class="panel contact-panel">

      <div>
        <p>Notre association se trouve à l'adresse :</p>
        <p>5 rue des palmiers - 67000 Strasbourg</p>
        <br>
        <p>Notre email est: contact@aemfs.fr</p>
      </div>

      <hr class="separator"/>

      <form class="input-form">
        <div class="input-group">
          <label for="name">Prénom/Nom</label>
          <input id="name" type="text">
        </div>

        <div class="input-group">
          <label for="email">Email</label>
          <input id="email" type="email">
        </div>

        <div class="input-group">
          <label for="message">Message</label>
          <input id="message" type="text">
        </div>

        <input type="submit" class="submit-button button-sm">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

.panel.contact-panel {
  margin-left: 20%;
  margin-right: 20%;
}

</style>