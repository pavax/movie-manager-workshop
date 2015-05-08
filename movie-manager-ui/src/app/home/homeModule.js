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
            templateUrl: 'home/home.tpl.html',
            controllerAs: 'ctrl',
            controller: function (growl) {
                this.addSpecialWarnMessage = function () {
                    growl.addWarnMessage("This adds a warn message");
                    growl.addInfoMessage("This adds a info message");
                    growl.addSuccessMessage("This adds a success message");
                    growl.addErrorMessage("This adds a error message");
                };
            }
        });
    }

}());