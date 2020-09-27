<template>
  <div>

    <div class="title-container title-responsive">
      <h1>Bienvenue sur le site de l'association</h1>
      <p>des étudiants de médecine de la faculté de Strasbourg</p>
    </div>

    <div class="panel">

      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan est quis nulla semper
          elementum. Nam libero dolor, cursus ac congue eget, rutrum sit amet ante. Aliquam sit amet mi et diam
          fringilla pretium eget quis orci. Etiam metus odio, consectetur in justo eget, tempus posuere nunc. Nunc
          efficitur leo at tortor commodo luctus. Suspendisse a bibendum nibh, id placerat dolor. Pellentesque congue
          odio ex, tincidunt euismod erat scelerisque mattis. Proin aliquam eros et dolor hendrerit, nec ultricies nulla
          tempus. Fusce bibendum dui ut lorem lacinia, suscipit elementum leo ornare. Integer justo lorem, fermentum
          vitae tortor quis, molestie lobortis lorem. In mattis elementum rutrum. Vestibulum sed nunc vitae sem porta
          dapibus sit amet ac nisl. Integer vestibulum malesuada lacus, ut iaculis magna vestibulum vel. Duis auctor
          augue mattis, efficitur sem id, porttitor nunc. Nulla scelerisque sem non elit scelerisque finibus. Phasellus
          a diam in dui venenatis faucibus.</p>
      </div>

      <div class="founders">
        <div class="founder">
          <img class="founder-img" src="../assets/img/team/avatar_men.png"/>
          <span class="founder-name">Paul</span>
        </div>
        <div class="founder">
          <img class="founder-img" src="../assets/img/team/avatar_women.png"/>
          <span class="founder-name">Louis</span>
        </div>
        <div class="founder">
          <img class="founder-img" src="../assets/img/team/avatar_men.png"/>
          <span class="founder-name">Matthieu</span>
        </div>
      </div>

    </div>
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

.founders {
  width: 80%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  justify-content: center;
  padding: 10px;
}

.founders .founder {
  border: 3px solid dimgray;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 33%;
  padding: 5px;
  background-color: #eeeeee;
}

.founders .founder .founder-img {
  width: 100%;
  max-width: 256px;
  overflow: hidden;
  margin: 0 auto;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.founders .founder .founder-name {
  text-align: center;
  font-size: 36px;
}

@media only screen and (max-width: 768px) {
  .founders .founder .founder-name {
    font-size: 18px;
  }
}

</style>
