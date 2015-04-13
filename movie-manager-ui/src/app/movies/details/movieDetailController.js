(function () {
    angular.module('movie-manager.movies')
        .controller('MovieDetailController', function (MovieSearchResource, MovieModel) {
            var self = this;

            this.MovieModel = MovieModel;

            this.movie = MovieModel.currentMovie;


            this.add = function(selectedMovie){
                self.MovieModel.saveMovieToMyList(selectedMovie);
            };

        });
}());