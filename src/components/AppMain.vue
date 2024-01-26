<script>
import { store } from '../store';
import singleMovie from './singleMovie.vue';
import singleSerie from './singleSerie.vue';
export default {
    data() {
        return {
            store,
        };
    },
    components: {

        singleMovie,
        singleSerie

    },
    methods: {
        
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

                <singleMovie v-for="(elem,i) in store.movieList"
                :key="i"
                :movie="elem" />

            </div>

        </section>
        <section>
            <h2>
                Serie
            </h2>              
            <div class="boolflix--container">

                <singleSerie v-for="(episode,a) in store.serieTvList"
                :key="a"
                :serie="episode"/>

            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    @use '../assets/scss/main.scss' as *;

</style>
