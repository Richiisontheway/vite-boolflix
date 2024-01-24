<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        };
    },
    methods: {

    }
}
</script>

<template>
    <header>
        <form @submit.prevent="$emit('searched')">
            <input type="text" v-model="store.searchText">
            <button>
                button
            </button>
        </form>
    </header>
</template>

<style lang="scss" scoped>
</style>
