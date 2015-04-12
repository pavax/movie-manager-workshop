/* global angular */
(function () {
    "use strict";

    angular
        .module('movie-manager.users', [
            'ui.router'
        ])
        .config(config);

    // @ngInject
    function config($stateProvider) {

        $stateProvider
            .state('users', {
                url: '/users',
                abstract: true,
                template: '<div ui-view></div>'
            })
            .state('users.registration', {
                url: '',
                templateUrl: 'user/registration/user.registration.tpl.html',
                controller: 'UserRegistrationController',
                controllerAs: 'regCtrl'
            });
    }

}());