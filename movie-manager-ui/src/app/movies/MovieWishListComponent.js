/* global angular */
(function () {
    "use strict";
    angular
        .module('movie-manager.movies')
        .directive('movieWishListComponent', function () {
            return {
                restrict: 'A',
                controller: function (MovieModel, $modal) {
                    this.MovieModel = MovieModel;

                    this.openModal = function (movieId) {
                        var modalInstance = $modal.open({
                            templateUrl: 'movieDetailModal.html',
                            controller: function ($modalInstance) {
                                this.ok = function () {
                                    $modalInstance.close();
                                };
                                this.cancel = function () {
                                    $modalInstance.dismiss();
                                };
                            },
                            controllerAs: 'modalCtrl',
                            resolve: {
                                init: function () {
                                    return MovieModel.initMovieDetails(movieId);
                                }
                            }
                        });
                    };
                },
                controllerAs: 'ctrl',
                bindToController: true,
                templateUrl: 'movies/movieWishListComponent.tpl.html'
            };
        });
}());