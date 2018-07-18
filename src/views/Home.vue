<template>
<div class="main">
  <!--Start Content / Grid-->
  <div class="home">
    <button @click="goToCountry()" class="title-clickable">
      <h1>Länder</h1>
    </button>
<!-- Start Sidescroll -->
    <div class="slider">
      <div class="container-slider">
        <img class="square-element" src="../assets/img/france_02.jpg" @click="goToCountry()">
        <div class="square-element-box">
          <p class="title-box">Surfcamp</p>
        </div>
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/france_02.jpg" @click="goToCountry()">
        <div class="square-element-box">
          <p class="title-box">Surfcamp</p>
        </div>
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/france_02.jpg" @click="goToCountry()">
        <div class="square-element-box">
          <p class="title-box">Surfcamp</p>
        </div>
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/france_02.jpg" @click="goToCountry()">
        <div class="square-element-box">
          <p class="title-box">Surfcamp</p>
        </div>
      </div>
    </div>
<!-- End Sidescroll -->
    <button @click="goToFavorites()" class="title-clickable">
      <h1>Beliebteste</h1>
    </button>

    <div class="container">
      <img class="long-element" src="../assets/img/portugal_03.jpg">
      <div class="long-element-box">
        <p class="title-box">{{ camps[0].name }}</p>
          <!-- <div>
          <img class="like-front" src="../assets/img/like.png">
          <img class="like-front" src="../assets/img/like-active.png">
        </div> -->
      </div>
    </div>

    <div class="container">
      <img class="long-element" src="../assets/img/portugal_03.jpg">
      <div class="long-element-box">
        <p class="title-box">Surfcamp</p>
      </div>
    </div>

    <div class="container">
      <img class="long-element" src="../assets/img/portugal_03.jpg">
      <div class="long-element-box">
        <p class="title-box">Surfcamp</p>
      </div>
    </div>
    <div class="flex-main-button">
      <button class="main-button" @click="goToFavorites()">Beliebteste</button>
    </div>

    <button @click="goToKategorien()" class="title-clickable">
        <h1>Kategorien</h1>
      </button>

    <div class="slider">
      <div class="container-slider">
        <img class="square-element" src="../assets/img/france_02.jpg">
        <div class="square-element-box">
          <p class="title-box">Surfcamp</p>
        </div>
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/france_02.jpg">
        <div class="square-element-box">
          <p class="title-box">Surfcamp</p>
        </div>
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/france_02.jpg">
        <div class="square-element-box">
          <p class="title-box">Surfcamp</p>
        </div>
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/france_02.jpg">
        <div class="square-element-box">
          <p class="title-box">Surfcamp</p>
        </div>
      </div>
    </div>

    <!-- <button @click="goToKarte()" class="title-clickable">
        <h1>Karte</h1>
      </button>
    <div class="map-home">
    </div> -->
</div>
    <div class="footer">
      <button @click="goToUeber()" class="footerButton">
        <p class="footer-text">Mehr zum Projekt</p>
      </button>
    </div>

</div>
</template>

<script>
export default {

  data(){
    return {
      camps: null
    }
  },

  created() {
    this.requestData()
  },


  methods: {
    goToFavorites() {
      this.$router.push({
        name: 'favoriten'
      })
    },
    goToCountry() {
      this.$router.push({
        name: 'laender'
      })
    },
    goToKategorien() {
      this.$router.push({
        name: 'kategorien'
      })
    },
    goToKarte() {
      this.$router.push({
        name: 'karte'
      })
    },
    goToUeber() {
      this.$router.push({
        name: 'ueber'
      })
    },
    requestData()
    {
  // GET /someUrl
  this.$http.get('http://localhost:3000/camps').then(response => {

    // get body data
    this.camps = response.body;

    console.log(response.body)

  }, response => {
    // error callback
  });
}
  }
}
</script>

<style>
</style>
