<template>
  <div class="main">
        <div class="home">
    <h1>Über das Projekt</h1>
    <p class="text">Dieser Prototyp eines Surfcamp-Finders ist im Rahmen meiner Bachelorarbeit entstanden.
      <img class="portrait-picture" src="../assets/img/nadia.jpg">
    Mein Name ist Nadia Etter und ich lebe in der Stadt Bern. An der HTW Chur habe ich Multimedia Productions mit Schwerpunkt Media Applications studiert. Künftig möchte ich als Frontend Entwicklerin tätig sein. Ich interessiere mich stark für verschiedenste Technologien, Design und auch die User Experience. Für dieses Projekt habe ich auf aktuelle Technologien gesetzt und deshalb vue.js gewählt. Diese Website habe ich mithilfe des Tools Sketch eigenständig entworfen.
    <a class="linkInText" href="https://sketch.cloud/s/VkEJw" target="_blank">Hier</a> kann dieser Prototyp angeschaut werden.
    Meine Bachelorarbeit wollte ich mit meinem Hobby surfen verknüpfen, so kam ich auf die Idee einen Surfcamp-Finder zu entwickeln.
      <br><br>
    Meine weiteren Projekte, wie zum Beispiel ein VR-Game, findest du auf meiner
    <a class="linkInText" href="https://nadiaetter.ch/" target="_blank">Homepage</a>.

      <br><br>
    Oder nimm <a class="linkInText" href="mailto:media@nadiaetter.c">Kontakt</a> mit mir auf! Ich freue mich auf jede Nachricht.



    </p>
  </div>
    <div class="footer">
      <button @click="goHome()" class="footerButton">
        <p class="footer-text">Back Home</p>
      </button>
    </div>

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
