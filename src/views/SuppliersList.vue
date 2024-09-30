<script>
import Supplier from "@/components/Supplier.vue";
import Features from "@/components/Features.vue"
import {format, render, cancel, register} from 'timeago.js';
import axios from 'axios';

export default {
  name: "SuppliersList",
  components: {Features, Supplier},
  data() {
    return {
      suppliers: [], // au début la liste des fournisseurs est vide
      loading: false,
      error: null,

    }
  },
  created() {
    this.loading = true;
    axios.get('https://suppliers.depembroke.fr/api/suppliers')
        .then(response => {
          this.suppliers = response.data.data.map(supplier => ({
                id: supplier.id,
                name: supplier.name,
                status: supplier.status,
                checkedAt: supplier.checkedAt, //si la requête fonctionne, on créé un nouveau tableau (grâce à map) qui contient seulement les infos dont on a besoin
              }))
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
<div class="container">
  <Features/>
</div>

  <div class="container mt-3">
    <div class="row">
      <h2 class="text-center">Nos fournisseurs</h2>
      <div
          class="col-md-4 col-sm-12 mb-4"
          v-for="supplier in suppliers"
          :key="supplier.id"
      >
        <Supplier
            :keyId="supplier.id"
            :name="supplier.name"
            :status="supplier.status"
            :checkedAt="supplier.checkedAt"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>