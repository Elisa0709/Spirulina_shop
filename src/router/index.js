import { createRouter, createWebHistory } from 'vue-router'
import SuppliersList from "@/views/SuppliersList.vue";
import SuppliersMap from "@/views/SuppliersMap.vue";
import Home from "@/views/Home.vue";
import Map from "@/components/Map.vue";
import ResselersList from "@/views/ResselersList.vue";




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/suppliers',
      name: 'suppliers',
      component: SuppliersList
    },
    {
      path: '/map',
      name: 'Map',
      component: SuppliersMap
    },
    {
    path: '/mapView',
    name: 'MapView',
    component: Map
},
    {
      path: '/resselers',
      name: 'Resselers',
      component: ResselersList
    },

  ]
})

export default router
