<template>
    <div>
        <table class="table-condensed table-hover container-fluid">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Production Year</th>
                    <th>Cast</th>
                    <th>Genres</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="movie in movies.slice(0,moviesShow)" v-bind:key="movie.id" >
                    <td>{{movie.title}}</td>
                    <td>{{movie.year}}</td>
                    <td>{{movie.cast.join(', ')}}</td>
                    <td>{{movie.genres.join(', ')}}</td>
                </tr>
            </tbody>
        </table>
        <div class="form-group row">
            <input v-on:click="moviesShow += 10" type="button" class="btn btn-info col-sm-12" value="Pokaż więcej"/>
        </div>
    </div>
</template>

<script>
    import jsonMovies from '../data/movies.json'
    export default {
        data() {
            return {
                movies: jsonMovies,
                moviesShow: 10
            }
        },
        mounted()
        {
            this.$root.$on('moviesFilteredEvent', (movies) => {
                this.movies = movies;
            });
        }
    }
</script>
