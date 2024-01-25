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
            if(this.serie.original_language == 'en'){
                this.serie.original_language = 'us'
            }
            if(this.serie.original_language == 'ja'){
                this.serie.original_language = 'jp'
                
            }
            if(this.serie.original_language == 'ko'){
                this.serie.original_language = 'kr'
                
            }
            if(this.serie.original_language == 'zh'){
                this.serie.original_language = 'cn'
                
            }
            //return this.serie.original_language

            
        },
        changeVote(){
            let number = parseInt(Math.round(this.serie.vote_average) / 2)
            //console.log('voteSerie',number);
            return number
        }
    },
    props:{
        serie:Object,
    },
    mounted(){
        this.flagCodeChange();
        this.changeVote()
    },
    updated(){
        this.flagCodeChange();
        this.changeVote()
    }
}
</script>
<template>
    <div>
        <div>
            <img :src="'https://image.tmdb.org/t/p/w342'+serie.poster_path" alt="">
        </div>
        <ul>
            <li>{{ serie.name }}</li>
            <li>{{ serie.original_name }}</li>
            <li>
                <h5>
                    <img :src="'https://flagcdn.com/16x12/'+ serie.original_language +'.png'" alt="ciao">
                </h5>
            </li>
            <li>
                {{ serie.vote_average }}
            </li>
            <li v-for="(elem,i) in 5" class="fa-star"
            :class="{
                'fa-regular' : changeVote() <= i,
                'fa-solid' : changeVote() > i
            }"></li>
            
        </ul>
    </div>
</template>