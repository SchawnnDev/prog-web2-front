<template>
  <div class="cards">
    <div class="card-item">
      <div class="card-image" v-bind:style="{'background-image' : 'url(' + this.image.url + ')'}">
      </div>
      <div class="card-info">
        <h2 class="card-title">{{ this.image.title }}</h2>
        <p class="card-intro">{{ this.image.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ImageItem",
  props: {
    image: {}
  },
}
</script>

<style scoped>
.image-item img {
  width: 100%;
  height: auto;
}

.image-item .image-text h3, p {
  text-align: center;
}

.cards {
  display: flex;
  padding: 1rem;
  flex: 1 0 calc(25% - 10px);
}

@media only screen and (max-width: 768px) {
  .image-item {
    flex: 0 0 50%;
  }

  .cards {
    flex: 1 0 calc(50% - 10px);
  }

  .cards {
    flex: 1 0 calc(33.333% - 10px);
  }
}

.cards .card-item {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  border-radius: 6px;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  transition: transform 0.5s;
  -webkit-transition: transform 0.5s;
}

.cards .card-item:hover {
  cursor: pointer;
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}

.cards .card-item:hover .card-image {
  opacity: 1;
}

.cards .card-info {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
  line-height: 1.5em;
}

.cards .card-title {
  font-size: 25px;
  line-height: 1.1em;
  color: #32325d;
  margin-bottom: 0.2em;
}

.cards .card-image {
  height: 250px;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 6px 6px 0px 0px;
  opacity: 0.90;
}

</style>