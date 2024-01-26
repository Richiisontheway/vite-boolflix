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
    <div class="boolflix--card">
        <div class="boolflix--img">
            <img :src="'https://image.tmdb.org/t/p/w342'+ serie.poster_path" alt="film non disponibile">
        </div>
        <div class="boolflix--description">
            <ul>
                <li>Nome:{{ serie.title }}</li>
                <li>Nome originale:{{ serie.original_title }}</li>
                <li>
                    <div>
                        Lingua:
                        <img :src="'https://flagcdn.com/16x12/'+ serie.original_language +'.png'" alt="ciao">
                    </div>
                </li>
                <li>
                    Valutazione:{{ serie.vote_average }}
                </li>
                <li v-for="(elem,i) in 5" class="fa-star special"
                :class="{
                    'fa-regular' : changeVote() <= i,
                    'fa-solid' : changeVote() > i
                }">
                </li>
                <li>
                    Sintassi:{{ serie.overview }}
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss">
    @use '../assets/scss/partials/component.scss' as *
</style>