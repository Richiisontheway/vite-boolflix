import { createApp } from 'vue';
import App from './App.vue';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
// import Swiper JS core version + nav,modulation modules
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper');
    //configurazione swiper user modules
    modules: [Navigation,Pagination],
    

createApp(App).mount('#app')

