<template>
    <div class="main">
      <navigation></navigation>
      <div>
        <button class="filter-button">Land</button>
        <button class="filter-button">Surflevel</button>
        <button class="filter-button">Reisemonat</button>
      </div>
        <button class="main-button" v-bind:href="page">Mehr Filter</button>
    <div> <!-- Hier werden die Suchresultate aufgezeigt -->

      <!-- Das einzelne Element -->
      <div class="flexbox-single-elements">
        <div class="single-element">
          <img class="single-element-img" src="../assets/img/portugal_03.jpg">
          <img class="single-element-like" src="../assets/img/like.png">
          <p class="category">Kategorie</p>
          <p class="single-element-title">Name des Camps</p>
          <p class="text-teaser">Teaser-Text</p>
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
