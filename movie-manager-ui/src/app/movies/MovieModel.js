/* global angular */
(function () {
    "use strict";
    angular
        .module('movie-manager.movies')
        .factory('MovieModel', function (MovieSearchResource) {

            var myMovieList = [];

            var currentMovie = {};

            var searchResult = [];

            function initCurrentMovie(movieId){
                return MovieSearchResource.movieInfo(movieId)
                    .then(function(successResponse){
                        angular.copy(successResponse, currentMovie);
                        return successResponse;
                    });
            }

            function saveMovieToMyList(movieId, title, year) {
                myMovieList.push(
                    {
                        movieId: movieId,
                        title: title,
                        year: year
                    }
                );
            }

            return {
                saveMovieToMyList: saveMovieToMyList,
                myMovieList: myMovieList,
                currentMovie: currentMovie,
                initMovieDetails: initCurrentMovie
            };
        });
}());
