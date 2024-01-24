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
            //this.movie.original_language == this.movie.original_language.toLowerCase();
            if(this.movie.original_language == 'en'){
                this.movie.original_language = 'us'
            }
            if(this.movie.original_language == 'ja'){
                this.movie.original_language = 'jp'
            }
            if(this.movie.original_language == 'ko'){
                this.movie.original_language = 'kr'
            }
            if(this.movie.original_language == 'zh'){
                this.movie.original_language = 'cn'
            }
        },
    },
    props:{
        movie:Object,
    },
    beforeUpdate(){
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
                <h5>
                    <img :src="'https://flagcdn.com/16x12/'+ movie.original_language +'.png'" alt="ciao">
                </h5>
            </li>
            <li>{{ movie.vote_average }}</li>
            
        </ul>
    </div>
</template>