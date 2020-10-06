<template>
  <div>
    <div class="title-container title-responsive">
      <h1>{{ getTranslation('views.home.title') }}</h1>
      <p>{{ getTranslation('views.home.sub-title') }}</p>
    </div>

    <div class="panel home-panel">

      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse accumsan est quis nulla semper
          elementum. Nam libero dolor, cursus ac congue eget, rutrum sit amet ante. Aliquam sit amet mi et
          diam
          fringilla pretium eget quis orci. Etiam metus odio, consectetur in justo eget, tempus posuere nunc.
          Nunc
          efficitur leo at tortor commodo luctus. Suspendisse a bibendum nibh, id placerat dolor. Pellentesque
          congue
          odio ex, tincidunt euismod erat scelerisque mattis. Proin aliquam eros et dolor hendrerit, nec
          ultricies nulla
          tempus. Fusce bibendum dui ut lorem lacinia, suscipit elementum leo ornare. Integer justo lorem,
          fermentum
          vitae tortor quis, molestie lobortis lorem. In mattis elementum rutrum. Vestibulum sed nunc vitae
          sem porta
          dapibus sit amet ac nisl. Integer vestibulum malesuada lacus, ut iaculis magna vestibulum vel. Duis
          auctor
          augue mattis, efficitur sem id, porttitor nunc. Nulla scelerisque sem non elit scelerisque finibus.
          Phasellus
          a diam in dui venenatis faucibus.</p>
      </div>

      <div class="founders">

        <div class="founder">
          <img class="founder-img" src="../assets/img/team/paul.jpg"/>
          <div class="founder-details">
            <h2>Paul</h2>
            <p>Président</p>
          </div>
        </div>

        <div class="founder">
          <img class="founder-img" src="../assets/img/team/louis.jpg"/>
          <div class="founder-details">
            <h2>Louis</h2>
            <p>Secrétaire</p>
          </div>
        </div>

        <div class="founder">
          <img class="founder-img" src="../assets/img/team/matthieu.jpg"/>
          <div class="founder-details">
            <h2>Matthieu</h2>
            <p>Trésorier</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'Home',
  components: {},
  computed: {
    ...mapGetters(["getTranslation"])
  }
}
</script>

<style scoped>

.founders {
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-column-gap: 10px;
}

.founders .founder {
  border: 3px solid dimgray;
  border-radius: 10px;
  padding: 5px;
  background-color: #eeeeee;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.founders .founder .founder-img {
  max-width: 80%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  border: 5px white solid;
}

.founders .founder .founder-details {
  text-align: center;
}

.founders .founder .founder-details h2 {
  font-size: 36px;
}

.founders .founder .founder-details p {
}

.panel.home-panel {
  margin-left: 20%;
  margin-right: 20%;
}

@media only screen and (max-width: 768px) {

  .founders {
    width: 100%;
  }

  .founders .founder .founder-details h2 {
    font-size: 16px;
  }

  .panel.home-panel {
    margin-left: 5%;
    margin-right: 5%;
  }
}

</style>
