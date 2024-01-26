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
        changeVote(){
            let number = parseInt(Math.round(this.movie.vote_average) / 2)
            //console.log('voteMovie',number);
            return number
        }
    },
    props:{
        movie:Object,
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
    <div class="swiper-slide boolflix--card">
        <div class="boolflix--img">
            <img :src="'https://image.tmdb.org/t/p/w342'+ movie.poster_path" alt="film non disponibile">
        </div>
        <div class="boolflix--description">
            <ul>
                <li>Nome:{{ movie.title }}</li>
                <li>Nome originale:{{ movie.original_title }}</li>
                <li>
                    <div>
                        Lingua:
                        <img :src="'https://flagcdn.com/16x12/'+ movie.original_language +'.png'" alt="ciao">
                    </div>
                </li>
                <li>
                    Valutazione:{{ movie.vote_average }}
                </li>
                <li v-for="(elem,i) in 5" class="fa-star special"
                :class="{
                    'fa-regular' : changeVote() <= i,
                    'fa-solid' : changeVote() > i
                }">
                </li>
                <li>
                    Sintassi:{{ movie.overview }}
                </li>
            </ul>
        </div>

    </div>
</template>

<style lang="scss">
    @use '../assets/scss/partials/component.scss' as *

</style>