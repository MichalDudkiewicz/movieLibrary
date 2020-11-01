<template>
  <div id="app">
    <body>
      <Search/>
      <MoviesTable/>
      <MoviesGenreList/>
      <MoviesCastList/>
    </body>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import MoviesTable from './components/MoviesTable.vue'
import MoviesGenreList from './components/MoviesGenreList.vue'
import MoviesCastList from './components/MoviesCastList.vue'

export default {
  name: 'App',
  components: {
    Search,
    MoviesTable,
    MoviesGenreList,
    MoviesCastList
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  margin-right: 100px;
  margin-left: 100px;
}

</style>
