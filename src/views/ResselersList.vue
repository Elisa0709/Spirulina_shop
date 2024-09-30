<script>
import Supplier from "@/components/Supplier.vue";
import Features from "@/components/CarouselSuppliers.vue"
import {format, render, cancel, register} from 'timeago.js';
import axios from 'axios';
import Resselers from "@/components/Resselers.vue";

export default {
  name: "ResselersList",
  components: {Resselers, Features, Supplier},
  data() {
    return {
      ressellersData: [], // au début la liste des fournisseurs est vide
      loading: false,
      error: null,

    }
  },
  created() {
    this.loading = true;
    let fullRessellersData = null;

    axios.get('https://suppliers.depembroke.fr/api/suppliers')
        .then(response => {
          fullRessellersData = response.data.data.map((response) => ({
            resellers: response.resellers,
          }))
          fullRessellersData.forEach((reseller) => {
            for (const item of reseller.resellers) {
              this.ressellersData.push(item)
            }
          })
        })
        .catch(error => {
          console.error(error); //s'il y a une erreur, on l'affiche dans la console
          this.error = error;
        })
        .finally(() => {
          this.loading = false;
        })
  }
}

</script>

<template>


  <div class="container mt-3">
    <div class="row">
      <h2 class="text-center">Nos revendeurs</h2>
      <div
          class="col-md-4 col-sm-12 mb-4"
          v-for="resseller in ressellersData"
          :key="resseller.id"
      >
        <Resselers
            :keyId="resseller.id"
            :name="resseller.name"
            :description="resseller.description"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>