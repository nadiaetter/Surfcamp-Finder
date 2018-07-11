<template>
<div class="main">
  <p class="category-single-element">Kategorie</p>
  <div class="container">
    <img class="title-image-singleElement" src="../assets/img/morocco03.jpg">
    <div class="long-element-box">
      <p class="title-box-singleElement">Surfcamp</p>
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

    <button @click="toggleAccommondation()" class="button-single-element">
      <div class="label-buttons">
      <div>Unterkunft</div>
      <div>+</div>
    </div>
      <div v-if="showAccommondation">
        <p class="text-inButton">Content für die Unterkunft</p>
      </div>
    </button>


    <p class="text">Beschreibung Region</p>

    <button @click="toggleMeals()" class="button-single-element">
      <div class="label-buttons">
      <div>Verpflegung</div>
      <div>+</div>
    </div>
      <div v-if="showMeals">
        <p class="text-inButton">Content Verpflegung</p>
      </div>
    </button>

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

    <button @click="toggleCourse()" class="button-single-element">
      <div class="label-buttons">
      <div>Surfkurs</div>
      <div>+</div>
    </div>
      <div v-if="showCourse">
        <p class="text-inButton">Content für die Surfkurs</p>
      </div>
    </button>

    <button @click="toggleActivities()" class="button-single-element">
      <div class="label-buttons">
      <div>Aktivitäten</div>
      <div>+</div>
    </div>
      <div v-if="showActivities">
        <p class="text-inButton">Content für die Aktivitäten</p>
      </div>
    </button>


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


    <button @click="togglePrices()" class="button-single-element">
      <div class="label-buttons">
      <div>Preise</div>
      <div>+</div>
    </div>
      <div v-if="showPrices">
        <p class="text-inButton">Content für die Preise</p>
      </div>
    </button>

    <div>Karte</div>

    <button @click="toggleArrival()" class="button-single-element">
      <div class="label-buttons">
      <div>Anreise</div>
      <div>+</div>
    </div>
      <div v-if="showArrival">
        <p class="text-inButton">Content für die Anreise</p>
      </div>
    </button>

    <button @click="toggleContact()" class="button-single-element">
      <div class="label-buttons">
      <div>Kontakt</div>
      <div>+</div>
    </div>
      <div v-if="showContact">
        <p class="text-inButton">Content für die Kontakte</p>
      </div>
    </button>


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
      showContact: false,
      showArrival: false,
      showPrices: false,
      showActivities: false,
      showCourse: false,
      showMeals: false,
      showAccommondation: false
    }
  },

  methods: {
    goToUeber() {
      this.$router.push({
        name: 'ueber'
      })
    },
    toggleContact() {
      this.showContact = !this.showContact;
    },
    toggleArrival() {
      this.showArrival = !this.showArrival;
    },
    togglePrices() {
      this.showPrices = !this.showPrices;
    },
    toggleActivities(){
      this.showActivities = !this.showActivities;
    },
    toggleCourse() {
      this.showCourse = !this.showCourse;
    },
    toggleMeals() {
      this.showMeals = !this.showMeals;
    },
    toggleAccommondation() {
      this.showAccommondation = !this.showAccommondation;
    }
  }
}
</script>


<style></style>
