<script>
import "leaflet/dist/leaflet.css";
import {LMap, LMarker, LPopup, LTileLayer} from "@vue-leaflet/vue-leaflet";
import axios from "axios";

export default {
  name: "Map",
  components: {
    LPopup,
    LMarker,
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 2,
      suppliers: [],
      coords: [0, 0], //là où seront stockées les coordonnées de l'user [latitude, longitude]
      error: null,
      isSupported: 'geolocation' in navigator // Vérifie si la géolocalisation est supportée
    };
  },
  methods: {
    getLocation() {     //cette fonction s'exécutera quand on essayera d'accéder à la geoloc du navigateur
      if (!this.isSupported) {    //sera appliqué si la geoloc ne fonctionne pas
        this.error = "Le géolocalisation n'est pas supportée par votre navigateur";
      }
      //si la geoloc fonctionne, on utilise l'API navigation pour obtenir la position
      navigator.geolocation.getCurrentPosition(
          (position) => {
            this.coords = [position.coords.latitude, position.coords.longitude]; //on récupère les données que l'on stocke dans la variable créée plus tôt
          },
          (error) => {  //si ça ne fonctionne pas on gère l'erreur
            this.error = error;
            console.log(error);
          }
      )
    }

  },
  created() { //s'exécute lors de la création du composant
    this.loading = true;
    axios.get('https://suppliers.depembroke.fr/api/suppliers')
        .then(response => {
          this.suppliers = response.data.data.map(supplier => ({  //si la requête fonctionne, on créé un nouveau tableau (grâce à map) qui contient seulement les infos dont on a besoin
            id: supplier.id,
            name: supplier.name,
            status: supplier.status,
            checkedAt: supplier.checkedAt,
            latitude: supplier.latitude,
            longitude: supplier.longitude,
          }))
        })
        .catch(error => {
          console.error(error); //s'il y a une erreur, on l'affiche dans la console
          this.error = error;
        })
        .finally(() => {
          this.loading = false;
        })
  },
};
</script>

<template>

  <div class="container mt-5 ">
    <div style="height:500px; width:700px" class="m-auto shadow">
      <l-map ref="map" v-model:zoom="zoom" :center="[45.166672, 5.71667]">
        <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
        ></l-tile-layer>
        <l-marker
            v-for="supplier in suppliers"
            :key="supplier.id"
            :lat-lng="[supplier.latitude, supplier.longitude]">

        </l-marker>
      </l-map>
    </div>
  </div>

</template>

<style scoped>

</style>