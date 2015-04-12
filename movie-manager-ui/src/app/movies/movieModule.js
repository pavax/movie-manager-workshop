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
            // TODO Define the details state for movies
        ;
    }

}());