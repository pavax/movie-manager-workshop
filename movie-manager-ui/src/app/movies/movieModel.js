/* global angular */
(function () {
    "use strict";
    angular
        .module('movie-manager.movies')
        .factory('MovieModel', function (MovieSearchResource) {

            var currentMovie = {};

            var searchResults = [];

            var myMovieList = [];

            function initMovie(movieId) {
                return MovieSearchResource.movieInfo(movieId)
                    .then(function (successResponse) {
                        angular.copy(successResponse, currentMovie);
                        return successResponse;
                    });
            }

            function searchMovies(query) {
                return MovieSearchResource.search(query)
                    .then(function (successResponse) {
                        angular.copy(successResponse, searchResults);
                        return successResponse;
                    });
            }

            function saveMovieToMyList(movie) {
                myMovieList.push(movie);
            }

            return {
                initMovie: initMovie,
                searchMovies: searchMovies,
                searchResults: searchResults,
                currentMovie: currentMovie,
                saveMovieToMyList: saveMovieToMyList,
                myMovieList: myMovieList
            };
        });
}());
