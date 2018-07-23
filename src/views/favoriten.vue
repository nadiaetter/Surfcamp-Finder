<template>
<div class="main">
  <div class="home">
    <h1>Favoriten</h1>

    <!-- Start Single Element Element -->
    <div class="flexbox-single-elements">
      <!-- <img class="single-element-like" src="../assets/img/like.png"> -->
      <div class="single-element" @click="goToSingle()">
        <img class="single-element-img" src="../assets/img/pinsec06.jpg" >
        <p class="category"> {{ camps[0].category }} </p>
        <p class="single-element-title">  {{ camps[0].name }} </p>
        <p class="text-teaser"> {{ camps[0].lead }} </p>
        <div class="fade"></div>
      </div>
    </div>
    <!-- End Single Element -->

    <!-- Start Single Element Element -->
    <div class="flexbox-single-elements" @click="goToSingle02()">
      <!-- <img class="single-element-like" src="../assets/img/like.png"> -->
      <div class="single-element">
        <img class="single-element-img" src="../assets/img/moliets01.jpg">
        <p class="category">{{ camps[1].category }}</p>
        <p class="single-element-title">{{ camps[1].name }}</p>
        <p class="text-teaser"> {{ camps[1].lead }} </p>
        <div class="fade"></div>
      </div>
    </div>
    <!-- End Single Element -->

    <!-- Start Single Element Element -->
    <div class="flexbox-single-elements">
      <!-- <img class="single-element-like" src="../assets/img/like.png"> -->
      <div class="single-element">
        <img class="single-element-img" src="../assets/img/morocco01.jpg">
        <p class="category">{{ camps[2].category }}</p>
        <p class="single-element-title">{{ camps[2].name }}</p>
        <p class="text-teaser"> {{ camps[2].lead }} </p>
        <div class="fade"></div>
      </div>
    </div>
    <!-- End Single Element -->

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
      camps: null
    }
  },

  created() {
    this.requestData()
  },


  methods: {
    goToSingle() {
      this.$router.push({
        name: 'single'
      })
    },
    goToSingle02() {
      this.$router.push({
        name: 'single02'
      })
    },
    requestData() {
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

<style></style>
