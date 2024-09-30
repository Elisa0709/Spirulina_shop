

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'leaflet/dist/leaflet.css';
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importer le CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Icon} from "leaflet/src/layer/index.js"; // Importer les scripts JS de Bootstrap si nécessaire
import App from './App.vue'
import router from './router'


delete Icon.Default.prototype._getIconUrl;


Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow
});

const app = createApp(App)



app.use(createPinia())
app.use(router)

app.mount('#app')
