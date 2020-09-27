<template>
  <div>

    <div class="title-container title-responsive">
      <h1>Contact et informations</h1>
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
          <input id="name" type="text" required>
        </div>

        <div class="input-group">
          <label for="email">Email</label>
          <input id="email" type="email" required>
        </div>

        <div class="input-group">
          <label for="message">Message</label>
          <textarea id="message" cols="30" rows="5" required/>
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

@media only screen and (max-width: 768px) {
  .panel.contact-panel {
    margin-left: 5%;
    margin-right: 5%;
  }
}

</style>