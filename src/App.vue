<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import {store} from './store';

export default {
    data() {
        return {
            store
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },  
    methods: {
        getApiMovies(){
            axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                query:this.store.searchText.length > 0 ? this.store.searchText : null,
            },
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${store.authBearer}`
            }
        }).then((response)=>{
            this.store.movieList = response.data.results;
            console.log('lista film',this.store.movieList);
        })
        }
    },
    mounted(){
        this.getApiMovies();
    }
}
</script>

<template>
    <h1>
        Mia App
    </h1>

    <AppHeader @searched="getApiMovies()"/>

    <AppMain />

    <AppFooter />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
</style>
