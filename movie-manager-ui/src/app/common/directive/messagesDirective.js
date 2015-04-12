/* global angular */
(function () {
    "use strict";

    angular
        .module('movie-manager.common')
        .directive('messages', messages);

    function messages() {
        return {
            restrict: 'A',
            require: '^form',
            transclude: true,
            replace: true,
            scope: {
                fieldName: '@messages'
            },
            controller: function ($element) {
                this.form = $element.inheritedData('$formController');
            },
            controllerAs: 'ctrl',
            bindToController: true,
            templateUrl: 'common/directive/messages.tpl.html'
        };
    }

}());
