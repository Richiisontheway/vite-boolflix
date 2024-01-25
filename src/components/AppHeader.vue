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
        <div class="boolflix--header">
            <h1 class="boolflix--logo">
                Netflix
            </h1>
        <form @submit.prevent="$emit('searched')" class="boolflix--headerForm input-group">
            <i class="fa-solid fa-bell fa-lg me-2 " style="color: #ffffff;"></i>
            
            <input type="text" v-model="store.searchText" placeholder="cerca un film"
                class="form-control rounded" aria-label="Recipient's username" aria-describedby="button-addon2">
            
            <button class="btn" type="button" id="button-addon2" @click="$emit('searched')">
                <i class="fa-solid fa-magnifying-glass fa-lg me-2 boolflix--lentIcon"></i>
            </button>
            
        </form>
        </div>
    </header>
</template>

<style lang="scss">

.boolflix--header{
    background-color: black;
    display: flex;
    justify-content: space-between;
    height: 10vh;
    align-items:center;

    .boolflix--logo{
        color: red;
        margin-left: 20px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    .boolflix--headerForm{
        margin-right: 20px;
        width: 20%;
        display: flex;
        align-items: center;
        input{
            width: 5%;
        }
        .boolflix--lentIcon{
            color: white;
        }
    }
}

</style>
