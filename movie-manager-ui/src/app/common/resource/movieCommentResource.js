(function () {
    angular.module('movie-manager.common')
        .factory('MovieCommentResource', function ($http, CONFIG) {

            var apiUrl = CONFIG.APP_URL_API + '/movie-comment';

            function findCommentsForMovie(movieId) {
                return $http.get(apiUrl + '/find/byMovieId', {params: {movieId: movieId, pageNumber: 0}});
            }

            return {
                findCommentsForMovie: findCommentsForMovie
            };
        });
})();
