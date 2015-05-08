(function () {
    angular.module('movie-manager.movies')
        .controller('MovieSearchController', function (MovieSearchResource, movies, $state, $stateParams) {
            var self = this;

            this.query = $stateParams.query;

            this.movies = movies;

            this.error = undefined;

            this.search = function () {
                delete self.error;
                delete self.movies;
                searchMovie();
            };

            function searchMovie() {
                $state.go('movies.search', {query: self.query});
            }
        });
}());