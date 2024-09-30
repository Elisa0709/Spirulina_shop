<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


const onSuppliersListClick = () => {
  alert('A list click')
};

const onMapClick = () => {
  alert('A map click')
};


</script>

<template>
  <Header/>


  <RouterView/>

  <Footer/>
</template>

<style scoped>
</style>
