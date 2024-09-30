<script>
import "leaflet/dist/leaflet.css";
import {LMap, LMarker, LTileLayer} from "@vue-leaflet/vue-leaflet";
import Map from "@/components/Map.vue";
import axios from "axios";
export default {
  name: "SuppliersMap",
  components: {Map, LMarker, LTileLayer, LMap},
  data() {
    return {
      zoom: 2,
      suppliers: [],
      coords: [0, 0], //là où seront stockées les coordonnées de l'user [latitude, longitude]
      error: null,
      isSupported: 'geolocation' in navigator, // Vérifie si la géolocalisation est supportée
      geoloc: false,

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
    },
    activateGeolocButton(){
      this.geoloc = true;
      this.zoom = 7;
      this.getLocation()
    }
  },
  created() { //s'exécute lors de la création du composant
    this.geoloc = false;
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
}
</script>

<template>
  <div class="container mt-5 ">
    <div class="row">
      <div class="col-8 d-flex justify-content-center align-items-center">
        <div class="container mt-5 ">
          <div style="height:500px; width:700px" class="m-auto shadow">
            <l-map
                v-if="!geoloc"
                ref="map" v-model:zoom="zoom" :center="[45.166672, 5.71667]">
              <l-tile-layer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  layer-type="base"
                  name="OpenStreetMap"
              ></l-tile-layer>
              <l-marker
                  v-for="supplier in suppliers"
                  :lat-lng="[supplier.latitude, supplier.longitude]"
                  :key="supplier.id"
              >
              </l-marker>
            </l-map>
            <l-map
                v-else
                ref="map" v-model:zoom="zoom" :center="coords">
              <l-tile-layer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  layer-type="base"
                  name="OpenStreetMap"
              ></l-tile-layer>
              <l-marker
                  v-for="supplier in suppliers"
                  :lat-lng="[supplier.latitude, supplier.longitude]"
                  :key="supplier.id"
              >
              </l-marker>
            </l-map>
          </div>
        </div>

      </div>
      <div class="col-4 mt-5 justify-content-center align-items-center ">
        <div class="row ">
          <h2 class="text-center mt-2">Carte des fournisseurs</h2>
          <p class="mt-3 mb-4 text-center lead">
            Bienvenue sur notre carte interactive des fournisseurs de spiruline !
            Cette carte est conçue pour vous aider à localiser facilement les producteurs et
            distributeurs de spiruline dans votre région.<br>
            N'attendez plus pour découvrir les bienfaits de la spiruline ! Cliquez sur le bouton ci-dessous pour afficher les fournisseurs autour de vous et commencez votre voyage vers une alimentation plus saine et équilibrée.
          </p>
        </div>
        <div class="row mt-4">
          <button type="button" id="geolocButton" @click="activateGeolocButton()" class="btn btn-info lead">Voir les fournisseurs autour de moi</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>