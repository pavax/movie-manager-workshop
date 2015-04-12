(function () {
    angular.module('movie-manager.movies')
        .controller('MovieDetailController', function (MovieSearchResource, movie, movieComments) {
            var self = this;

            this.movie = movie;

            this.comments = movieComments;
        });
}());