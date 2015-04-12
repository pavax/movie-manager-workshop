/* global angular */
(function () {
    "use strict";

    angular
        .module('movie-manager.common')
        .factory('PromiseService', PromiseService);

    // @ngInject
    function PromiseService($q, $timeout) {

        return {
            createAndResolve: createAndResolve,
            createAndReject: createAndReject
        };

        function createAndResolve(optionalResponse, timeout) {
            var deferred = $q.defer();
            $timeout(function() {
                deferred.resolve(optionalResponse);
            }, timeout || 0);
            return deferred.promise;
        }

        function createAndReject(optionalRejection, timeout) {
            var deferred = $q.defer();
            $timeout(function() {
                deferred.reject(optionalRejection);
            }, timeout || 0);
            return deferred.promise;
        }

    }

}());