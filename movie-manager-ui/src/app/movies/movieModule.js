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
                template: '<div ui-view></div>'
            })
            .state('movies.search', {
                url: '?query',
                templateUrl: 'movies/search/movies.search.tpl.html',
                controller: 'MovieSearchController',
                controllerAs: 'searchCtrl',
                resolve: {
                    movies: function (MovieSearchResource, $stateParams) {
                        if ($stateParams.query) {
                            return MovieSearchResource.search($stateParams.query);
                        }
                    }
                }
            })
            .state('movies.details', {
                url: '/details?movieIdX',
                template: '<div movie-detail-component show-wish-list-btn="true"></div>',
                resolve: {
                    init: function (MovieModel, $stateParams) {
                        return MovieModel.initMovieDetails($stateParams.movieIdX);
                    }
                }
            })
        ;
    }

}());