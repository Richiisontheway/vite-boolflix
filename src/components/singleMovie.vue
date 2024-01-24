<script>
import { store } from '../store';
export default {
    data(){
        return{
            store
        }
    },
    methods:{},
    props:{
        movie:Object,
    }
}
</script>
<template>
    <div>
        <ul>
            <li>{{ movie.title }}</li>
            <li>{{ movie.original_title }}</li>
            <li>{{ movie.original_language }}</li>
            <li>{{ movie.vote_average }}</li>
        </ul>
    </div>
</template>