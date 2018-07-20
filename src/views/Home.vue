<template>
<div class="main">
  <!--Start Content / Grid-->
  <div class="home">
    <button @click="goToCountry()" class="title-clickable">
      <h1>Länder</h1>
    </button>
<!-- Start Sidescroll -->
    <div class="slider">
      <div class="container-slider" @click="goToList()">
        <img class="square-element" src="../assets/img/pinsec02.jpg">
        <div class="square-element-box">
          <p class="title-box">{{ countries[0] }}</p>
        </div>
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/zarautz04.jpg" @click="goToCountry()">
        <div class="square-element-box">
          <p class="title-box">{{ countries[1] }}</p>
        </div>
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/portugal01.jpg" @click="goToCountry()">
        <div class="square-element-box">
          <p class="title-box">{{ countries[2] }}</p>
        </div>
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/iceland01.jpg" @click="goToCountry()">
        <div class="square-element-box">
          <p class="title-box">{{ countries[3] }}</p>
        </div>
      </div>
    </div>
<!-- End Sidescroll -->
    <button @click="goToFavorites()" class="title-clickable">
      <h1>Beliebteste</h1>
    </button>

    <!-- start favorites -->

    <div class="container">
      <img class="long-element" src="../assets/img/pinsec06.jpg">
      <div class="long-element-box">
        <p class="title-box">{{ camps[0].name }}</p>
      </div>
    </div>

    <div class="container">
      <img class="long-element" src="../assets/img/morocco01.jpg">
      <div class="long-element-box">
        <p class="title-box"> {{ camps[1].name }} </p>
      </div>
    </div>

    <div class="container">
      <img class="long-element" src="../assets/img/moliets01.jpg">
      <div class="long-element-box">
        <p class="title-box">{{ camps[2].name }}</p>
      </div>
    </div>
    <div class="flex-main-button">
      <button class="main-button" @click="goToFavorites()">Beliebteste</button>
    </div>

      <!-- end favorites -->

        <!-- start categories -->

    <button @click="goToKategorien()" class="title-clickable">
        <h1>Kategorien</h1>
      </button>

    <div class="slider">
      <div class="container-slider" @click="goToKategorien()">
        <img class="square-element" src="../assets/img/luxus01.jpg">
        <div class="square-element-box">
          <p class="title-box">{{categories[0] }}</p>
        </div>
      </div>

      <div class="container-slider" @click="goToKategorien()">
        <img class="square-element" src="../assets/img/morocco02.jpg">
        <div class="square-element-box">
          <p class="title-box">{{ categories[1] }}</p>
        </div>
      </div>

      <div class="container-slider" @click="goToKategorien()">
        <img class="square-element" src="../assets/img/family01.jpg">
        <div class="square-element-box">
          <p class="title-box">{{ categories[2] }}</p>
        </div>
      </div>

      <div class="container-slider" @click="goToKategorien()">
        <img class="square-element" src="../assets/img/jugend01.jpg">
        <div class="square-element-box">
          <p class="title-box">{{ categories[3] }}</p>
        </div>
      </div>
    </div>

    <!-- end categories -->

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

    data() {
      return {
        camps: null,
        countries: null,
        categories: null
      }
    },

    created() {
      this.requestCamps(),
      this.requestCountries(),
      this.requestCategories()
        },


    methods: {
      goToFavorites() {
        this.$router.push({
          name: 'favoriten'
        })
      },
      goToList() {
        this.$router.push({
          name: 'List'
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
      goToUeber() {
        this.$router.push({
          name: 'ueber'
        })
      },
      requestCamps() {
        // GET /someUrl
        this.$http.get('http://localhost:3000/camps').then(response => {

          // get body data
          this.camps = response.body;

          console.log(response.body)

        }, response => {
          // error callback
        });
      },
      requestCountries() {
        // GET /someUrl
        this.$http.get('http://localhost:3000/countries').then(response => {

          // get body data
          this.countries = response.body;

          console.log(response.body)

        }, response => {
          // error callback
        });
      },
      requestCategories() {
        // GET /someUrl
        this.$http.get('http://localhost:3000/categories').then(response => {

          // get body data
          this.categories = response.body;

        }, response => {
          // error callback
        });
      }
    }
  }
</script>

<style>
</style>
