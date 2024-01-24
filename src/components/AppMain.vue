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
        <div>
            <singleMovie v-for="(elem,i) in store.movieList"
            :key="i"
            :movie="elem" />
        </div>
        <div>
            <singleSerie v-for="(episode,a) in store.serieTvList"
            :key="a"
            :serie="episode"/>
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
