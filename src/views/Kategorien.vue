<template>
  <div class="main">
    <div class="home">
    <h1>Kategorien</h1>

    <div class="container">
      <img class="long-element" src="../assets/img/luxus01.jpg">
      <div class="long-element-box">
        <p class="title-box">{{ categories[0] }}</p>
      </div>
    </div>

    <div class="container">
      <img class="long-element" src="../assets/img/yoga01.jpg">
      <div class="long-element-box">
        <p class="title-box">{{ categories[1] }}</p>
      </div>
    </div>

    <div class="container">
      <img class="long-element" src="../assets/img/family01.jpg">
      <div class="long-element-box">
        <p class="title-box">{{ categories[2] }}</p>
      </div>
    </div>

    <div class="container">
      <img class="long-element" src="../assets/img/jugend01.jpg">
      <div class="long-element-box">
        <p class="title-box">{{ categories[3] }}</p>
      </div>
    </div>

    <div class="container">
      <img class="long-element" src="../assets/img/iceland01.jpg">
      <div class="long-element-box">
        <p class="title-box">{{ categories[4] }}</p>
      </div>
    </div>

    <div class="container">
      <img class="long-element" src="../assets/img/france01.jpg">
      <div class="long-element-box">
        <p class="title-box">{{ categories[5] }}</p>
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
        categories: null
      }
    },

    created() {
      this.requestData()
    },


    methods: {
      goToUeber() {
        this.$router.push({
          name: 'ueber'
        })
      },
      requestData() {
        // GET /someUrl
        this.$http.get('http://localhost:3000/categories').then(response => {

          // get body data
          this.categories = response.body;

          console.log(response.body)

        }, response => {
          // error callback
        });
      }
    }
  }
  </script>

<style></style>
