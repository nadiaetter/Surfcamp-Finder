<template>
  <div class="main">
    <div class="home">
    <h1 id="title-search">Ich suche...</h1>
    <input class="input-suche">
    <!-- output area -->
    <div>
      <p>{{camps}}</p>
    </div>
    <!-- end output area -->
  </div>
  </div>
</template>


<script>
  export default {

    data: {
      search: "",
      camps: [
      {
          name: "Surf & Yoga Camp Le Pin Sec",
          lead: "Das Surf & Yoga Camp in Le Pin Sec verkörpert ein neues Konzept, das Surfen, Yoga und gutes Essen verbindet. Zudem ist das Camp direkt am langen Sandstrand gelegen, gleich hinter einer Düne."
        },

        {
          name: "Premium Surfcamp Marokko",
          lead: "Die Luxusvariante für den Surfurlaub mit allem Komfort! Surfspot direkt vor der Tür, mit Pool, Golfplatz, Spa, schicker Unterkunft und vielem mehr."
        }
      ]
    },
  // computed: {
  //   showCamps
  // }

}
</script>


<style></style>
