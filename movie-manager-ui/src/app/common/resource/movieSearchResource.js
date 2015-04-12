(function () {
    angular.module('movie-manager.common')
        .constant('OMDB_URL', 'http://www.omdbapi.com/')
        .factory('MovieSearchResource', function ($http, OMDB_URL, $q) {
            function search(query) {
                return $http.get(OMDB_URL, {params: {s: query}})
                    .then(function (response) {
                        if (response.data.Error) {
                            return $q.reject({msg: response.data.Error});
                        } else {
                            return response.data.Search;
                        }
                    });
            }

            function movieInfo(imdbid) {
                return $http.get(OMDB_URL, {params: {i: imdbid}})
                    .then(function (response) {
                        var data = response.data;
                        if (data.Error) {
                            return $q.reject({msg: data.Error});
                        } else {
                            data.movieId = imdbid;
                            return data;
                        }
                    });
            }

            return {
                search: search,
                movieInfo: movieInfo
            };
        });
})();
