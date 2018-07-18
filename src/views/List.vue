<template>
<div class="main">
  <div class="home">
    <div class="filter-area">
      <button class="filter-button" @click="ShowOverlay" >Land</button>

      <div v-if="isShowing" class="overlayMenu" >
        <button id="close-Nav-Button" @click="ShowOverlay">
        </button>
            <br>
            <div class="nav-open">
              <p>Frankreich</p>
              <div class="flex-main-button">
                <button class="main-button" @click="ShowOverlay">Resultate</button>
              </div>
        </div>
      </div>









      <button class="filter-button">Surflevel</button>
      <button class="filter-button">Reisemonat</button>
    </div>
    <div class="flex-main-button">
      <button class="main-button" v-bind:href="page">Mehr Filter</button>
    </div>

    <!-- Area Elements -->
    <div>
      <!-- Start Single Element Element -->
      <div class="flexbox-single-elements">
        <!-- <img class="single-element-like" src="../assets/img/like.png"> -->
        <div class="single-element">
          <img class="single-element-img" src="../assets/img/zarautz01.jpg">
          <p class="category">Surf & Yoga</p>
          <p class="single-element-title">Surf & Yoga Camp Le Pin Sec</p>
          <p class="text-teaser">Das Surf & Yoga Camp in Le Pin Sec verkörpert ein neues Konzept, das Surfen, Yoga und gutes Essen verbindet. Zudem ist das Camp direkt am langen Sandstrand gelegen, gleich hinter einer Düne.</p>
          <div class="fade"></div>
        </div>
      </div>
      <!-- End Single Element -->

    </div>
    <!-- End Area Elements -->
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
      return{
        isShowing: false
      }
    },

  methods: {
    goToUeber() {
      this.$router.push({
        name: 'ueber'
      })
    },
    ShowOverlay() {
      this.isShowing=!this.isShowing;
    }
  }
}
</script>

<style></style>
