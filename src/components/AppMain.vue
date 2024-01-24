<script>
import { store } from '../store';
import singleMovie from './singleMovie.vue';
export default {
    data() {
        return {
            store,
        };
    },
    components: {

        singleMovie

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
    </main>
</template>

<style lang="scss" scoped>
</style>
