<template>
  <div class="navigation">
    <div id="nav">
      <div id="search-icon">
      <router-link to="/suche">
        <img class="nav-element" src="../assets/img/search.png">
      </router-link>
    </div>
      <router-link to="/">
        <img id="pinecone" src="../assets/img/pinecone.png">
      </router-link>

      <button @click="toggleShow" id="nav-Menu-Button">
        <img id="closeNav" src="../assets/img/menu.png">
      </button>

    <!-- Overlay Menu -->
      <div v-if="isShowing" class="overlayMenu" >
        <button id="close-Nav-Button" @click="toggleShow">
            <img id="closeNav" src="../assets/img/cross.png">
        </button>
            <br>
            <div class="nav-open">
              <button @click="toggleShow" class="nav-button">
                <router-link to="/favoriten" class="nav-title">Favoriten</router-link>
              </button>
                <br>
                <button @click="toggleShow" class="nav-button">
                  <router-link to="/laender" class="nav-title">Länder</router-link>
                </button>
                <br>
                <button @click="toggleShow" class="nav-button">
                  <router-link to="/kategorien" class="nav-title">Kategorien</router-link>
                </button>
                <br>
                <button @click="toggleShow" class="nav-button">
                  <router-link to="/karte" class="nav-title">Karte</router-link>
                </button>
                <br>
                <button @click="toggleShow" class="nav-button-small">
                  <router-link to="/ueber" class="nav-title-small">Über das Projekt</router-link>
                </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navigation',

  data() {
    return{
      isShowing: false
    }
  },

  methods: {
    toggleShow() {
      this.isShowing=!this.isShowing;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
