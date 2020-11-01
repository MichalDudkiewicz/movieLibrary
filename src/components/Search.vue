<template>
    <div>
        <h1>Baza filmów</h1>
        <form>
            <div class="form-group">
                <label for=inputTitle>Tytuł</label>
                <input type="text" id=inputTitle class="form-control" placeholder="Podaj tytuł lub fragment tytułu filmu"/>
            </div>
            <div class="form-group row">
            <label class="col-sm-4 col-form-label" for="inputProductionFrom">Rok produkcji od:</label>
            <div class="col-sm-8">
                <input type="text" id=inputProductionFrom class="form-control"  placeholder="Liczba naturalna z przedziału 1900-2019"/>
            </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-4 col-form-label" for="inputProductionTo">Rok produkcji do:</label>
                <div class="col-sm-8">
                    <input type="text" id=inputProductionTo class="form-control" placeholder="Liczba naturalna z przedziału 1900-2019"/>
                </div>
            </div>
            <div class="form-group">
            <label for="inputCast">Obsada</label>
            <input type="text" id="inputCast" class="form-control" placeholder="Imię i nazwisko"/>
            </div>
            <div class="form-group row">
                <input v-on:click="filter()" type="button" class="btn btn-info col-sm-12" value="Szukaj"/>
            </div>
        </form>
    </div>
</template>

<script>
    import jsonMovies from '../data/movies.json'
    import _ from 'underscore'
    import $ from 'jquery'
    export default {
        data() {
            return {
                filteredMovies: jsonMovies,
            }
        },
        methods: {
            filter() {
                this.filteredMovies = jsonMovies;
                var title = $("#inputTitle").val();
                if(title)
                {
                    this.filterTitles(title);
                }
                var yearFrom = $("#inputProductionFrom").val();   
                if (yearFrom)
                {
                    this.filterYearFrom(yearFrom);
                }
                var yearTo = $("#inputProductionTo").val();
                if (yearTo)
                {
                    this.filterYearTo(yearTo);
                }   
                var cast = $("#inputCast").val();  
                if (cast)
                {
                    this.filterCast(cast);
                }
                this.$root.$emit('moviesFilteredEvent', this.filteredMovies);
            },
            filterTitles (text) {      
                var titleRe = new RegExp(text, 'i');         
                this.filteredMovies = _.filter(this.filteredMovies, function(movie){ return movie.title.match(titleRe); });
            },
            filterYearFrom (year) {      
                this.filteredMovies = _.filter(this.filteredMovies, function(movie){ return movie.year >= year; });
            },
            filterYearTo (year) {           
                this.filteredMovies = _.filter(this.filteredMovies, function(movie){ return movie.year <= year; });
            },
            filterCast (text) {      
                var castRe = new RegExp(text, 'i');         
                this.filteredMovies = _.filter(this.filteredMovies, function(movie){ 
                    for (var actor in movie.cast)
                    {
                        if (movie.cast[actor].match(castRe))
                        {
                            return true;
                        }
                    }
                    return false; });
            }
        }
    }
</script>