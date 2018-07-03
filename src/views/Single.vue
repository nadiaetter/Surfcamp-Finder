<template>
<div class="single">
  <p class="category-single-element">Kategorie</p>
  <div class="container">
    <img class="long-element" src="../assets/img/portugal_03.jpg">
    <div class="long-element-box">
      <p class="title-box">Surfcamp</p>
    </div>
  </div>
  <div class="container-content">
    <p class="text">Anriss</p>
    <p class="text">Liste mit Beschreibung</p>

    <!-- Start Sidescroll 1 -->
    <div class="slider">
      <div class="container-slider">
        <img class="square-element" src="../assets/img/france_02.jpg" @click="goToCountry()">
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/france_02.jpg" @click="goToCountry()">
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/france_02.jpg" @click="goToCountry()">
      </div>
    </div>
    <!-- End Sidescroll 1 -->

    <button class="button-single-element">Unterkunft +</button>


    <p class="text">Beschreibung Region</p>
    <button class="button-single-element">Verpflegung +</button>

    <!-- Start Sidescroll 2-->
    <div class="slider">
      <div class="container-slider">
        <img class="square-element" src="../assets/img/france_02.jpg" @click="goToCountry()">
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/france_02.jpg" @click="goToCountry()">
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/france_02.jpg" @click="goToCountry()">
      </div>
    </div>
    <!-- End Sidescroll 2 -->

    <button class="button-single-element">Surfkurs +</button>
    <button class="button-single-element">Aktivitäten +</button>


    <!-- Start Sidescroll 3-->
    <div class="slider">
      <div class="container-slider">
        <img class="square-element" src="../assets/img/france_02.jpg" @click="goToCountry()">
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/france_02.jpg" @click="goToCountry()">
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/france_02.jpg" @click="goToCountry()">
      </div>
    </div>
    <!-- End Sidescroll 3 -->


    <button class="button-single-element">Preise +</button>

    <div>Karte</div>
    <button class="button-single-element">Anreise +</button>

    <button class="button-single-element">Kontakt</button>
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
      myJson: json
    }
  }
}
</script>

<style></style>
