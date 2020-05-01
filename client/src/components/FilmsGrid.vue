<template lang="html">
  <div class="film-wrapper">

          <film-grid-item v-if="!selectedFilm" v-for="(film, index) in films" :key="index" :film="film" />

    <film-detail v-if="film" :film="film" />
  </div>
</template>

<script>
import FilmGridItem from './FilmGridItem'
import MoviesService from '@/services/MoviesService.js'
import {eventBus} from '@/main.js'
export default {

    data(){
        return {
          films: [],
          selectedFilm: null
        };
    },

    mounted(){
        MoviesService.getMovies()
        .then(films => this.films = films),

        eventBus.$on('select-film',id =>{
            MoviesService.getMovie(id)
            .then(Film => this.selectedFilm = Film)
        })
    },

    components: {
        'film-grid-item': FilmGridItem
    },

    methods:{
        getFilms(){
            fetch("http://localhost:3000/api/movies/")
            .then(res=>res.json())
            .then(resData => this.films = resData)

        }
    }

}
</script>

<style lang="css" scoped>

.film-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
