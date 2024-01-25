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
            <h3>film</h3>
            <div>
            <singleMovie v-for="(elem,i) in store.movieList"
            :key="i"
            :movie="elem" />
            </div>
        </div>
        <div>
            <h3>serie</h3>
            <div>
            <singleSerie v-for="(episode,a) in store.serieTvList"
            :key="a"
            :serie="episode"/>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
