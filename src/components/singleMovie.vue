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
    <div>
        <div>
            <img :src="'https://image.tmdb.org/t/p/w342'+ movie.poster_path" alt="">
        </div>
        <ul>
            <li>{{ movie.title }}</li>
            <li>{{ movie.original_title }}</li>
            <li>
                <h5>
                    <img :src="'https://flagcdn.com/16x12/'+ movie.original_language +'.png'" alt="ciao">
                </h5>
            </li>
            <li>
                {{ movie.vote_average }}
            </li>
            <li v-for="(elem,i) in 5" class="fa-star"
            :class="{
                'fa-regular' : changeVote() <= i,
                'fa-solid' : changeVote() > i
            }"></li>
            
        </ul>
    </div>
</template>