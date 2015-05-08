(function () {
    angular.module('movie-manager.movies')
        .controller('MovieDetailController', function (MovieModel) {
            var self = this;

            this.MovieModel = MovieModel;

            this.currentMovie = MovieModel.currentMovie;

            this.saveToMyList = function () {
                MovieModel.saveMovieToMyList(
                    self.currentMovie.imdbID,
                    self.currentMovie.Title,
                    self.currentMovie.Year
                );
            };
        });
}());