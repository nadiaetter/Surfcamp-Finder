<template>
<div class="single">
  <p class="category">Kategorie</p>
  <div class="container">
    <img class="long-element" src="../assets/img/portugal_03.jpg">
    <div class="long-element-box">
      <p class="title-box">Surfcamp</p>
      <div v-for="data in myJson">{{data}}</div>
    </div>
  </div>
  <p class="text">Anriss</p>
  <p class="text">Liste mit Beschreibung</p>
  <div>Side-Scroll</div>
  <div>Button Unterkunft</div>
  <p class="text">Beschreibung Region</p>
  <div>Button Verpflegung</div>
  <div>Side-Scroll</div>
  <div>Button Surfkurs</div>
  <div>Button Aktivitäten</div>
  <div>Side-Scroll</div>
  <div>Button Preise</div>
  <div>Karte</div>
  <div>Button Anreise</div>
  <div>Button Kontakt</div>
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
