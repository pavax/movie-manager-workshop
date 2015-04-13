/* global angular */
(function () {
    "use strict";

    angular
        .module('movie-manager.common')
        .directive('integerValidator', function () {
            return {
                require: 'ngModel',
                link: function (scope, elm, attrs, ngModelController) {
                    var INTEGER_REGEXP = /^[\-|\+]?\d+$/;

                    ngModelController.$validators.integer = function (modelValue, viewValue) {
                        var value = modelValue;
                        return ngModelController.$isEmpty(value) || INTEGER_REGEXP.test(value);
                    };
                }
            };
        })
        .directive('greater', function () {
            return {
                require: 'ngModel',
                link: function (scope, elm, attrs, ngModelController) {
                    ngModelController.$validators.greater = function (modelValue, viewValue) {
                        var value = modelValue;
                        return ngModelController.$isEmpty(value) || parseFloat(value) > attrs.greater;
                    };
                }
            };
        })
        .directive('numberFormat', function ($filter) {
            return {
                require: 'ngModel',
                link: function (scope, elm, attrs, ngModelController) {
                    var decimals = attrs.numberFormat || 0;
                    elm.bind('blur', function () {
                        if (ngModelController.$viewValue && ngModelController.$valid) {
                            ngModelController.$viewValue = $filter('number')(ngModelController.$modelValue, decimals);
                            ngModelController.$render();
                        }
                    });

                    elm.bind('focus', function () {
                        if (ngModelController.$viewValue && ngModelController.$valid) {
                            ngModelController.$viewValue = ngModelController.$viewValue.toString().replace(/[',]/g, '');
                            ngModelController.$render();
                        }
                    });

                    ngModelController.$formatters.push(function (data) {
                        //Model -> View
                        return $filter('number')(data, decimals);
                    });
                }
            };
        });
}());