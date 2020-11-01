<template>
    <div>
        <h1>Filmy wg gatunku</h1>
        <ol v-for="(movies, genre) in moviesByGenre()" v-bind:key="genre" >
            <p class="h5">{{genre}}</p>
            <div v-for="(movie, index) in movies" v-bind:key="movie.id">
                {{ index + 1}}. {{ movie.title }}
            </div>
        </ol>
    </div>
</template>

<script>
    import jsonMovies from '../data/movies.json'
    import _ from 'underscore';
    export default {
        methods: {
            moviesByGenre () {               
                var movies = _.chain(jsonMovies)
                                        .map(function(movie){ 
                    return _.map(movie.genres, function(genre){ 
                        return {title: movie.title, genre: genre}
                    }); }).flatten().value();
                movies = movies.slice(0, 100);
                movies = _.groupBy(movies, 'genre');

                for (var gen in movies)
                {
                    for (var movie in movies[gen])
                    {
                        delete movies[gen][movie]['genre'];
                    }
                }
                return movies;
            }
        }
    }
</script>
