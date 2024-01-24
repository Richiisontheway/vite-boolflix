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
            axios.get('https://api.themoviedb.org/3/'+ store.movieUrl, {
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
        },
        getApiSeries(){
            axios.get('https://api.themoviedb.org/3/'+ store.seriesUrl, {
            params: {
                query:this.store.searchText.length > 0 ? this.store.searchText : null,
            },
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${store.authBearer}`
            }
            }).then((response)=>{
                this.store.serieTvList = response.data.results;
                console.log('lista serietv',this.store.serieTvList);
            })
        }
    },
    mounted (){
        this.getApiMovies();
        this.getApiSeries();
    }
}
</script>

<template>
    <AppHeader @searched="getApiMovies(),getApiSeries()"/>

    <AppMain />

    <AppFooter />
</template>

<style lang="scss">
@use "assets/scss/main" as *;
@import "assets/scss/partials/reset";
</style>
