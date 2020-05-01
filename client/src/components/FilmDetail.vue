<template lang="html">
  <div>
      <h1>{{film.title}} </h1>
      <h2>Genre: {{film.Genre}}  </h2>
      <h2>Rating: {{film.rating}}  </h2>
      <h2>Release Date: {{film.release_date}}</h2>
      <h2>Running time: {{film.runtime}}</h2>
      <h2>Crew:<ul><li>Director: {{film.crew.director}}</li><li>Producer: {{film.crew.producer}}</li></ul></h2>
  </div>
</template>

<script>
export default {
    name:'film-detail',
    props:['film']
}
</script>

<style lang="css" scoped>
</style>
