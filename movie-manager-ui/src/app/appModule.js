/* global angular, CONFIG */
(function () {
    "use strict";
    angular.module('movie-manager', [
        'templates-app',
        'ngMessages',
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',

        'movie-manager.common',
        'movie-manager.home',
        'movie-manager.movies',
        'movie-manager.users'
    ])
        .constant('CONFIG', CONFIG)
        .config(uiRouterConfig)
        .run(init);

    function uiRouterConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    }

    function init($rootScope, $state) {

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            console.log("$stateChangeStart");
        });

        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            console.log("$stateChangeError");
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            console.log("$stateChangeSuccess");
        });

        $rootScope.$state = $state;
    }
}());

