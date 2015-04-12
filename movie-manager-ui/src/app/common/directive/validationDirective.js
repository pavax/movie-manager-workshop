/* global angular */
(function () {
    "use strict";
    angular
        .module('movie-manager.common')
        .directive('validation', validation);

    function validation() {
        return {
            restrict: 'A',
            require: '^form, ngModel',
            transclude: true,
            replace: true,
            scope: {
                fieldName: '@validation'
            },
            controller: function ($element) {
                this.form = $element.inheritedData('$formController');

                this.field = function () {
                    return this.form[this.fieldName];
                };

                this.hasSuccess = function () {
                    var field = this.field();
                    return field && field.$valid && (field.$touched || field.$dirty || this.form.$submitted);
                };

                this.hasError = function () {
                    var field = this.field();
                    return field && !field.$valid && (field.$touched || field.$dirty || this.form.$submitted);
                };
            },
            controllerAs: 'ctrl',
            bindToController: true,
            template: '<div  ng-class="{ \'has-success\': ctrl.hasSuccess(), \'has-error\': ctrl.hasError() }" ng-transclude></div>'
        };
    }
}());
