<script>
import { store } from '../store';
import singleMovie from './singleMovie.vue';
import singleSerie from './singleSerie.vue';
// import Swiper JS with all modules
import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/css/bundle';
export default {
    data() {
        return {
            store,
            Swiper
        };
    },
    components: {

        singleMovie,
        singleSerie,
    },
    methods: {
        swiper(){
            const swiper = new Swiper('.boolflix--container', {
                slidesPerView: 3,
                spaceBetween: 30,
            });
            console.log(swiper)
        }
    },
    mounted(){
        this.swiper()
    },
    updated(){
        this.swiper()
    }
    
}
</script>

<template>
    <main>
        <section>

            <h2>
                Film
            </h2>
            <div class="boolflix--container">
                <div class="swiper-wrapper">
                    <singleMovie v-for="(elem,i) in store.movieList"
                    :key="i"
                    :movie="elem" />
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </section>
        <section>
            <h2>
                Serie
            </h2>              
            <div class="swiper boolflix--container">
                <div class="swiper-wrapper">
                    <singleSerie v-for="(episode,a) in store.serieTvList"
                    :key="a"
                    :serie="episode"/>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    @use '../assets/scss/main.scss' as *;

</style>
