/* global angular */
(function () {
    "use strict";
    angular
        .module('movie-manager.movies')
        .directive('movieSearchComponent', function () {
            return {
                restrict: 'A',
                scope: {},
                controller: function (MovieModel) {

                    var self = this;

                    this.MovieModel = MovieModel;

                    this.query = undefined;

                    this.error = undefined;

                    this.search = function () {
                        delete self.error;
                        searchMovie();
                    };

                    function searchMovie() {
                        self.loading = true;
                        MovieModel.searchMovies(self.query)
                            .then(function (movies) {

                            }, function (error) {
                                self.error = error;
                            }).finally(function () {
                                self.loading = false;
                            });
                    }
                },
                controllerAs: 'searchCtrl',
                bindToController: true,
                templateUrl: 'movies/search/movieSearchComponent.tpl.html'
            };
        });
}());