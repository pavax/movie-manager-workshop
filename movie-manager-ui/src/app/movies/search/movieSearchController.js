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
                MovieSearchResource.search(self.query)
                    .then(function (movies) {
                        self.movies = movies;
                    }, function (error) {
                        self.error = error;
                    }).finally(function () {
                        self.loading = false;
                    });
            }
        });
}());