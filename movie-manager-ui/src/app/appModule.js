/* global angular, CONFIG */
(function () {
    "use strict";
    angular.module('movie-manager', [
        'templates-app',
        'ngMessages',
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',
        'angular-growl',

        'movie-manager.common',
        'movie-manager.home',
        'movie-manager.movies',
        'movie-manager.users'
    ])
        .constant('CONFIG', CONFIG)
        .config(function ($urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
        })
        .config(['growlProvider', function (growlProvider) {
            growlProvider.globalTimeToLive(5000);
        }])
        .run(init);

    function init($rootScope, $state, growl) {

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            console.log("$stateChangeStart");
        });

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            console.error("$stateChangeError");
            if (error && error.msg) {
                growl.addErrorMessage(error.msg);
            } else {
                growl.addErrorMessage('Huston we have a problem');
            }
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            console.log("$stateChangeSuccess");
        });

        $rootScope.$state = $state;
    }
}());

