<template lang="html">
  <div class="filmdetail">
       <button type="button" class="action-btn" v-on:click="deSelectFilm">Hide Details</button>
      <div class="filmTitle">{{film.title}} </div>
      <h2>Genre: {{film.Genre}}  </h2>
      <h2>Rating: {{film.rating}}  </h2>
      <h2>Release Date: {{film.release_date}}</h2>
      <h2>Running time: {{film.runtime}}</h2>
      <h2>Crew:<ul><li>Director: {{film.crew.director}}</li><li>Producer: {{film.crew.producer}}</li></ul></h2>
      <h2>Summary:</h2><h3>{{film.summary}}</h3>

  </div>
</template>

<script>
import {eventBus} from '@/main.js'
export default {

    name:'film-detail',

    props:['film'],

    methods:{
        deSelectFilm() {
            console.log('De-Select film clicked');
          //TODO: Code film Selected Method
          eventBus.$emit('de-select-film', this.film)
        }
    }
}
</script>

<style lang="css" scoped>
.filmTitle{
    font-family:impact;
    letter-spacing:20px;
    text-transform: uppercase;
    font-size:60px;
    text-shadow:8px 5px 10px black;
}
.filmdetail{
    padding:50px;
}
.action-btn {
  background-color: #006989;
 border: none;
 color: white;
 padding: 15px 32px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 margin: 4px 2px;
 cursor: pointer;
}
</style>
