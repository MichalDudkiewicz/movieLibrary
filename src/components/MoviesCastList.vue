<template>
    <div>
        <h1>Filmy wg obsady</h1>
        <ol v-for="(movies, actor) in moviesByCast()" v-bind:key="actor" >
            <p class="h5">{{actor}}</p>
            <div v-for="(movie, index) in movies" v-bind:key="movie.id">
                {{ index + 1}}. {{ movie.title }}
            </div>
        </ol>
    </div>
</template>

<script>
    import _ from 'underscore';
    import jsonMovies from '../data/movies.json'
    export default {
        methods: {
                moviesByCast () {               
                    var movies = _.chain(jsonMovies)
                                            .map(function(movie){ 
                        return _.map(movie.cast, function(actor){ 
                            return {title: movie.title, actor: actor}
                        }); }).flatten().value();
                    movies = movies.slice(0, 100);
                    movies = _.groupBy(movies, 'actor');

                    for (var name in movies)
                    {
                        for (var movie in movies[name])
                        {
                            delete movies[name][movie]['actor'];
                        }
                    }
                    return movies;
                }
            }
        }
    
</script>

