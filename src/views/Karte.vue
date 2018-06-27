<template>
  <div class="karte">
    <div class="home">
    <h1>OK, das wird die Karte.</h1>
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
