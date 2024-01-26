import { createApp } from 'vue';
import App from './App.vue';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
// import Swiper JS with all modules
import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/css/bundle';

//init swiper
const swiper = new Swiper('.swiper', {
    a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
    },
});
console.log(swiper)
    

createApp(App).mount('#app')

