<script>
import { store } from '../store';
import singleWatcher from './singleWatcher.vue';
export default {
    data() {
        return {
            store,
        };
    },
    components:{
        singleWatcher
    },
    methods: {

    }
}
</script>

<template>
    <main>
        <div>
            <singleWatcher v-for="(elem,i) in store.movieList"
            :key="i"
            :movie="elem" />
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
