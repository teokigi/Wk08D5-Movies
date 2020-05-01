<template lang="html">
  <div class="film-wrapper">
    <film-grid-item v-for="(film, index) in films" :key="index" :film="film" />
  </div>
</template>

<script>
import FilmGridItem from './FilmGridItem'
export default {

    data(){
        return {
          films: []
        };
    },

    mounted(){
        this.getFilms();
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
