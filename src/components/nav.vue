<script>
export default {
  name: "Nav-component"
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid navCss mt-0 shadow-lg">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="et-hero-tab nav-link fs-5 text-white">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/suppliers" class="et-hero-tab nav-link fs-5 text-white">Fournisseurs</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/map" class="et-hero-tab nav-link fs-5 text-white">Carte des fournisseurs</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/resselers" class="et-hero-tab nav-link fs-5 text-white">Revendeurs</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navCss {
  background-color: #18534F; /* Couleur de fond */
  position: fixed; /* Fixe la nav en haut */
  top: 0; /* Positionne en haut */
  left: 0; /* Positionne à gauche */
  right: 0; /* Positionne à droite */
  height: 7vh; /* Hauteur de la nav */
  z-index: 1000; /* Assure que la nav est au-dessus des autres éléments */
}

/* Assurez-vous que l'image a un z-index inférieur si nécessaire */
.image-container {
  position: relative; /* Parent pour positionnement */
  z-index: 1; /* Doit être inférieur à celui de la nav */
}

img {
  width: 100%; /* Pour que l'image prenne toute la largeur */
  height: auto; /* Ajustement automatique de la hauteur */
}
</style>
