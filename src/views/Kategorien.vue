<template>
  <div class="kategorien">
    <div class="home">
    <h1>Kategorien</h1>

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

    <div class="container">
      <img class="long-element" src="../assets/img/portugal_03.jpg">
      <div class="long-element-box">
        <p class="title-box">Surfcamp</p>
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

    methods: {
      goToUeber() {
        this.$router.push({
          name: 'ueber'
        })
      }
    }
  }
  </script>

<style></style>
