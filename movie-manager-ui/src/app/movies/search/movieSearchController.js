(function () {
    angular.module('movie-manager.movies')
        .controller('MovieSearchController', function (MovieSearchResource) {
            var self = this;

            this.query = undefined;
            this.movies = undefined;
            this.error = undefined;

            this.search = function () {
                delete self.error;
                delete self.movies;
                searchMovie();
            };

            function searchMovie() {
                self.loading = true;
                // Use the MovieSearchResource in order search for movies with the given query
            }
        });
}());