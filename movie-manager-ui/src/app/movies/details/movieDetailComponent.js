/* global angular */
(function () {
    "use strict";
    angular
        .module('movie-manager.movies')
        .directive('movieDetailComponent', function () {
            return {
                restrict: 'A',
                scope: {
                    showWishListBtn: '@'
                },
                controller: function (MovieModel) {
                    var self = this;

                    this.showWishListBtn = this.showWishListBtn || false;

                    this.MovieModel = MovieModel;

                    this.currentMovie = MovieModel.currentMovie;

                    this.saveToMyList = function () {
                        MovieModel.saveMovieToMyList(
                            self.currentMovie.imdbID,
                            self.currentMovie.Title,
                            self.currentMovie.Year
                        );
                    };
                },
                controllerAs: 'detailCtrl',
                bindToController: true,
                templateUrl: 'movies/details/movieDetailComponent.tpl.html'
            };
        });
}());