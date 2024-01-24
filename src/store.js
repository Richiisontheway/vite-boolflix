import { reactive } from 'vue';

export const store = reactive({
    authBearer: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzdjMmFiYTQ4OTkxYWU1M2Y4ZmI2ZjJkODEzMTM5OCIsInN1YiI6IjY1YjBmMjNlMjc5MGJmMDE5MzU2NGI5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TdJzcR-9AfUV3AT9Rd25jb1cN7usYqitCuMm80RqxBk',
    searchText:'',
    movieList: [],
    baseUrlFlags: 'https://flagsapi.com/IT/flat/64.png',
});