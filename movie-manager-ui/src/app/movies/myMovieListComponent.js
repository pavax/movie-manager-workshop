/* global angular */
(function () {
    "use strict";
    angular
        .module('movie-manager.movies')
        .directive('myMovieListComponent', function () {
            return {
                restrict: 'A',
                scope: {},
                controller: function (MovieModel) {
                    this.MovieModel = MovieModel;
                },
                controllerAs: 'ctrl',
                bindToController: true,
                templateUrl: 'movies/myMovieListComponent.tpl.html'
            };
        });
}());