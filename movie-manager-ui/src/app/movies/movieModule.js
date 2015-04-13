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
                template: '<div movie-search-component></div>'
            })
            .state('movies.detail', {
                url: '/details?movieId',
                templateUrl: 'movies/details/movie.detail.tpl.html',
                controller: 'MovieDetailController',
                controllerAs: 'detailCtrl',
                resolve: {
                    init: function (MovieModel, $stateParams) {
                        return MovieModel.initMovie($stateParams.movieId);
                    }
                }
            });
    }
}());