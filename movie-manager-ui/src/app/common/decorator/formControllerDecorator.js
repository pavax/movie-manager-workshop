/* global angular */
(function () {
    "use strict";

    angular
        .module('movie-manager.common')
        .config(formControllerDecorator);

    // @ngInject
    function formControllerDecorator($provide) {
        $provide.decorator('formDirective', function($delegate) {

            var directive = $delegate[0];

            directive.controller.prototype.$reset = function() {
                this.$submitted = false;
                this.$setUntouched();
                this.$setPristine();
            };

            return $delegate;
        });
    }

}());