<template>
  <div class="main">
    <div class="home">
    <h1>Länder</h1>

    <div class="container" @click="goToList()">
      <img class="long-element" src="../assets/img/pinsec02.jpg">
      <div class="long-element-box">
        <p class="title-box">{{ countries[0] }}</p>
      </div>
    </div>

    <div class="container">
      <img class="long-element" src="../assets/img/zarautz04.jpg">
      <div class="long-element-box">
        <p class="title-box">{{ countries[1] }}</p>
      </div>
    </div>

    <div class="container">
      <img class="long-element" src="../assets/img/portugal01.jpg">
      <div class="long-element-box">
        <p class="title-box">{{ countries[2] }}</p>
      </div>
    </div>

    <div class="container">
      <img class="long-element" src="../assets/img/iceland01.jpg">
      <div class="long-element-box">
        <p class="title-box">{{ countries[3] }}</p>
      </div>
    </div>

    <div class="container">
      <img class="long-element" src="../assets/img/england01.jpg">
      <div class="long-element-box">
        <p class="title-box">{{ countries[4] }}</p>
      </div>
    </div>

    <div class="container">
      <img class="long-element" src="../assets/img/ireland01.jpg">
      <div class="long-element-box">
        <p class="title-box">{{ countries[5] }}</p>
      </div>
    </div>

    <div class="container">
      <img class="long-element" src="../assets/img/canary01.jpg">
      <div class="long-element-box">
        <p class="title-box">{{ countries[6] }}</p>
      </div>
    </div>

    <div class="container">
      <img class="long-element" src="../assets/img/morocco02.jpg">
      <div class="long-element-box">
        <p class="title-box">{{ countries[7] }}</p>
      </div>
    </div>

    <div class="container">
      <img class="long-element" src="../assets/img/bali01.jpg">
      <div class="long-element-box">
        <p class="title-box">{{ countries[8] }}</p>
      </div>
    </div>

    <div class="container">
      <img class="long-element" src="../assets/img/costarica01.jpg">
      <div class="long-element-box">
        <p class="title-box">{{ countries[9] }}</p>
      </div>
    </div>



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
      countries: null
    }
  },

  created() {
    this.requestCountries()
  },


  methods: {
    goToUeber() {
      this.$router.push({
        name: 'ueber'
      })
    },
    goToList() {
      this.$router.push({
        name: 'List'
      })
    },
    requestCountries() {
      // GET /someUrl
      this.$http.get('https://my-json-server.typicode.com/nadiaetter/Surfcamp-Finder/countries').then(response => {

        // get body data
        this.countries = response.body;

        console.log(response.body)

      }, response => {
        // error callback
      });
    }
  }
}

</script>

<style></style>
