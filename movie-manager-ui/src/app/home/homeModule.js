/* global angular */
(function () {
    "use strict";

    angular
        .module('movie-manager.home', [
            'ui.router'
        ])

        .config(config);

    // @ngInject
    function config($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'home/home.tpl.html'
        });
    }

}());