/* global angular */
(function () {
    "use strict";

    angular
        .module('movie-manager.common')
        .config(uiRouterDecorator);

    // @ngInject
    function uiRouterDecorator(
        $provide) {

        $provide.decorator('$state', function ($delegate) {
            $delegate._go = $delegate.go;
            $delegate.go = go;
            return $delegate;

            function go(to, params, options) {
                options = options || {};
                // in case of missing 'reload' append our explicit 'true'
                if (angular.isUndefined(options.reload)) {
                    options.reload = true;
                }
                $delegate._go(to, params, options);
            }

        });

    }

})();