/* global angular */
(function () {
    "use strict";
    angular
        .module('movie-manager.movies')
        .directive('movieComments', function () {
            return {
                restrict: 'A',
                scope: {
                    comments: '='
                },
                controller: function () {

                },
                controllerAs: 'ctrl',
                bindToController: true,
                templateUrl: 'movies/movieComments.tpl.html'
            };
        });
}());