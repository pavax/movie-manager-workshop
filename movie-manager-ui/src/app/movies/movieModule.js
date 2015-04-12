/* global angular */
(function () {
    "use strict";

    angular
        .module('movie-manager.movies', [
            'ui.router'
        ])
        .config(config);

    // @ngInject
    function config($stateProvider) {

        $stateProvider
            .state('movies', {
                url: '/movies',
                abstract: true,
                templateUrl: 'movies/movies.tpl.html'
            })
            .state('movies.search', {
                url: '',
                templateUrl: 'movies/search/movies.search.tpl.html',
                controller: 'MovieSearchController',
                controllerAs: 'searchCtrl'
            })
            .state('movies.detail', {
                url: '/details?movieId',
                templateUrl: 'movies/details/movie.detail.tpl.html',
                controller: 'MovieDetailController',
                controllerAs: 'detailCtrl',
                resolve: {
                    movie: function (MovieSearchResource, $stateParams) {
                        return MovieSearchResource.movieInfo($stateParams.movieId);
                    },
                    movieComments: function (MovieCommentResource, $stateParams) {
                        return MovieCommentResource.findCommentsForMovie($stateParams.movieId)
                            .then(function(successResponse){
                                return successResponse.data.content;
                            });
                    }
                }
            });
    }

}());