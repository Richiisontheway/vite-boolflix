<script>
import { store } from '../store';
export default {
    data(){
        return{
            store
        }
    },
    methods:{
        //funzione per aggiornare il codice da iso-639 a alpha-2
        flagCodeChange(){
            //store.movie.original_language = store.movie.original_language.toUpperCase();
            if(store.movie.original_language == 'en'){
                store.movie.original_language = 'us'
            }
            if(store.movie.original_language == 'ja'){
                store.movie.original_language = 'jp'
            }
        },
    },
    props:{
        movie:Object,
    },
    mounted(){
        this.flagCodeChange();
    }
}
</script>
<template>
    <div>
        <ul>
            <li>{{ movie.title }}</li>
            <li>{{ movie.original_title }}</li>
            <li>
                <img :src= "'https://flagsapi.com/'+movie.original_language+'/flat/64.png'"  >
            </li>
            <li>{{ movie.vote_average }}</li>
            
        </ul>
    </div>
</template>