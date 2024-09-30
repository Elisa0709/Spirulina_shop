<script>
export default {
  name: "Header",
  data(){
    return {

    }
  }
}
</script>

<template>

<!--  <div class="container mt-5 p-5">-->
<!--    <div class="container mt-5">-->
<!--      <h1 class="text-center mt-5">SPIRULINE</h1>-->
<!--    </div>-->
<!--  </div>-->
  <div class="image-container">
    <img src="/carrousselSupplier2.webp" alt="image de spiruline en poudre" >
    <h1 class="text-overlay ">The Spiruline shop</h1>
  </div>


</template>

<style scoped>

a {
  text-decoration: none;
}

h1{
  font-size: 7rem;
  color: #ffffff;
  //font-family: "Century Gothic", 'Lato', sans-serif;
}
.image-container {
  position: relative; /* Conteneur parent doit être en position relative */
  width: 100%;
}

img {
  width: 100%;
  height: auto; /* Pour que l'image soit responsive */
}

.text-overlay {
  position: absolute; /* Positionne le texte sur l'image */
  top: 50%; /* Centré verticalement */
  left: 50%; /* Centré horizontalement */
  transform: translate(-50%, -50%); /* Pour centrer précisément */
  color: white; /* Couleur du texte, ajustable */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Effet d'ombre pour meilleure lisibilité */
  font-family: "Century Gothic", 'Lato', sans-serif;
  text-align: center;
}

</style>