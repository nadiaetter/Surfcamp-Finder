<template>
<div class="main">
  <p class="category-single-element">{{ camps[1].category }}</p>
  <div class="container">
    <img class="title-image-singleElement" src="../assets/img/moliets01.jpg">
    <div class="long-element-box">
      <p class="title-box-singleElement">{{ camps[1].name }}</p>
    </div>
  </div>
  <div class="container-content">
    <p class="text">{{ camps[1].lead }}</p>
    <ul>
      <li>
        <p class="text">{{ camps[1].list01 }}</p>
      </li>
      <li>
        <p class="text">{{ camps[1].list02 }}</p>
      </li>
      <li>
        <p class="text">{{ camps[1].list03 }}</p>
      </li>
      <li>
        <p class="text">{{ camps[1].list04 }}</p>
      </li>
      <li>
        <p class="text">{{ camps[1].list05 }}</p>
      </li>
      <li>
        <p class="text">{{ camps[1].list06 }}</p>
      </li>
    </ul>

    <!-- Start Sidescroll 1 -->
    <div class="slider">
      <div class="container-slider">
        <img class="square-element" src="../assets/img/mimizan01.jpg" @click="goToCountry()">
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/mimizan02.jpg" @click="goToCountry()">
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/mimizan03.jpg" @click="goToCountry()">
      </div>
    </div>
    <!-- End Sidescroll 1 -->

    <button @click="toggleAccommondation()" class="button-single-element">
      <div class="label-buttons">
      <div>Unterkunft</div>
      <div>+</div>
    </div>
      <div v-if="showAccommondation">
        <p class="text-inButton">{{ camps[1].accommondation }}</p>
      </div>
    </button>


    <p class="text">{{ camps[1].details }}</p>

    <button @click="toggleMeals()" class="button-single-element">
      <div class="label-buttons">
      <div>Verpflegung</div>
      <div>+</div>
    </div>
      <div v-if="showMeals">
        <p class="text-inButton">{{ camps[1].meals }}</p>
      </div>
    </button>

    <!-- Start Sidescroll 2-->
    <div class="slider">
      <div class="container-slider">
        <img class="square-element" src="../assets/img/mimizan04.jpg" @click="goToCountry()">
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/mimizan05.jpg" @click="goToCountry()">
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/mimizan06.jpg" @click="goToCountry()">
      </div>
    </div>
    <!-- End Sidescroll 2 -->

    <button @click="toggleCourse()" class="button-single-element">
      <div class="label-buttons">
      <div>Surfkurs</div>
      <div>+</div>
    </div>
      <div v-if="showCourse">
        <p class="text-inButton">{{ camps[1].surfcourse }}</p>
      </div>
    </button>

    <button @click="toggleActivities()" class="button-single-element">
      <div class="label-buttons">
      <div>Aktivitäten</div>
      <div>+</div>
    </div>
      <div v-if="showActivities">
        <p class="text-inButton">{{ camps[1].activities }}</p>
      </div>
    </button>


    <!-- Start Sidescroll 3-->
    <div class="slider">
      <div class="container-slider">
        <img class="square-element" src="../assets/img/mimizan07.jpg" @click="goToCountry()">
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/mimizan08.jpg" @click="goToCountry()">
      </div>

      <div class="container-slider">
        <img class="square-element" src="../assets/img/mimizan09.jpg" @click="goToCountry()">
      </div>
    </div>
    <!-- End Sidescroll 3 -->


    <button @click="togglePrices()" class="button-single-element">
      <div class="label-buttons">
      <div>Preise</div>
      <div>+</div>
    </div>
      <div v-if="showPrices">
        <p class="text-inButton">{{ camps[1].prices }}</p>
      </div>
    </button>

    <button @click="toggleArrival()" class="button-single-element">
      <div class="label-buttons">
      <div>Anreise</div>
      <div>+</div>
    </div>
      <div v-if="showArrival">
        <p class="text-inButton">{{ camps[1].arrival }}</p>
      </div>
    </button>

    <button @click="toggleContact()" class="button-single-element">
      <div class="label-buttons">
      <div>Kontakt</div>
      <div>+</div>
    </div>
      <div v-if="showContact">
        <p class="text-inButton">{{ camps[1].contact }}</p>
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
        showAccommondation: false,
        camps: null
      }
    },

    created() {
      this.requestCamps()
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
      toggleActivities() {
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
      },
      requestCamps() {
        // GET /someUrl
        this.$http.get('https://my-json-server.typicode.com/nadiaetter/Surfcamp-Finder/camps').then(response => {

          // get body data
          this.camps = response.body;

        }, response => {
          // error callback
        });
      }
    }
  }
</script>


<style></style>
