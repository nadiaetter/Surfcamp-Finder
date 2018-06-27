<template>
  <div class="404">
    <h1>404 - Something went wrong</h1>
    <img class="portrait-picture" src="../assets/img/wipeout_02.jpg">
    <button class="main-button" @click="goHome()">ZURÜCK INS LINE-UP</button>


  </div>
</template>

<script>
  export default {
    methods: {
      goHome() {
        this.$router.push({
          name: 'home'
        })
      }
    }
  }
</script>

<style></style>
